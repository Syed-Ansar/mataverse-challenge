import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';
import Chat from '../components/Chat';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen overflow-hidden'>
      <Head>
        <title>Metaverse Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className=''>
        <Chat logout={logout} />
      </div>
    </div>
  );
}
