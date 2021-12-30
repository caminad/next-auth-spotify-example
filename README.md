# NextAuth Spotify example

This is a simple example of authentication in [Next.js](https://nextjs.org/), using [NextAuth.js](https://next-auth.js.org/) with [Spotify](https://developer.spotify.com/documentation/general/guides/authorization/).

## Getting Started

Go to the [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/applications), creating an account if necessary, and create an app.

Create a `.env.local` file at the app root and add the **Client ID** and **Client Secret** as `SPOTIFY_ID` and `SPOTIFY_SECRET`.

Click on **Edit Settings** and add `http://localhost:3000/api/auth/callback/spotify` as a **Redirect URI** to allow local testing, then click save. You will need to add redirect URIs for each deployed application.

Generate a secred with `openssl rand -base64 32` (for example) and add it to `.env.local` as `SECRET`.

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
