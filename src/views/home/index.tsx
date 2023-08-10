// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
  <div className='flex h-auto flex-col items-center justify-between p-24'>
    <div className="carousel rounded-box">
      <div className="carousel-item">
        <img className='w-80' src="/img/XDXDX.jpg" alt="XDXDX" />
      </div> 
      <div className="carousel-item">
        <img className='w-80' src="/img/ab6761670000ecd44113acecee3e7fbae911e540.jpeg" />
      </div> 
      <div className="carousel-item">
        <img className='w-80' src="/img/howl.png" alt="ROBOT" />
      </div> 
    </div>
    <br/>
  </div>
  );
};
