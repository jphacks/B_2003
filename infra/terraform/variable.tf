locals {
  source_path            = "./lambda"
  output_path            = "./upload"
  aws_region             = "eu-west-1"
  vpc_cidr_block         = "10.0.0.0/16"
  db_subnet_group        = "jphacks"
  db_cluster_identifier  = "jphacks-database-1"
  db_instance_identifier = "jphacks-instance-1"
  db_instance_size       = "db.t2.small"
  db_name                = "jphacks"
}

data "aws_ssm_parameter" "db_password" {
  name = "db_password"
}

data "aws_ssm_parameter" "db_username" {
  name = "db_username"
}



variable "db_param_group" {
  type        = string
  description = "Name of DB cluster param group for UTF-8 encoding."
  default     = "paramgroup-for-utf8"
}
