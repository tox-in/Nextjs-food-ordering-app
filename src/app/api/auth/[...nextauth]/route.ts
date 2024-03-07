import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

  const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const res = await fetch("/your/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json"}
        })
        const user = await res.json()

        if(res.ok && user) {
          return user
        }
        return null
      }
    })
  ],
})

export { handler as Get, handler as Post}