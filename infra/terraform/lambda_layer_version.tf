resource "aws_lambda_layer_version" "pymysql" {
  filename            = data.archive_file.pymysql_layer.output_path
  layer_name          = "pymysql"
  compatible_runtimes = ["python3.6", "python3.7", "python3.8"]
}