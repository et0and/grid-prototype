import Head from 'next/head'
import { Tile } from '../components/Tile'
import { Nav } from '../components/Nav'
import { useEffect } from 'react'

export default function Home() { 
  useEffect(() => {
    window.name = 'grid'
  }, []) 
  
  return (
    <div className="flex flex-col">
      <Head>
        <title>Sophia • Home</title>
      </Head>
      
      <header className={`w-full flex justify-center items-center h-24 sticky top-0 left-0 z-30`} style={{backgroundColor:'rgba(255,255,255,0.95)', backdropFilter: 'blur(50px)'}}>
        <Nav />
      </header>

      <main className='h-full w-full flex justify-center pt-24 pb-32 relative z-0'>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 md:px-8 w-full max-w-6xl">
        <h3>Welcome back Tom, 
        </h3>
          <Tile color='#CDE7EF' name='Journal' href='/apps/groups' />
          <Tile color='#8BE789' name='Library' href='/apps/messages' />
          <Tile color='#C2D6BE' name='Data' href='/apps/calls' />
          <Tile color='#F0AE70' name='Sleep' href='/apps/bitcoin-wallet' />        
          <Tile color='#2D0118' name='System' href='/apps/system' light img='system.png'/>
          <Tile color='#D8B14E' name='All Apps' href='/apps/my-apps' />
          <Tile color='#2D382B' name='Meditate' href='/apps/terminal' light/>
          <Tile color='#EE5432' name='Nutrition' href='/apps/pomodoro' light />
          <Tile color='#FEFFBA' name='Fitness' href='/apps/inbox'/>
        </div>
      </main>
    </div>
  )
}
