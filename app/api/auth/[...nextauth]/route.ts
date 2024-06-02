import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';

export const options = {
  providers: [
    GoogleProvider({
        clientId: '1066814378429-qjkftpgv86b7kl3v938gre2g7vabjfrj.apps.googleusercontent.com',
        clientSecret: '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',
    }),
  ],
  callbacks: {
    async signIn(data:any) {
        console.log(data)
    //   if (account.provider === "google") {
    //     return profile.email_verified && profile.email.endsWith("@example.com")
    //   }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
};

export const handler = NextAuth(options);

export { handler as GET, handler as POST };