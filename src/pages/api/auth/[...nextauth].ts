import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

import getEnv from '@/utils/getEnv';

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: getEnv('DISCORD_CLIENT_ID'),
      clientSecret: getEnv('DISCORD_CLIENT_SECRET'),
    }),
    /**
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};
export default NextAuth(authOptions);
