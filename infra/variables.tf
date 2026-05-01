variable "project_name" {
  description = "Name used to prefix AWS resources. It must be globally unique enough for the S3 bucket suffix."
  type        = string
  default     = "lucas-tavares-portfolio"
}

variable "aws_region" {
  description = "AWS region for the S3 bucket. CloudFront remains global."
  type        = string
  default     = "us-east-1"
}

variable "price_class" {
  description = "CloudFront price class."
  type        = string
  default     = "PriceClass_100"
}

variable "acm_certificate_arn" {
  description = "ACM certificate ARN in us-east-1 for the CloudFront distribution."
  type        = string
  default     = "arn:aws:acm:us-east-1:868112351099:certificate/eff08859-e4a3-4af0-9ad1-18c2fa87abf8"
}

variable "hosted_zone_name" {
  description = "Route 53 hosted zone name for the domain."
  type        = string
  default     = "lucas-tavares.com"
}

variable "www_domain_name" {
  description = "Canonical domain name to serve through CloudFront."
  type        = string
  default     = "www.lucas-tavares.com"
}

variable "force_destroy_bucket" {
  description = "When true, Terraform can destroy the bucket even if it contains files."
  type        = bool
  default     = false
}
