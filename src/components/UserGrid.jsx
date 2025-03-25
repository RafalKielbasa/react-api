import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import UserTile from './UserTile'

const apiUrl = `https://jsonplaceholder.typicode.com/users`

const UserGrid = () => {
  const [data, setData] = useState([])
  const [userId, setUserUd] = useState(null)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const handleSideBar = (id) => {
    setUserUd(id)
    setIsSideBarOpen(true)
  }

  console.log('userId: ', userId)
  console.log('iSSideBarOpen: ', isSideBarOpen)
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(apiUrl)
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [])
  console.log('data: ', data)
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] p-5 gap-4'>
      {data.map((user) => (
        <UserTile user={user} onClick={handleSideBar} />
      ))}
    </div>
  )
}

export default UserGrid
