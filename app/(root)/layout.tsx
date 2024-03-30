import StreamVideoProvide from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

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