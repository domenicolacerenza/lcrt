import { FC } from 'react';

export const HomeView: FC = ({ }) => {
  return (
    <div className='flex h-auto flex-col place-content-center p-8'>
      <div className="carousel rounded-box gap-4">
        <div className="carousel-item">
          <img className='w-96' src="/img/XDXDX.jpg" alt="XDXDX" />
        </div>
        <div className="carousel-item">
          <img className='w-96' src="/img/ab6761670000ecd44113acecee3e7fbae911e540.jpeg" />
        </div>
        <div className="carousel-item">
          <img className='w-96' src="/img/howl.png" alt="ROBOT" />
        </div>
      </div>
      
      <div className="card w-200 bg-green-500/25 shadow-xl mt-12">
        <div className="flex justify-center px-4 py-4">ˈ
          la-sə-rāt _ Visual/Sound Artist <br />
          Human since MCMXCVIII<br />
        </div>
      </div>
    </div>
  );
};
