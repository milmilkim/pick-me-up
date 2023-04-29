import NextAuth, { AuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

import getEnv from '@/utils/getEnv';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: getEnv('DISCORD_CLIENT_ID'),
      clientSecret: getEnv('DISCORD_CLIENT_SECRET'),
    }),
  ],
  adapter: PrismaAdapter(prisma),
};
export default NextAuth(authOptions);
