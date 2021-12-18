import Image from 'next/image';

function Background() {
  return (
    <div>
      <div className='w-full h-screen fixed'>
        <Image
          className='blur-sm'
          src={
            'https://i.insider.com/618d6f930e5c2f0019065c2b?width=2000&format=jpeg&auto=webp'
          }
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}

export default Background;
