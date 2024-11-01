import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
  const [userName, changeUserName] = useState(
    [ ]
  )
  const fetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response)=>{
        changeUserName(response.data)
      }
    ).catch()
  }
  useEffect(
    ()=>{fetchData()},[]
  )
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {userName.map(
                  (value, index) => {
                    return <tr>
                      <th scope="row">{value.id}</th>
                      <td>{value.name}</td>
                      <td>{value.username}</td>
                      <td>{value.email}</td>
                    </tr>
                  }
                )}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewall
