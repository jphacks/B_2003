resource "aws_s3_bucket" "recognition" {
  bucket = "recognition"
  acl    = "private"
}