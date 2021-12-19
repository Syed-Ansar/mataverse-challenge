import Avatar from './Avatar';
import Chatbox from './Chatbox';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';

function Header() {
  const { user, isUserUpdating, setUserData } = useMoralis();
  const [username, setUsername] = useState();
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    setEdit(!edit);
  };

  const handleUserName = (e) => {
    e.preventDefault();
    setUserData({
      username,
    });

    setUsername('');

    setEdit(!edit);
  };

  const name = username;
  console.log(name);

  return (
    <div className=''>
      <div className='bg-blue-900 text-white mt-16 mx-auto w-[95%] sm:w-[80%] flex flex-col bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md'>
        <div className='flex flex-row justify-between mx-5 my-10'>
          <div>
            <div className='rounded-full h-20 w-20 border-2 border-gray-50'>
              <Avatar />
            </div>
            <h1 className='font-bold text-xl mt-3'>{user.getUsername()}</h1>
          </div>
          <div className='hidden sm:inline-block sm:font-bold sm:text-xl md:text-2xl'>
            Welcome to the Metaverse Chat Dapp.
          </div>
          <button
            onClick={handleEdit}
            disabled={isUserUpdating}
            className={`bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md px-4 h-8 ${
              edit ? 'hidden' : ''
            }`}
          >
            Edit
          </button>
          <div
            className={`bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md p-3 ${
              !edit ? 'hidden' : ''
            }`}
          >
            <form onSubmit={handleUserName} className='flex flex-col'>
              <label className='font-bold mb-2' htmlFor='Username'>
                Username :
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md outline-none z-50 font-bold pl-2 mb-2 bg-black'
                type='text'
              />
              <button
                disabled={(e) => e.target.value <= 0}
                className='bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md'
              >
                Save
              </button>
            </form>
            <button
              onClick={handleEdit}
              className='bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-50 rounded-md mt-2 flex w-full justify-center '
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Chatbox />
    </div>
  );
}

export default Header;
