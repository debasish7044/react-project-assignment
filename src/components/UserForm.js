import React from 'react'

const UserForm = () => {
  const userForm = () => (
    <form action=''>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input type='text' className='form-control' />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Email</label>
        <input type='email' className='form-control' />
      </div>
      <div className='form-group'>
        <label className='text-muted'>Password</label>
        <input type='password' className='form-control' />
      </div>

      <button className='button btn btn-primary'>Submit</button>
    </form>
  )
  return (
    <div className='container mt-5' style={{ width: '50%' }}>
      {userForm()}
    </div>
  )
}

export default UserForm
