import React from 'react'

//dynamic routes [id/slug]
const Meeting = ({ params }: { params: { id: string } }) => {
  return (
    <div>Meeting Room #{params.id}</div>
  )
}

export default Meeting