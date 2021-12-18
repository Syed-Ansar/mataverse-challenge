import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Avatar({ username }) {
  const { user } = useMoralis();

  return (
    <div>
      <Image
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || user.get('username')
        }.svg`}
        width={90}
        height={90}
        className='bg-black border-2 rounded-full '
      />
    </div>
  );
}

export default Avatar;
