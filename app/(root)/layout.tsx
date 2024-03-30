import StreamVideoProvide from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "Zoom",
  description: "Video calling app",
  icons:{
    icon:'/icons/logo.svg'
  }
};
// define children param and type 
const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvide>
        {children}
      </StreamVideoProvide>
    </main>
  )
}

export default RootLayout