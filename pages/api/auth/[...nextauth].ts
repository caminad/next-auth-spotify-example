import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID!,
      clientSecret: process.env.SPOTIFY_SECRET!,
    }),
  ],
  secret: process.env.SECRET,
})
