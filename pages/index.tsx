import {Button} from '@chakra-ui/react';
import {NextPage} from 'next';
import {signIn, useSession} from 'next-auth/react';
import useSWR from 'swr';

const Top: NextPage = () => {
  const {status} = useSession();
  const {data: guilds} = useSWR(
    status === 'authenticated' ? '/api/guilds' : null,
    fetch
  );
  // eslint-disable-next-line no-console
  console.log(guilds);

  const handleSignIn = () => {
    signIn('discord', {redirect: true});
  };

  if (status === 'loading') {
    return <p>loading...</p>;
  }

  return <Button onClick={handleSignIn}>Discordでログイン</Button>;
};

export default Top;
