import sys
import os
import boto3
import botocore
import pymysql
import base64
import uuid
import json
 
#rds settings
DB_USER = os.environ["user"]
DB_PASSWORD = os.environ["password"]
DB_HOST = os.environ["endpoint"]
DB_NAME = os.environ["db"]
 
try:
    conn = pymysql.connect(DB_HOST, user=DB_USER, passwd=DB_PASSWORD, db=DB_NAME, connect_timeout=5)
except Exception  as e:
    print("Fail connecting to RDS mysql instance")
    print(e)
    sys.exit()
 
print("Success connecting to RDS mysql instance")

#S3に画像を保存する必要は実質的にない。API定義ではS3を通しているが、DBにFaceD渡せば解決する。
#return変えてFaceID取得するべき


def upload_file(file_name, bucket, object_name=None):
    """Upload a file to an S3 bucket

    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified then file_name is used
    :return: True if file was uploaded, else False
    """
    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = file_name

    # Upload the file
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file_name, bucket, object_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True

def decode_base64(photo):
    return base64.b64decode(photo.encode('utf-8'))


def add_faces_to_collection(bucket, photo, collection_id, imageID): 
    client = boto3.client('rekognition')
    photo_bytes = decode_base64(photo) 
    response = client.index_faces(CollectionId=collection_id,
                Image={'Bytes':photo_bytes},
               #{ 'S3Object': {
                                      #'Bucket': bucket, 'Name': photo
                ExternalImageId= str(imageID), # 顔データ 
                MaxFaces=1,  # コレクションに追加する顔の最大数
                QualityFilter="AUTO",  # 顔データとしての質が悪いものが除外
                DetectionAttributes=['ALL'])  # 顔データの全てのランドマークを返す
    print('Results for ' + str(imageID)) 
    print('Faces indexed:')
    #TODO error handling
    for faceRecord in response['FaceRecords']:
        print('Face ID: ' + faceRecord['Face']['FaceId'])
        return faceRecord['Face']['FaceId']

    print('Faces not indexed:')
    for unindexedFace in response['UnindexedFaces']:
        return "error"

def handler(event, context):
    print(event['body']) 
    body = json.loads(event['body'])
    bucket = 'recognition'  #rekognitionを動かすためのバケット
    collection_id = 'Collection' #コレクション名
    
    # photo
    face_photo = body['face_photo']

    name = body['name']
    email_address = body['email_address']
    affiliation = body['affiliation']
    imageID = "NONE"
    
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        #被り確認
        try:
            cur.execute("SELECT name FROM users WHERE email_address = %s", email_address)
            row = cur.fetchone()
            print('row=',row)
            if row is not None:
                print("already registered")
                body = json.dumps({
                    "result":0,
                })
                return {
                    'isBase64Encoded': False,
                    'statusCode': 200,
                    'headers':{ 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': body
                }

            cur.execute("SELECT COUNT(*) FROM users")
            row = cur.fetchone()
            print('row=',row)
            imageID = row['COUNT(*)']

            print("imageID : " + str(imageID+1)) 
            newImageID = imageID +1
            print("imageID : " + str(newImageID)) 
        
            #TODO error handring
            #upload_file(face_photo, bucket, object_name = imageID)
            face_token = add_faces_to_collection(bucket, face_photo, collection_id, newImageID) 
            # face_tokenエラー
            print('face token=', face_token)
            if face_token == 'error':
                body = json.dumps({
                    "result": 1,
                })
                return {
                    'isBase64Encoded': False,
                    'statusCode': 200,
                    'headers':{ 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': body
                } 
            sql = "INSERT INTO users (userID, name, email_address, affiliation) VALUES (%s, %s, %s, %s)"
            tmp = [(face_token), (name), (email_address), (affiliation)]
            print('tmp=', tmp)
            cur.execute(sql, tmp)
            
        except Exception as e:
            print('Exception',e)
            body = json.dumps({
                "result":0,
            })
            return {
                'isBase64Encoded': False,
                'statusCode': 200,
                'headers':{ 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': body
            }
            
    conn.commit()
    #conn.close()
    body = json.dumps({
            "result":2,
        })
    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'headers':{ 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': body
    }
        
 