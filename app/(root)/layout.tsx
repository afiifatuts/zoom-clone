import React, { ReactNode } from 'react'

// define children param and type 
const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout