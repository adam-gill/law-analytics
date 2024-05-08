import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

const googleClientId = process.env.GOOGLE_CLIENT_ID!;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }

    //   await prisma.user.upsert({
    //     where: {
    //       email: profile.email,
    //     },
    //     create: {
    //         email: profile.email,
    //         name: profile.name!,
    //       },
    //     update: {
    //       name: profile.name,
    //     },
    //   });
      return true;
    },
  },
};

export default authOptions;
