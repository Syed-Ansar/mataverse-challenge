import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

function Chatbox() {
  const MINS_DURATION = 60;

  const { user } = useMoralis();
  const { data, loading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  const endOfMessages = useRef(null);

  return (
    <div className=' bg-blue-900 text-white mt-2 w-[80%] flex flex-col bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md mx-auto h-[425px] sm:h-[500px] '>
      <div className='pb-56'>
        <div className='my-5'>
          <ByMoralis
            variant='dark'
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>

        <div className='space-y-10 p-3'>
          {data.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>

        <div className='flex justify-center'>
          <SendMessage endOfMessages={endOfMessages} />
        </div>
        <div ref={endOfMessages} className='text-center mt-5'>
          <p>You're up-to-date {user.getUsername()}! </p>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
