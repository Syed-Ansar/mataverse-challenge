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
    <div className='bg-black relative text-white flex items-center'>
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
                : 'hidden sm:inline-block bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 p-4 py-3 rounded absolute top-[-100px] sm:top-[-70px] z-50'
            }
            role='alert'
          >
            <strong className='font-bold'>Holy Smokes! :</strong>
            <span className='block sm:inline px-6 '>{authError.message}</span>
            <span
              onClick={handleError}
              className='absolute top-0 bottom-0 right-0 px-4 py-3'
            >
              <svg
                className='fill-current h-6 w-6 '
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
        <div className='rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 flex items-center flex-col justify-around text-center h-[500px] w-[300px]'>
          <Image
            className='object-cover rounded-full'
            src='https://www.stockvault.net//data/2019/04/19/264052/thumb16.jpg'
            height={200}
            width={200}
          />
          <div className='px-5 py-2 rounded-xl font-bold flex flex-row-reverse z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-50'>
            Welcome To Metaverse!!
          </div>
          {/* Login button */}
          <button
            onClick={authenticate}
            className={` px-5 py-3 rounded-xl font-bold flex flex-row-reverse z-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-50`}
          >
            {!isAuthenticating
              ? 'Login to the Metaverse'
              : 'Authenticating....'}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='w-full h-screen'>
        <Image
          src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2019/04/beat-saber-oculud-quest-expert.jpg'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

export default Login;
