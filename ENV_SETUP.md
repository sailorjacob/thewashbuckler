# Environment Variables Setup

This document lists all required environment variables for The Washbuckler app.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Stripe Configuration
# Get these from https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=your_webhook_secret_here

# Email Configuration (Resend)
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Email addresses
EMAIL_FROM="The Washbuckler <orders@thewashbuckler.com>"
ADMIN_EMAIL=your-email@example.com
```

## Setup Instructions

### 1. Stripe Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your Secret Key (starts with sk_live_ for production or sk_test_ for testing)
3. Add it as `STRIPE_SECRET_KEY`

### 2. Stripe Webhook Secret
1. Go to [Stripe Webhooks](https://dashboard.stripe.com/webhooks)
2. Create a new webhook endpoint pointing to: `https://yourdomain.com/api/webhooks/stripe`
3. Select these events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. Copy the webhook signing secret (starts with whsec_)
5. Add it as `STRIPE_WEBHOOK_SECRET`

### 3. Resend API Key
1. Sign up at [Resend](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Add it as `RESEND_API_KEY`

### 4. Email Configuration
1. Set `EMAIL_FROM` to your verified domain email in Resend
2. Set `ADMIN_EMAIL` to the email where you want to receive order notifications

## Local Development

For local development with webhooks:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

The Stripe CLI will provide a webhook secret that starts with whsec_ - use this for `STRIPE_WEBHOOK_SECRET` in local development.

## Production Deployment

Make sure to add all environment variables to your hosting platform (Vercel, Netlify, etc.)

