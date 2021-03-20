import React from 'react'
import data from '../data/userData'

const UserTable = () => {
  return (
    <div className='container'>
      {data.map((x, i) => (
        <table
          className='table table-bordered table-striped text-center'
          key={i + 1}
        >
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>{i + 1}</th>
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>{x.address}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default UserTable
