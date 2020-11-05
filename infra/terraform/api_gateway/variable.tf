data "aws_caller_identity" "current" {}

data "aws_region" "current" {}

variable "rest_api_id" {}

variable "api_name" {}

variable "rest_api_route_resource_id" {}

variable "lambda_function_name" {}

variable "lambda_function_invoke_arn" {}