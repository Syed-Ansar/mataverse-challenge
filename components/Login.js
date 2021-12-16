import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate, isAuthenticating, authError } = useMoralis();

  const [error, setError] = useState(true);

  const handleError = () => {
    setError(false);
  };

  return (
    <div className='bg-black relative text-white'>
      <Head>
        <title>Metaverse Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col absolute z-50 h-4/6 items-center w-full justify-center space-y-4'>
        {/* Error Message */}
        {authError && (
          <div
            className={
              !error
                ? 'hidden'
                : 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-10'
            }
            role='alert'
          >
            <strong className='font-bold'>Holy smokes!</strong>
            <span className='block sm:inline p-6'>{authError.message}</span>
            <span
              onClick={handleError}
              className='absolute top-0 bottom-0 right-0 px-4 py-3'
            >
              <svg
                className='fill-current h-6 w-6 text-red-500'
                role='button'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <title>Close</title>
                <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
              </svg>
            </span>
          </div>
        )}
        {/* Login Image */}
        <Image
          className='object-cover rounded-full'
          src='https://links.papareact.com/3pi'
          height={200}
          width={200}
        />

        {/* Login button */}
        <button
          onClick={authenticate}
          className={
            isAuthenticating
              ? 'bg-green-500 text-slate-900 p-5 rounded-xl font-bold animate-pulse z-50'
              : 'bg-yellow-500 text-slate-900 p-5 rounded-xl font-bold animate-pulse z-50'
          }
        >
          {!isAuthenticating ? 'Login to the Metaverse' : 'Authenticating....'}
        </button>
      </div>
      <div className='w-full h-screen'>
        <Image
          src='https://links.papareact.com/55n'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

export default Login;
