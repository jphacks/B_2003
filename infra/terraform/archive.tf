data "archive_file" "get_number" {
  type        = "zip"
  source_dir  = "${local.source_path}/get_number"
  output_path = "${local.output_path}/get_number/lambda.zip"
}

data "archive_file" "recognition" {
  type        = "zip"
  source_dir  = "${local.source_path}/recognition"
  output_path = "${local.output_path}/recognition/lambda.zip"
}

data "archive_file" "register_place" {
  type        = "zip"
  source_dir  = "${local.source_path}/register_place"
  output_path = "${local.output_path}/register_place/lambda.zip"
}

data "archive_file" "register_user" {
  type        = "zip"
  source_dir  = "${local.source_path}/register_user"
  output_path = "${local.output_path}/register_user/lambda.zip"
}

data "archive_file" "signin_place" {
  type        = "zip"
  source_dir  = "${local.source_path}/signin_place"
  output_path = "${local.output_path}/signin_place/lambda.zip"
}

data "archive_file" "pymysql_layer" {
  type        = "zip"
  source_dir  = "${local.source_path}/package/pymysql"
  output_path = "${local.output_path}/pymysql/layer.zip"
}
