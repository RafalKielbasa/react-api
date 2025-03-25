import React from 'react'

const UserTile = ({ user, onClick }) => {
  return (
    <div
      className='bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6'
      onClick={() => onClick(user.id)}
    >
      <h3 className='text-nowrap text-gray-700 font-semibold'>
        User name: {user.name}
      </h3>
      <h3 className='text-nowrap text-gray-700'>
        User lastname: {user.username}
      </h3>
      <h3 className='text-nowrap text-gray-700'>User email: {user.email}</h3>
    </div>
  )
}

export default UserTile
