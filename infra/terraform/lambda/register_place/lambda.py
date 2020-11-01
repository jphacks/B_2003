import sys
import os
import pymysql
import json

#add to generate passward
import string
import secrets
 
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


#to generate password
def pass_gen(size=12):
   chars = string.ascii_uppercase + string.ascii_lowercase + string.digits
   # 記号を含める場合
   # chars += '%&$#()'

   return ''.join(secrets.choice(chars) for x in range(size))


# main関数(handlerからスタート, eventから引数とってくる,受け取り方よくわからんから変数あるものとしてやって)
def handler(event, context): 
    print(event['body'])
    body = json.loads(event['body'])
    name = body["name"]
    password = body["password"]
    email_address = body["email_address"]
    limit_days = body["limit"]
    
    #TODO password_token(現在人数取得用のパスワード)ランダム作成
    password_token = pass_gen(10)
    
    result = 2
    item_count = 0
 
    with conn.cursor(pymysql.cursors.DictCursor) as cur:
        #SQLクエリ文発行、テーブル名,カラム名はER図に記載
        
        #被り確認
        try:
            cur.execute("SELECT name FROM facility WHERE password = %s AND email_address = %s", (password, email_address))
            flag = 0
            for i in cur:
                flag = 1
                break
            
            if flag >= 1:
                print("already registered")
                return {
                    'isBase64Encoded': False,
                    'statusCode': 200,
                    'headers':{ 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': '{"result": "1"}'
                }
        except Exception as e:
            print(e)
            result = 0
        
        sql =  "INSERT INTO facility (name, password, email_address, limit_days, password_token) VALUES (%s, %s, %s, %s, %s)"
        tmp = (name, password,email_address, int(limit_days), password_token)
        print(tmp) 
        try:
            cur.execute(sql, tmp)
        
        except Exception as e:
            print(e)
            result = 0
            
        #データベースコミット！ 
        conn.commit()
        conn.close()
    
    #異常終了
    print("result :" + str(result))
    if result == 0:
        return {
            'isBase64Encoded': False,
            'statusCode': 200,
            'headers': {},
            'body': '{"result": "0"}'
        }
        

    print("finish register_place")
    print("password_token : " + password_token)
    body = json.dumps({
        "result":result,
        "password_token": password_token
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
 