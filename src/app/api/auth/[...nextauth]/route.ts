import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {User} from "@/app/models/User";
import bcryptjs from "bcryptjs";
import mongoose from "mongoose";

  const handler = nextAuth({
    secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(process.env.MONGODB_URL);
        const user = await User.findOne({email});
        const passwordOk = user && bcryptjs.compareSync(password, user.password);

        if(passwordOk) {
          return user;
        }
      }
    })
  ],
})

export { handler as Get, handler as Post}

// const res = await fetch("/your/endpoint", {
//   method: "POST",
//   body: JSON.stringify(credentials),
//   headers: { "Content-Type": "application/json"}
// })
// const user = await res.json()

// if(res.ok && user) {
//   return user
// }