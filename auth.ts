import Github from 'next-auth/providers/github';
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google,Github({clientId:process.env.GITHUB_ID,clientSecret:process.env.GITHUB_SECRET})],
})