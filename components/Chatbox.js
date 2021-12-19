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
    <div>
      <div className=' scrollbar-hide bg-blue-900 text-white mt-2 w-[95%] sm:w-[80%] flex flex-col bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md mx-auto h-[425px] sm:h-[500px] overflow-y-scroll overflow-hidden '>
        <div className='pb-[125px]'>
          <div className='my-5'>
            <ByMoralis
              width={'180px'}
              variant='dark'
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <div className='space-y-10 p-3'>
              {data.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </div>
          </div>
          <div
            ref={endOfMessages}
            className='text-center text-[15px] md:text-md'
          >
            <p>You're up-to-date {user.getUsername()}! </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <SendMessage endOfMessages={endOfMessages} />
      </div>
    </div>
  );
}

export default Chatbox;
