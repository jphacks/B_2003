import sys
import os
import boto3
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


def add_faces_to_collection(bucket, photo, collection_id):

    client = boto3.client('rekognition')

    response = client.index_faces(CollectionId=collection_id,Image={"S3Object": {"Bucket": bucket,"Name": photo}}, ExternalImageId=photo,MaxFaces=1,QualityFilter="AUTO",DetectionAttributes=['ALL'])

    print('Results for ' + photo) 
    print('Faces indexed:')
    for faceRecord in response['FaceRecords']:
        print('  Face ID: ' + faceRecord['Face']['FaceId'])
        print('  Location: {}'.format(faceRecord['Face']['BoundingBox']))
        return faceRecord['Face']['FaceId']

    print('Faces not indexed:')
    for unindexedFace in response['UnindexedFaces']:
        return "error"
    """
        print(' Location: {}'.format(
            unindexedFace['FaceDetail']['BoundingBox']))
        print(' Reasons:')
        for reason in unindexedFace['Reasons']:
            print('   ' + reason)
    return len(response['FaceRecords'])
    """
    
#base64をデコードする
def convert_b64_string_to_bynary(s):
    return base64.b64decode(s.encode("UTF-8"))

def handler(event, context):
    print(event['body'])
    body = json.dumps(event['body'])
    bucket = 'recognition'  #rekognitionを動かすためのバケット
    collection_id = 'Collection' #コレクション名
    
    # photo
    base_64ed_image = body['face_photo']
    face_photo = convert_b64_string_to_bynary(base_64ed_image)
    
    name = body['name']
    email_address = body['email_address']
    affilitian = body['affilitian']
    
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        #被り確認
        try:
            cur.execute("SELECT name FROM user WHERE email_address = %s", (email_address))
            flag = 0
            for i in cur:
                flag = 1
                break
            
            if flag >= 1:
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
                    'body': '{"result": "0"}'
                }
        except Exception as e:
            print(e)
            
        conn.commit()
        conn.close()
    #TODO error handring
    face_token = add_faces_to_collection(bucket, face_photo, collection_id)
    # face_tokenエラー
    if face_token == 'error':
        body = json.dumps({
            "result":result,
            "password_token": password_token
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
    upload_file(face_photo, bucket, object_name = face_token)
 
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        sql = "INSERT INTO user (userID, name, email_address, affilitian) VALUES (%s, %s, %s, %s)"
        tmp = (face_token, name, email_address, affilitian)
        try:
            cur.execute(sql, tmp)
        except Exception as e:
            print(e)
        conn.commit()
        conn.close()
    
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
 
 