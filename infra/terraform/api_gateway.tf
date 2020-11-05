#todo cors refactaring

resource "aws_api_gateway_rest_api" "jphacks" {
  name        = "JPHacks"
  description = "Created by AWS Lambda"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

module "api_gateway_register_place" {
  source                     = "./api_gateway"
  api_name                   = "register_place"
  rest_api_id                = aws_api_gateway_rest_api.jphacks.id
  rest_api_route_resource_id = aws_api_gateway_rest_api.jphacks.root_resource_id
  lambda_function_name       = aws_lambda_function.register_place.function_name
  lambda_function_invoke_arn = aws_lambda_function.register_place.invoke_arn
}

module "api_gateway_signin_place" {
  source                     = "./api_gateway"
  api_name                   = "signin_place"
  rest_api_id                = aws_api_gateway_rest_api.jphacks.id
  rest_api_route_resource_id = aws_api_gateway_rest_api.jphacks.root_resource_id
  lambda_function_name       = aws_lambda_function.signin_place.function_name
  lambda_function_invoke_arn = aws_lambda_function.signin_place.invoke_arn
}

module "api_gateway_register_user" {
  source                     = "./api_gateway"
  api_name                   = "register_user"
  rest_api_id                = aws_api_gateway_rest_api.jphacks.id
  rest_api_route_resource_id = aws_api_gateway_rest_api.jphacks.root_resource_id
  lambda_function_name       = aws_lambda_function.register_user.function_name
  lambda_function_invoke_arn = aws_lambda_function.register_user.invoke_arn
}

module "api_gateway_recognition" {
  source                     = "./api_gateway"
  api_name                   = "recognition"
  rest_api_id                = aws_api_gateway_rest_api.jphacks.id
  rest_api_route_resource_id = aws_api_gateway_rest_api.jphacks.root_resource_id
  lambda_function_name       = aws_lambda_function.recognition.function_name
  lambda_function_invoke_arn = aws_lambda_function.recognition.invoke_arn
}

module "api_gateway_get_number" {
  source                     = "./api_gateway"
  api_name                   = "get_number"
  rest_api_id                = aws_api_gateway_rest_api.jphacks.id
  rest_api_route_resource_id = aws_api_gateway_rest_api.jphacks.root_resource_id
  lambda_function_name       = aws_lambda_function.get_number.function_name
  lambda_function_invoke_arn = aws_lambda_function.get_number.invoke_arn
}

module "api_gateway_list_get" {
  source                     = "./api_gateway"
  api_name                   = "list_get"
  rest_api_id                = aws_api_gateway_rest_api.jphacks.id
  rest_api_route_resource_id = aws_api_gateway_rest_api.jphacks.root_resource_id
  lambda_function_name       = aws_lambda_function.list_get.function_name
  lambda_function_invoke_arn = aws_lambda_function.list_get.invoke_arn
}
