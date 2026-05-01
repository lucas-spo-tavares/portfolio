#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INFRA_DIR="$ROOT_DIR/infra"
DIST_DIR="$ROOT_DIR/dist"
ENV_FILE="$ROOT_DIR/.env"

if [ -f "$ENV_FILE" ]; then
  set -a
  # Load local deployment variables such as AWS_PROFILE and TF_VAR_*.
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

command -v aws >/dev/null 2>&1 || {
  echo "AWS CLI is required. Install it and configure credentials before deploying." >&2
  exit 1
}

if command -v terraform >/dev/null 2>&1; then
  TERRAFORM="$(command -v terraform)"
else
  echo "Terraform is required. Install it on your system before deploying." >&2
  exit 1
fi

cd "$ROOT_DIR"
npm run build

"$TERRAFORM" -chdir="$INFRA_DIR" init
"$TERRAFORM" -chdir="$INFRA_DIR" apply -auto-approve

BUCKET_NAME="$("$TERRAFORM" -chdir="$INFRA_DIR" output -raw bucket_name)"
DISTRIBUTION_ID="$("$TERRAFORM" -chdir="$INFRA_DIR" output -raw cloudfront_distribution_id)"
CLOUDFRONT_DOMAIN="$("$TERRAFORM" -chdir="$INFRA_DIR" output -raw cloudfront_domain_name)"

aws s3 sync "$DIST_DIR" "s3://$BUCKET_NAME" --delete
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" >/dev/null

echo "Deployment finished: https://$CLOUDFRONT_DOMAIN"
