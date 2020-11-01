import sys
import os
import pymysql
import string
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


def handler(event, context):
    print(event['body'])
    body = json.loads(event['body'])
    email_address = body['email_address']
    password = body['password']
    name = 'NULL'
    facilityID = 'NULL' 
    
    tmp = (email_address, password)
    
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        try:
            cur.execute("SELECT name, facilityID FROM facility WHERE email_address= %s AND password= %s", tmp)
            #print(cur.fetchone())
            for row in cur:
                result = 1
                print(row) 
                name = row['name']
                facilityID = row['facilityID']
        except Exception as e:
            print(e)
            body = json.dumps({
                'result': 0,
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
            name = 'None'
            facilityID = 'None'
    
    #データベースコミット！ 
    conn.commit()
    conn.close()
    print(name)
    print(facilityID)
    
    body = json.dumps({
        'result':1,
        'name' : name,
        'facilityID': facilityID
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
 