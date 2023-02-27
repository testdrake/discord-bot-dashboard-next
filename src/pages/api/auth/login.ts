import { NextApiRequest, NextApiResponse } from 'next';
import { CLIENT_ID } from 'utils/auth/server';
import { APP_URL } from 'utils/get-absolute-url';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  const url =
    'https://discord.com/api/oauth2/authorize?' +
    new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: `${APP_URL}/api/auth/callback`,
      response_type: 'code',
      scope: 'identify guilds',
    });

  res.redirect(302, url);
}