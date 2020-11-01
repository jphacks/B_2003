import sys
import os
import pymysql
#add
import boto3
import datetime
 
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

def searchByimg(FileName):
    bucket = 'recognition'
    collectionId = 'Collection'
    fileName = fileName　#検索したい画像。渡し方要検討
    threshold = 70　#信頼度
    maxFaces = 2 #認識させる最大の顔の数

    client = boto3.client('rekognition')

    response = client.search_faces_by_image(CollectionId=collectionId,
                                            Image= {'Bytes': #ここを変更することで渡し方を変えられる。
                                                open(photo, 'rb').read()} ,
                                            FaceMatchThreshold=threshold,
                                            MaxFaces=maxFaces)

    faceMatches = response['FaceMatches']
    return faceMatches

def handler(event, context):
    
    face_photo = event["face_photo"]
    facilityID = event["facilityID"]
    
    #最初にリミットに達しているかの確認をする。（定義からの変更点）
    result = 0
    
    try:
        result = 2　#現在中にいない場合
        cur.execute("SELECT * FROM facility_number WHERE key=?", 1)
        print(cur.fetchone())
        int key_num = 0
        for row in cur:
            key_num = key_num + 1
        cur.execute("SELECT limit FROM facility WHERE facilityID=?", facilityID)
        print(cur.fetchone())
        int limit = 0
        for row in cur:
            limit = row[0]
        if key_num >= limit:
            return { #人数が制限を超えていたとき
                'isBase64Encoded': False,
                'statusCode': 200,
                'headers': {},
                'body': '{
                    "result": 1,
                }
        
    except Exception as e:
        print(e)
        result = 0
    
    
    faceMatches = searchByimg(face_photo)
    for match in faceMatches:
        result = 2 #一致する顔があった場合
        print('FaceId:' + match['Face']['FaceId'])
        print('Similarity: ' + "{:.2f}".format(match['Similarity']) + "%")
        faceID = match['Face']['FaceId']
        try:
            result = 2　#現在中にいない場合
            tmp = (faceID,)
            cur.execute("SELECT starttime FROM facility WHERE userID=? AND key=0", tmp)
            print(cur.fetchone())
            for row in cur:
                result = 3 #現在中にいる場合
                #starttime = row[0]
                dt_now = datetime.datetime.now()
                #TODO 早すぎる退出の例外処理
                                tmp2= (dt_now, faceID)
                cur.execute("UPDATE facility_number SET endtime= ? key =1 WHERE key=0 userID=?",tmp2)
            if(result = 2): #入ってきたとき
                dt_now = datetime.datetime.now()
                tmp1 = (faceID, facilityID, dt_now, 0)
                cur.execute("INSERT INTO facility_number VALUE (:userID, :facilityID, :starttime, :key)",tmp1)

                
        except Exception as e:
            print(e)
            result = 0
        
    
    '''
    item_count = 0
 
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        cur.execute("select id, name from test_table")
        for row in cur:
            item_count += 1
            print(row)
 
    return "Get %d items from RDS MySQL table" %(item_count) 
    '''
    
    # returnは4パラメータで、辞書(or json)を返す
    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'headers': {},
        'body': '{
            "result": result,
        }'
    }
 
 