import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from './Avatar';

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-6 w-6 ml-2 ${isUserMessage && 'order-last'}`}>
        <Avatar username={message.get('username')} />
      </div>

      <div
        className={`flex space-x-1 px-2 py-1 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-lg text-[10px] md:text-sm lg:text-md ${
          isUserMessage ? 'rounded-br-none ' : 'rounded-bl-none'
        }`}
      >
        <p>{message.get('message')}</p>

        {/* Timestamp */}
      </div>
      <TimeAgo
        className={`hidden sm:inline-block  sm:text-[10px] italic text-gray-50 ${
          isUserMessage && 'order-first pr-0.5'
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-[10px] text-gray-200  ${
          isUserMessage ? ' right-2' : ' left-2'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  );
}

export default Message;
