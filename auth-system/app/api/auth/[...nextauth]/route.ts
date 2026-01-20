import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: 'Ov23lipsoapTYtu5Dqe8',
      clientSecret: '9e37c84881acc01c193bbd6c91857f9673221cef',
    }),

    // Email provider Data base ke bina nhi chalta hai

    // EmailProvider({
    //   server: {
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     auth: {
    //       user: 'fint1197@gmail.com',
    //       pass: 'Thorfin@123',
    //     },
    //   },
    //   from: 'fint1197@gmail.com',
    // }),
  ],
});

export { handler as GET, handler as POST };
