import sys
import os
import pymysql
import json
 
#rds settings
DB_USER = os.environ["user"]
DB_PASSWORD = os.environ["password"]
DB_HOST = os.environ["endpoint"]
DB_NAME = os.environ["db"]

# connect to SQL
 
try:
    conn = pymysql.connect(DB_HOST, user=DB_USER, passwd=DB_PASSWORD, db=DB_NAME, connect_timeout=5)
    print("OK")
except Exception  as e:
    print("Fail connecting to RDS mysql instance")
    print(e)
    sys.exit()
 
print("Success connecting to RDS mysql instance")

# main関数(handlerからスタート, eventから引数とってくる)
def handler(event, context):
    
    print('body=',event['body'])
    body = json.loads(event['body'])
    facility_name = body['name']
    password_token = body['password_token']
    tmp = [(facility_name), (password_token)]
    facilityID = "none"
    name_list = []
    item_count = 0
 
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        try:
            cur.execute("SELECT facilityID  FROM facility WHERE name= %s AND password_token= %s", tmp)
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
                    'headers': {},
                    'body': body
                }
            print('row[facilityID]=',row['facilityID'])    
            facilityID = row['facilityID']
            
            cur.execute("SELECT users.name FROM facility_number INNER JOIN users ON users.userID = facility_number.userID WHERE facilityID = %s AND is_leave=0", facilityID)
            row = cur.fetchone()
            while row is not None:
                print('row=',row)
                item_count += 1
                name_list.append(row['name'])
                row = cur.fetchone()
            print('name=',name_list)
            print( "Get %d items from RDS MySQL table" %(item_count) )
                   
        except Exception as e:
            print(e)
            result = 0
            
        #データベースコミット！ 
        conn.commit()
        #conn.close()
        
    body = json.dumps({
        "result":1,
        "name": name_list
    })
    
    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'headers': {            
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': body
    }
    