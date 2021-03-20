import React, { useState } from 'react'
import UserTable from './Usertable'
import UserForm from './UserForm'

const Home = () => {
  const [showUserForm, setUserForm] = useState(false)
  const [showUserTable, setUserTable] = useState(false)

  const showUsers = () => {
    setUserForm(true)
    setUserTable(false)
  }
  const showUsersTable = () => {
    setUserTable(true)
    setUserForm(false)
  }

  return (
    <div>
      <div className='buttonGroup m-5'>
        <button
          onClick={() => showUsers()}
          type='button'
          className='btn btn-primary mr-2'
        >
          All Users
        </button>
        <button
          onClick={() => showUsersTable()}
          type='button'
          className='btn btn-secondary'
        >
          Add User
        </button>
      </div>

      {showUserForm && <UserTable />}
      {showUserTable && <UserForm />}
    </div>
  )
}

export default Home
