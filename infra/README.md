# 入退室管理システム Face app バックエンド  
## はじめに 
Terraformにて記述しています。  
Terraformは最新バージョンを使用してください。  
以下ではAWS CLIが使用でき、terraformが使用できるものとして話を進めます。  
  
## フォルダ構成  
```
.
├── api_gateway(moduleディレクトリ)
├── lambda(api_gatewayで使用するpythonの関数)
│   ├── get_number
│   ├── list_get
│   ├── recognition
│   ├── register_place
│   ├── register_user
│   ├── signin_place
│   └── package(gitに入っていません。理由は後述)
├── api_gateway.tf
├── variable.tf
...
```  
  
## 使用する前に  
lambda関数にpymysqlを使用しています。lambdaレイヤーを使用してpymysqlのパッケージをawsに追加する必要があります。  
package/pymysql/pythonの下にpymysqlをダウンロードしてください。  
  
## データベースの管理について  
データベースのusernameとパスワードはaws ssmparameterにて管理しています。ここで  
```
data "aws_ssm_parameter" "db_password" {
  name = "db_password"
}

data "aws_ssm_parameter" "db_username" {
  name = "db_username"
}
```
上記にあるようにdb_passwordとdb_usernameを作製し、任意の値をきめてください。これがDBを使う際のユーザーネームとパスワードになります。  
  
## インフラの構築  
terraform init
terraform applyをすることでリソースを立ち上げます。
  
## 顔認証の有効化  
AWS CLIからaws rekognitionを有効化してください。このとき付けるcollection名は"Collection"にしてください。(他の名前で使用したい場合はlambdaを直接書き換えてください)  
  
## DBの設定  
docker等を入れていないため、DBを手動でセットアップする必要があります(今後の展望)。  
以下のSQL文を入れてセットアップしてください。  
```
CREATE TABLE jphacks;
USE jphacks;
CREATE TABLE `facility`(
`facilityID` INT AUTO_INCREMENT,
`name` VARCHAR(40) NOT NULL,
`password` VARCHAR(40) NOT NULL,
`email_address` VARCHAR(100) NOT NULL,
`limit_days` INT NOT NULL,
`password_token` VARCHAR(10) NOT NULL,
PRIMARY KEY(facilityID));

CREATE TABLE `facility_number`(
`id` INT AUTO_INCREMENT,
`userID` VARCHAR(50) NOT NULL,
`facilityID` INT NOT NULL,
`starttime` DATETIME,
`endtime` DATETIME,
`is_leave` VARCHAR(1) NOT NULL,
PRIMARY KEY(id));

CREATE TABLE `users`(
`userID` VARCHAR(40) NOT NULL,
`name` VARCHAR(40) NOT NULL,
`email_address` VARCHAR(100) NOT NULL,
`affiliation` VARCHAR(100) NOT NULL
);
```  
  
以上でバックエンドの設定が完了です。おつかれさまでした。