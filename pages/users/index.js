import React from 'react'
import Layout from '../../Components/Layout'
import axios from 'axios'
const Index = ({users}) => {
  return (
    <Layout>

      <div className='container'>
        <h1>List all users</h1>

          <table style={{border:"3px"}}>
            <thead>
              <th>Name</th>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
              <th>website</th>
            </thead>
            {
              users.map((e)=>{
                return(
                  <>
                      <tbody>
              <tr>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
              </tr>
            </tbody>
                  </>
                )
              })
            }
          </table>

      </div>
    </Layout>
  )
}

export default Index;





 export async function getStaticProps(){
    try {
      // const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
      const {data}= await axios.get("https://jsonplaceholder.typicode.com/users")
      // const Chngdata=await data.json();
      // console.log(data);
      return{
        props:{
          users:data
        }
      }
    } catch (error) {
      
    }
}
