output "bucket_name" {
  description = "S3 bucket used by the portfolio."
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution id used for invalidations."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Public CloudFront domain for the portfolio."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  description = "Public URL for the portfolio."
  value       = "https://${var.www_domain_name}"
}
