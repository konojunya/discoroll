import {NextApiRequest, NextApiResponse} from 'next';
import {getServerSession} from 'next-auth/next';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const session = await getServerSession(req, res, authOptions);

  if (session == null) {
    res.status(401).end();
    return;
  }

  const data = await fetch('https://discord.com/api/users/@me/guilds', {
    headers: {
      authorization: `Bearer ${session.user.accessToken}`,
    },
  }).then(res => res.json());

  res.status(200).json({guilds: data});
}
