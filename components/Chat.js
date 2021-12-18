import Background from './Background';
import Chatbox from './Chatbox';
import Header from './Header';

function Chat(props) {
  const { logout } = props;

  return (
    <div className='relative h-screen w-full'>
      <div className='absolute z-20 w-full'>
        <div className='absolute right-5  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-xl cursor-pointer mt-5'>
          <div onClick={logout} className='text-white px-6 py-1'>
            Logout
          </div>
        </div>
        <Header />
      </div>
      <Background />
    </div>
  );
}

export default Chat;
