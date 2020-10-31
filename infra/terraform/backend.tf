terraform {
  backend "s3" {
    bucket = "tfstate-bucket-infra"
    key    = "state/service"
    region = "eu-west-1"
  }
}