import { CookiesOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import prisma from "./prisma";
import bcrypt from "bcrypt";
import { setCookie } from 'nookies';
import { cookies } from "next/headers";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret:process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
            password: { label: "Password", type: "password", placeholder: "********" }
          },
          async authorize(credentials) {
            if(!credentials?.email || !credentials?.password) {
                throw new Error("Invalid credentials1");
            }
            const existingUser = await prisma.user.findUnique({
                where: {email: credentials?.email}    
            })
      
            if (!existingUser) {
              throw new Error("Invalid credentials2")
            } 
            const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password);
            if(!passwordMatch) {
                throw new Error("Invalid credentials3")
            }
            // setCookie(null, "user", JSON.stringify(existingUser), {
            //   maxAge: 3 * 24 * 60 * 60,
            //   path: "/",
            //   httpOnly: true,
            // });
            return existingUser
          }
        })
    ],
    session: {
        strategy:"jwt"  
    },
    callbacks:{
        // jwt : async({token,user,account,profile,isNewUser}) => {
        //   console.log(token,user)
        //   if(user) {
        //     return {
        //       ...token,
        //       firstName: user.name 
        //     }
        //   }
        //   setCookie(null, 'Authentication', token, {
        //     maxAge: token
        //     path: '/', // Cookie path
        //   });
        //   return token
        // },
        session: async ({ session }) => {
            const sessionUser = await prisma.user.findUnique({
                where: {
                  email: session.user.email,
                },
            });
            session.user.id = sessionUser?.id
          return session;
        },
      },
    pages: {
        signIn: '/'
    },
    debug:process.env.NODE_ENV === 'development',
} 