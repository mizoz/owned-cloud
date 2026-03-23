# Deployment

## Production

Production deploys from `main` through Vercel.

```bash
git add -A
git commit -m "Describe the change"
git push origin main
```

## Required Environment Variables

- `MAUTIC_URL`
- `MAUTIC_CLIENT_ID`
- `MAUTIC_CLIENT_SECRET`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CAL_LINK`

Optional:

- `NOTIFICATION_EMAIL`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_PLAUSIBLE_HOST`

## Verification

After deployment:

1. Check the Vercel deployment status is `Ready`.
2. Load `/`, `/services`, `/blog`, and `/contact`.
3. Submit a contact form test if Mautic env vars changed.
4. Confirm the Cal.com embed appears on `/contact`.

## Notes

- Do not commit `.next`.
- `.vercelignore` should remain in place.
- Local `vercel build` warnings about a present `.next` directory do not mean production is broken.
