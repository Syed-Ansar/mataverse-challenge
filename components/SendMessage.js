import { useMoralis } from 'react-moralis';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

function SendMessage({ endOfMessages }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState();

  const handleMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then((message) => {
        // object Saved Successfully
      }),
      (error) => {
        // Failed to save message
        console.log(error.message);
      };
    endOfMessages.current.scrollIntoView({ behaviour: 'smooth' });

    setMessage('');
  };

  return (
    <form className='flex items-center justify-between fixed bottom-4 sm:bottom-4 md:bottom-10 w-60 sm:w-[60%] lg:w-11/12 px-2 sm:px-6 py-0.5 sm:py-1 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border border-gray-50 rounded-lg max-w-2xl mb-4'>
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className='bg-transparent outline-none rounded-md sm:pr-5 text-white font-small sm:font-semibold flex-grow placeholder:text-gray-100 placeholder:text-[10px] sm:placeholder:text-sm'
        type='text'
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <ArrowCircleRightIcon
        onClick={handleMessage}
        className='h-5 w-5 sm:h-9 sm:w-9 text-white cursor-pointer'
      />
    </form>
  );
}

export default SendMessage;
