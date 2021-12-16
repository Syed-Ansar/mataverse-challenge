import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className='h-screen'>
      <Head>
        <title>Metaverse Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='cursor-pointer flex flex-col justify-center items-center h-screen bg-blue-900 text-white font-bold space-y-5 text-xl'>
        <h1>Metaverse Challenge #papaFam</h1>
        <div
          onClick={logout}
          className='bg-blue-500 w-fit px-4 py-2 rounded-xl '
        >
          Logout
        </div>
      </div>
    </div>
  );
}
