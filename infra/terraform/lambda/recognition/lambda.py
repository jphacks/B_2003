import sys
import os
import pymysql
import json 
#add
import boto3
import datetime
import botocore
import base64
import uuid

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

def searchByimg(photo):
    bucket = 'recognition'
    collectionId = 'Collection'
    photo_bytes = decode_base64(photo)  #検索したい画像。渡し方要検討
    threshold = 70 #信頼度
    maxFaces = 2 #認識させる最大の顔の数
    
    client = boto3.client('rekognition')
    
    response = client.search_faces_by_image(CollectionId=collectionId,
                                            Image= {'Bytes':photo_bytes},
                                            FaceMatchThreshold=threshold,
                                            MaxFaces=maxFaces)
    
    faceMatches = response['FaceMatches']
    return faceMatches


def handler(event, context):
    print(event['body'])
    body = json.loads(event['body'])
    face_photo = body["face_photo"]
    facilityID = body["facilityID"]
    
    faceMatches = searchByimg(face_photo) 
    print(faceMatches)
    
    result = 0
    
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        for match in faceMatches:
            print('FaceId:' + match['Face']['FaceId'])
            print('Similarity: ' + "{:.2f}".format(match['Similarity']) + "%")
            faceID = match['Face']['FaceId']
            try:
                result = 2
                cur.execute("SELECT starttime FROM facility_number WHERE userID=%s AND is_leave=0", faceID)
                for row in cur:
                    result = 3 #現在中にいる場合
                    #TODO 早すぎる退出の例外処理
                    dt_now = datetime.datetime.now()
                    print('exit',dt_now)
                    cur.execute("UPDATE facility_number SET endtime= %s, is_leave=1 WHERE (is_leave=0 AND userID=%s) AND facilityID= %s",[(dt_now), (faceID),(facilityID)])
                if result == 3:
                    body = json.dumps({
                        "result":3,
                    })
                    conn.commit()
                    return { 
                        'isBase64Encoded': False,
                        'statusCode': 200,
                        'headers': {},
                        'body': body
                    } 
                
                print('start checking room limit')
                cur.execute("SELECT * FROM facility_number WHERE ((is_leave=0 AND facilityID=%s) AND (userID!=%s ))", [(facilityID),(faceID)])
                is_leave_num = 0
                row = cur.fetchone()
                while row is not None:
                  print('row=',row)
                  is_leave_num += 1
                  row = cur.fetchone()
                    
                print('now staying num=',is_leave_num)
                cur.execute("SELECT limit_days FROM facility WHERE facilityID=%s", facilityID)
                limit = 0 
                for row in cur:
                    limit = row['limit_days']
                print('limit=',limit)
                if is_leave_num >= limit:
                    body = json.dumps({
                        "result":1,
                    })
                    print('room over limit')
                    conn.commit()
                    return { #人数が制限を超えていたとき
                        'isBase64Encoded': False,
                        'statusCode': 200,
                        'headers': {},
                        'body': body
                    } 
                print("finish checking room limit")

                if result == 2:
                    dt_now = datetime.datetime.now()
                    tmp1 = [(faceID), (facilityID), (dt_now), (0)]
                    print('enter', tmp1)
                    cur.execute("INSERT INTO facility_number(userID, facilityID, starttime, is_leave) VALUE (%s, %s, %s, %s)",tmp1)
            except Exception as e:
                print('Exception ',e)
                result = 0
            
        print('finish searching By faceID')

    
    #データベースコミット！ 
    conn.commit()
    #conn.close()
    body = json.dumps({
        "result":result
    })
    # returnは4パラメータで、辞書(or json)を返す
    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'headers':{ 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': body
    }
 