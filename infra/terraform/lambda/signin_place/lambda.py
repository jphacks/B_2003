import sys
import os
import pymysql
 
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
 
    item_count = 0
 
    with conn.cursor() as cur:
        cur.execute("select id, name from test_table")
        for row in cur:
            item_count += 1
            print(row)
 
    return "Get %d items from RDS MySQL table" %(item_count) 
 
 