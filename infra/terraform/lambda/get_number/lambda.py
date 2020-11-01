import sys
import os
import pymysql
 
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
    facility_name = event['name']
    password_token = event['password_token']
    tmp = (facility_name, password_token)
    item_count = 0
    facilityID = "none"
    name_list = []
 
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        #SQLクエリ文発行、テーブル名,カラム名はER図に記載
        cur.execute("SELECT facilityID  FROM facility WHERE name = ? AND password_token = ?", tmp)
        
        if len(cur) == 0:
            return {
                'isBase64Encoded': False,
                'statusCode': 200,
                'headers': {},
                'body': '{"result": "0"}'
            }
            
        facilityID = cur[0]
    
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        cur.execute("SELECT users.name FROM facility_number INNER JOIN users ON users.userID = facility_number.userID WHERE facilityID = ?", facilityID)
        
        for row in cur:
            item_count += 1
            name_list.append(row['name'])
 
    print( "Get %d items from RDS MySQL table" %(item_count) )
    
    # returnは4パラメータで、辞書(or json)を返す
    return {
        'isBase64Encoded': False,
        'statusCode': 200,
        'headers': {},
        'body': '{"result": "1","name" : name_list}'
    }
    
 