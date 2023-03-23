import NextAuth, {AuthOptions} from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: {
        params: {scope: 'identify guilds'},
      },
    }),
  ],
  session: {strategy: 'jwt'},
  callbacks: {
    session: ({session, token}) => {
      session.user.accessToken = token.accessToken;
      return session;
    },
    jwt: ({token, account}) => {
      if (account != null) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
