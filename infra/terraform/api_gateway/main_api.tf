resource "aws_api_gateway_resource" "this" {
  rest_api_id = var.rest_api_id
  parent_id   = var.rest_api_route_resource_id
  path_part   = var.api_name
}
resource "aws_api_gateway_method" "this" {
  rest_api_id   = var.rest_api_id
  resource_id   = aws_api_gateway_resource.this.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "this_response_200" {
  rest_api_id = var.rest_api_id
  resource_id = aws_api_gateway_resource.this.id
  http_method = aws_api_gateway_method.this.http_method
  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
  }
  status_code = "200"
}

resource "aws_api_gateway_integration" "this" {
  rest_api_id             = var.rest_api_id
  resource_id             = aws_api_gateway_resource.this.id
  http_method             = aws_api_gateway_method.this.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  content_handling        = "CONVERT_TO_TEXT"
  uri                     = var.lambda_function_invoke_arn
}

resource "aws_api_gateway_integration_response" "this_response_200" {
  rest_api_id       = var.rest_api_id
  resource_id       = aws_api_gateway_resource.this.id
  http_method       = aws_api_gateway_method.this.http_method
  status_code       = aws_api_gateway_method_response.this_response_200.status_code
  selection_pattern = "200"
  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
  response_templates = {
    "application/json" = ""
  }
  depends_on = [aws_api_gateway_integration.this]
}

resource "aws_api_gateway_deployment" "this" {
  depends_on  = [aws_api_gateway_integration.this]
  rest_api_id = var.rest_api_id
  stage_name  = var.api_name
  lifecycle {
    create_before_destroy = true
  }
}

