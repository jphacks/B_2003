resource "aws_api_gateway_rest_api" "jphacks" {
  name        = "JPHacks"
  description = "Created by AWS Lambda"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

# define get_number

resource "aws_api_gateway_resource" "get_number" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  parent_id   = aws_api_gateway_rest_api.jphacks.root_resource_id
  path_part   = "get_number"
}

resource "aws_api_gateway_method" "get_number" {
  rest_api_id   = aws_api_gateway_rest_api.jphacks.id
  resource_id   = aws_api_gateway_resource.get_number.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "get_number_response_200" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.get_number.id
  http_method = aws_api_gateway_method.get_number.http_method
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {}
  status_code = "200"
}

resource "aws_api_gateway_integration" "get_number" {
  rest_api_id             = aws_api_gateway_rest_api.jphacks.id
  resource_id             = aws_api_gateway_resource.get_number.id
  http_method             = aws_api_gateway_method.get_number.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  content_handling        = "CONVERT_TO_TEXT"
  uri                     = aws_lambda_function.get_number.invoke_arn
}

resource "aws_api_gateway_integration_response" "get_number" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.get_number.id
  http_method = aws_api_gateway_method.get_number.http_method
  status_code = aws_api_gateway_method_response.get_number_response_200.status_code
  response_templates = {
    "application/json" = ""
  }
  depends_on = [aws_api_gateway_integration.get_number]
}

resource "aws_api_gateway_deployment" "get_number" {
  depends_on = [aws_api_gateway_integration.get_number]
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  stage_name  = "get_number"
  lifecycle {
    create_before_destroy = true
  }
}

# define recognition

resource "aws_api_gateway_resource" "recognition" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  parent_id   = aws_api_gateway_rest_api.jphacks.root_resource_id
  path_part   = "recognition"
}

resource "aws_api_gateway_method" "recognition" {
  rest_api_id   = aws_api_gateway_rest_api.jphacks.id
  resource_id   = aws_api_gateway_resource.recognition.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "recognition_response_200" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.recognition.id
  http_method = aws_api_gateway_method.recognition.http_method
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {}
  status_code = "200"
}

resource "aws_api_gateway_integration" "recognition" {
  rest_api_id             = aws_api_gateway_rest_api.jphacks.id
  resource_id             = aws_api_gateway_resource.recognition.id
  http_method             = aws_api_gateway_method.recognition.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  content_handling        = "CONVERT_TO_TEXT"
  uri                     = aws_lambda_function.recognition.invoke_arn
}

resource "aws_api_gateway_integration_response" "recognition" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.recognition.id
  http_method = aws_api_gateway_method.recognition.http_method
  status_code = aws_api_gateway_method_response.recognition_response_200.status_code
  response_templates = {
    "application/json" = ""
  }

  depends_on = [aws_api_gateway_integration.recognition]
}

resource "aws_api_gateway_deployment" "recognition" {
  depends_on = [aws_api_gateway_integration.recognition]
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  stage_name  = "recognitionr"
  lifecycle {
    create_before_destroy = true
  }
}


# define register_place

resource "aws_api_gateway_resource" "register_place" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  parent_id   = aws_api_gateway_rest_api.jphacks.root_resource_id
  path_part   = "register_place"
}

resource "aws_api_gateway_method" "register_place" {
  rest_api_id   = aws_api_gateway_rest_api.jphacks.id
  resource_id   = aws_api_gateway_resource.register_place.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "register_place_response_200" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.register_place.id
  http_method = aws_api_gateway_method.register_place.http_method
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {}
  status_code = "200"
}

resource "aws_api_gateway_integration" "register_place" {
  rest_api_id             = aws_api_gateway_rest_api.jphacks.id
  resource_id             = aws_api_gateway_resource.register_place.id
  http_method             = aws_api_gateway_method.register_place.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  content_handling        = "CONVERT_TO_TEXT"
  uri                     = aws_lambda_function.register_place.invoke_arn
}

resource "aws_api_gateway_integration_response" "register_place" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.register_place.id
  http_method = aws_api_gateway_method.register_place.http_method
  status_code = aws_api_gateway_method_response.register_place_response_200.status_code
  response_templates = {
    "application/json" = ""
  }

  depends_on = [aws_api_gateway_integration.register_place]
}

resource "aws_api_gateway_deployment" "register_place" {
  depends_on = [aws_api_gateway_integration.register_place]
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  stage_name  = "register_place"
  lifecycle {
    create_before_destroy = true
  }
}


# define register_user

resource "aws_api_gateway_resource" "register_user" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  parent_id   = aws_api_gateway_rest_api.jphacks.root_resource_id
  path_part   = "register_user"
}

resource "aws_api_gateway_method" "register_user" {
  rest_api_id   = aws_api_gateway_rest_api.jphacks.id
  resource_id   = aws_api_gateway_resource.register_user.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "register_user_response_200" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.register_user.id
  http_method = aws_api_gateway_method.register_user.http_method
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {}
  status_code = "200"
}

resource "aws_api_gateway_integration" "register_user" {
  rest_api_id             = aws_api_gateway_rest_api.jphacks.id
  resource_id             = aws_api_gateway_resource.register_user.id
  http_method             = aws_api_gateway_method.register_user.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  content_handling        = "CONVERT_TO_TEXT"
  uri                     = aws_lambda_function.register_user.invoke_arn
}

resource "aws_api_gateway_integration_response" "register_user" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.register_user.id
  http_method = aws_api_gateway_method.register_user.http_method
  status_code = aws_api_gateway_method_response.register_user_response_200.status_code
  response_templates = {
    "application/json" = ""
  }

  depends_on = [aws_api_gateway_integration.register_user]
}

resource "aws_api_gateway_deployment" "register_user" {
  depends_on = [aws_api_gateway_integration.register_user]
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  stage_name  = "register_user"
  lifecycle {
    create_before_destroy = true
  }
}

# define signin_place


resource "aws_api_gateway_resource" "signin_place" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  parent_id   = aws_api_gateway_rest_api.jphacks.root_resource_id
  path_part   = "signin_place"
}

resource "aws_api_gateway_method" "signin_place" {
  rest_api_id   = aws_api_gateway_rest_api.jphacks.id
  resource_id   = aws_api_gateway_resource.signin_place.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "signin_place_response_200" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.signin_place.id
  http_method = aws_api_gateway_method.signin_place.http_method
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {}
  status_code = "200"
}

resource "aws_api_gateway_integration" "signin_place" {
  rest_api_id             = aws_api_gateway_rest_api.jphacks.id
  resource_id             = aws_api_gateway_resource.signin_place.id
  http_method             = aws_api_gateway_method.signin_place.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  content_handling        = "CONVERT_TO_TEXT"
  uri                     = aws_lambda_function.signin_place.invoke_arn
}

resource "aws_api_gateway_integration_response" "signin_place" {
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  resource_id = aws_api_gateway_resource.signin_place.id
  http_method = aws_api_gateway_method.signin_place.http_method
  status_code = aws_api_gateway_method_response.signin_place_response_200.status_code
  response_templates = {
    "application/json" = ""
  }

  depends_on = [aws_api_gateway_integration.signin_place]
}

resource "aws_api_gateway_deployment" "signin_place" {
  depends_on = [aws_api_gateway_integration.signin_place]
  rest_api_id = aws_api_gateway_rest_api.jphacks.id
  stage_name  = "signin_place"
  lifecycle {
    create_before_destroy = true
  }
}
