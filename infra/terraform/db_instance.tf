resource "aws_db_subnet_group" "db_subnet_group" {
  name = "jphacks"
  subnet_ids = [
    aws_subnet.subnet_a.id,
    aws_subnet.subnet_b.id
  ]
  description = "Created for RDS cluster and Lambda"
}

resource "aws_rds_cluster_parameter_group" "paramgroup_for_utf8" {
  description = "DB Cluster Parameter Group for UTF-8 Encoding"
  family      = "aurora5.6"
  name        = var.db_param_group

  parameter {
    apply_method = "pending-reboot"
    name         = "character_set_client"
    value        = "utf8"
  }
  parameter {
    apply_method = "pending-reboot"
    name         = "character_set_connection"
    value        = "utf8"
  }
  parameter {
    apply_method = "pending-reboot"
    name         = "character_set_database"
    value        = "utf8"
  }
  parameter {
    apply_method = "pending-reboot"
    name         = "character_set_results"
    value        = "utf8"
  }
  parameter {
    apply_method = "pending-reboot"
    name         = "character_set_server"
    value        = "utf8"
  }
  parameter {
    apply_method = "pending-reboot"
    name         = "skip-character-set-client-handshake"
    value        = "1"
  }
}

resource "aws_rds_cluster" "db_cluster" {
  cluster_identifier              = local.db_cluster_identifier
  master_username                 = data.aws_ssm_parameter.db_username.value
  master_password                 = data.aws_ssm_parameter.db_password.value
  storage_encrypted               = true
  copy_tags_to_snapshot           = true
  skip_final_snapshot             = true
  db_subnet_group_name            = aws_db_subnet_group.db_subnet_group.name
  db_cluster_parameter_group_name = aws_rds_cluster_parameter_group.paramgroup_for_utf8.name
  vpc_security_group_ids          = [aws_default_security_group.sg.id]
}

resource "aws_rds_cluster_instance" "db_instance" {
  identifier          = local.db_instance_identifier
  cluster_identifier  = aws_rds_cluster.db_cluster.id
  instance_class      = local.db_instance_size
  publicly_accessible = true
  monitoring_interval = 0
  promotion_tier      = 1

  depends_on = [aws_internet_gateway.igw] // required to set publicly_accessible true
}

