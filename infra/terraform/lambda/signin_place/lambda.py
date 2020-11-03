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
    body = json.loads(event['body'])
    print(body)
    email_address = body['email_address']
    password = body['password']
    name = 'NULL'
    facilityID = 'NULL' 
    password_token = 'NULL'
    
    tmp = [(email_address), (password)]
    
    with conn.cursor(pymysql.cursors.DictCursor) as cur: 
        try:
            #TODO add password認証
            cur.execute("SELECT name, facilityID, password_token FROM facility WHERE email_address= %s AND password= %s", [(email_address), (password)])
            row = cur.fetchone()
            if row == None:
                print('no Exist in facility')
                body = json.dumps({
                    "result":0,
                })
                conn.commit()
                return { 
                    'isBase64Encoded': False,
                    'statusCode': 200,
                    'headers':{ 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }, 
                    'body': body
                }
            while row is not None:
                result = 1
                print(row)
                name = row['name']
                facilityID = row['facilityID']
                password_token = row['password_token']
                row = cur.fetchone()
        except Exception as e:
            print('Exception',e)
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
    
    #データベースコミット！ 
    conn.commit()
    #conn.close()
    print('name=',name)
    print('facilityID=',facilityID)
    print('password_token=',password_token)
        
    body = json.dumps({
        'result':1,
        'name' : name,
        'facilityID': facilityID,
        'password_token': password_token
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
 