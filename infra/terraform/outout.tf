output "get_number_api_url" {
  value = "https://${aws_api_gateway_rest_api.jphacks.id}.execute-api.${data.aws_region.current.name}.amazonaws.com/${aws_api_gateway_resource.get_number.path_part}/${aws_api_gateway_deployment.get_number.stage_name}"
}
output "recognition_api_url" {
  value = "https://${aws_api_gateway_rest_api.jphacks.id}.execute-api.${data.aws_region.current.name}.amazonaws.com/${aws_api_gateway_resource.recognition.path_part}/${aws_api_gateway_deployment.recognition.stage_name}"
}
output "register_place_api_url" {
  value = "https://${aws_api_gateway_rest_api.jphacks.id}.execute-api.${data.aws_region.current.name}.amazonaws.com/${aws_api_gateway_resource.register_place.path_part}/${aws_api_gateway_deployment.register_place.stage_name}"
}
output "register_user_api_url" {
  value = "https://${aws_api_gateway_rest_api.jphacks.id}.execute-api.${data.aws_region.current.name}.amazonaws.com/${aws_api_gateway_resource.register_user.path_part}/${aws_api_gateway_deployment.register_user.stage_name}"
}
output "signin_place_api_url" {
  value = "https://${aws_api_gateway_rest_api.jphacks.id}.execute-api.${data.aws_region.current.name}.amazonaws.com/${aws_api_gateway_resource.signin_place.path_part}/${aws_api_gateway_deployment.signin_place.stage_name}"
}
output "list_get_api_url" {
  value = "https://${aws_api_gateway_rest_api.jphacks.id}.execute-api.${data.aws_region.current.name}.amazonaws.com/${aws_api_gateway_resource.list_get.path_part}/${aws_api_gateway_deployment.list_get.stage_name}"
}
output "db_endpoint" {
  value = aws_rds_cluster.db_cluster.endpoint
}