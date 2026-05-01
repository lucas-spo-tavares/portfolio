# Lucas Tavares Portfolio

React + Vite portfolio generated from `resume.tex`, styled with Tailwind and shadcn-style components, deployed manually to AWS S3 behind CloudFront.

The PDF resume lives at `public/Resume.pdf` and is available in the app at `/Resume.pdf`.
The live site is `https://www.lucas-tavares.com`.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui-style local components
- Terraform
- AWS S3 private bucket + CloudFront Origin Access Control
- English by default, with a Portuguese toggle in the header

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Create a local `.env` from `.env.example`, then run:

```bash
npm run deploy
```

The deploy script automatically loads `.env` if it exists, so you can keep your AWS profile and Terraform variables isolated per project.

The deploy script will:

1. Build the Vite app.
2. Run `terraform init`.
3. Run `terraform apply -auto-approve`.
4. Sync `dist/` to S3.
5. Create a CloudFront invalidation.

Terraform variables can be overridden with `TF_VAR_*`, for example:

```bash
TF_VAR_project_name=my-portfolio npm run deploy
```

For this project, the default `.env.example` already points at your ACM certificate and `www` domain.

If you want to override them inline instead, you can still do that:

```bash
TF_VAR_acm_certificate_arn=arn:aws:acm:us-east-1:868112351099:certificate/eff08859-e4a3-4af0-9ad1-18c2fa87abf8 \
TF_VAR_hosted_zone_name=lucas-tavares.com \
TF_VAR_www_domain_name=www.lucas-tavares.com \
npm run deploy
```

By default, the bucket name is `lucas-tavares-portfolio-<aws-account-id>`, and the site URL becomes `https://www.lucas-tavares.com`.
