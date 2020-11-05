# options
resource "aws_api_gateway_method" "options" {
  depends_on    = [aws_api_gateway_resource.this]
  rest_api_id   = var.rest_api_id
  resource_id   = aws_api_gateway_resource.this.id
  http_method   = "OPTIONS"
  authorization = "NONE"
}

resource "aws_api_gateway_method_response" "options_200" {
  depends_on  = [aws_api_gateway_method.options]
  rest_api_id = var.rest_api_id
  resource_id = aws_api_gateway_resource.this.id
  http_method = aws_api_gateway_method.options.http_method
  status_code = "200"

  response_models = {
    "application/json" = "Empty"
  }
  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = true
  }
}


resource "aws_api_gateway_integration" "options" {
  depends_on              = [aws_api_gateway_method.options]
  rest_api_id             = var.rest_api_id
  resource_id             = aws_api_gateway_resource.this.id
  http_method             = aws_api_gateway_method.options.http_method
  integration_http_method = "OPTIONS"
  type                    = "MOCK"
}

resource "aws_api_gateway_integration_response" "options_200" {
  depends_on        = [aws_api_gateway_method_response.options_200]
  rest_api_id       = var.rest_api_id
  resource_id       = aws_api_gateway_resource.this.id
  http_method       = aws_api_gateway_method.options.http_method
  status_code       = aws_api_gateway_method_response.options_200.status_code
  selection_pattern = "200"
  response_templates = {
    "application/json" = ""
  }
  response_parameters = {
    "method.response.header.Access-Control-Allow-Origin" = "'*'"
  }
}
    