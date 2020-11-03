resource "aws_lambda_function" "get_number" {
  function_name = "get_number"
  handler       = "lambda.handler"
  role          = data.aws_iam_role.lambda_role.arn
  runtime       = "python3.8"

  filename         = data.archive_file.get_number.output_path
  source_code_hash = data.archive_file.get_number.output_base64sha256

  layers  = [aws_lambda_layer_version.pymysql.arn]
  timeout = 30
  environment {
    variables = {
      user     = aws_rds_cluster.db_cluster.master_username,
      password = aws_rds_cluster.db_cluster.master_password,
      endpoint = aws_rds_cluster.db_cluster.endpoint,
      db       = local.db_name
    }
  }

  vpc_config {
    security_group_ids = [
      aws_default_security_group.sg.id,
    ]
    subnet_ids = [
      aws_subnet.subnet_a.id,
      aws_subnet.subnet_b.id,
    ]
  }
}

resource "aws_lambda_function" "recognition" {
  function_name = "recognition"
  handler       = "lambda.handler"
  role          = data.aws_iam_role.lambda_role.arn
  runtime       = "python3.8"

  filename         = data.archive_file.recognition.output_path
  source_code_hash = data.archive_file.recognition.output_base64sha256

  layers  = [aws_lambda_layer_version.pymysql.arn]
  timeout = 30
  environment {
    variables = {
      user     = aws_rds_cluster.db_cluster.master_username,
      password = aws_rds_cluster.db_cluster.master_password,
      endpoint = aws_rds_cluster.db_cluster.endpoint,
      db       = local.db_name
      TZ       = "Asia/Tokyo"
    }
  }
  vpc_config {
    security_group_ids = [
      aws_default_security_group.sg.id,
    ]
    subnet_ids = [
      aws_subnet.subnet_a.id,
      aws_subnet.subnet_b.id,
    ]
  }
}

resource "aws_lambda_function" "register_place" {
  function_name = "register_place"
  handler       = "lambda.handler"
  role          = data.aws_iam_role.lambda_role.arn
  runtime       = "python3.8"

  filename         = data.archive_file.register_place.output_path
  source_code_hash = data.archive_file.register_place.output_base64sha256

  layers  = [aws_lambda_layer_version.pymysql.arn]
  timeout = 30
  environment {
    variables = {
      user     = aws_rds_cluster.db_cluster.master_username,
      password = aws_rds_cluster.db_cluster.master_password,
      endpoint = aws_rds_cluster.db_cluster.endpoint,
      db       = local.db_name
    }
  }
  vpc_config {
    security_group_ids = [
      aws_default_security_group.sg.id,
    ]
    subnet_ids = [
      aws_subnet.subnet_a.id,
      aws_subnet.subnet_b.id,
    ]
  }
}

resource "aws_lambda_function" "register_user" {
  function_name = "register_user"
  handler       = "lambda.handler"
  role          = data.aws_iam_role.lambda_role.arn
  runtime       = "python3.8"

  filename         = data.archive_file.register_user.output_path
  source_code_hash = data.archive_file.register_user.output_base64sha256

  layers  = [aws_lambda_layer_version.pymysql.arn]
  timeout = 30
  environment {
    variables = {
      user     = aws_rds_cluster.db_cluster.master_username,
      password = aws_rds_cluster.db_cluster.master_password,
      endpoint = aws_rds_cluster.db_cluster.endpoint,
      db       = local.db_name
    }
  }
  vpc_config {
    security_group_ids = [
      aws_default_security_group.sg.id,
    ]
    subnet_ids = [
      aws_subnet.subnet_a.id,
      aws_subnet.subnet_b.id,
    ]
  }
}

resource "aws_lambda_function" "signin_place" {
  function_name = "signin_place"
  handler       = "lambda.handler"
  role          = data.aws_iam_role.lambda_role.arn
  runtime       = "python3.8"

  filename         = data.archive_file.signin_place.output_path
  source_code_hash = data.archive_file.signin_place.output_base64sha256

  layers  = [aws_lambda_layer_version.pymysql.arn]
  timeout = 30
  environment {
    variables = {
      user     = aws_rds_cluster.db_cluster.master_username,
      password = aws_rds_cluster.db_cluster.master_password,
      endpoint = aws_rds_cluster.db_cluster.endpoint,
      db       = local.db_name
    }
  }
  vpc_config {
    security_group_ids = [
      aws_default_security_group.sg.id,
    ]
    subnet_ids = [
      aws_subnet.subnet_a.id,
      aws_subnet.subnet_b.id,
    ]
  }
}

resource "aws_lambda_function" "list_get" {
  function_name = "list_get"
  handler       = "lambda.handler"
  role          = data.aws_iam_role.lambda_role.arn
  runtime       = "python3.8"

  filename         = data.archive_file.list_get.output_path
  source_code_hash = data.archive_file.list_get.output_base64sha256

  layers  = [aws_lambda_layer_version.pymysql.arn]
  timeout = 30
  environment {
    variables = {
      user     = aws_rds_cluster.db_cluster.master_username,
      password = aws_rds_cluster.db_cluster.master_password,
      endpoint = aws_rds_cluster.db_cluster.endpoint,
      db       = local.db_name
    }
  }
  vpc_config {
    security_group_ids = [
      aws_default_security_group.sg.id,
    ]
    subnet_ids = [
      aws_subnet.subnet_a.id,
      aws_subnet.subnet_b.id,
    ]
  }
}