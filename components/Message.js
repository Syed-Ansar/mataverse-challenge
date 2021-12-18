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
        className={`flex space-x-1 p-2 rounded-md ${
          isUserMessage
            ? 'rounded-br-none bg-pink-400'
            : 'rounded-bl-none bg-blue-500'
        }`}
      >
        <p>{message.get('message')}</p>

        {/* Timestamp */}
      </div>
      <TimeAgo
        className={`text-[10px] italic text-gray-50 ${
          isUserMessage && 'order-first pr-0.5'
        }`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-pink-400 right-2' : 'text-pink-500'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  );
}

export default Message;
