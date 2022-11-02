// Create a login component to get email address and password from user. The component should
// contian a login button. The login button should print the user credentials on console.

import React, {useState} from 'react'

const UserLogin = () => {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

  const getUser = ()=>{
    console.log(`email is ${email}`)
    console.log(`password is ${password}`)  
   }
        const readEmail = (e)=>{
        setEmail(e.target.value)
        }
        
        const readPassword = (e)=>{
        setPassword(e.target.value)
        }

  return (
    <div>
            <div>
                <label htmlFor="" >Email Id</label>
                 <input onChange={readEmail} type="text" placeholder='abc@gmail.com' />
            </div>
                 <br/>
            <div>
                <label htmlFor="">Password</label>
                 <input onChange={readPassword} type="password" placeholder='****************'/>
            </div>
            <br />

            <div>
            <button type="button" class="btn btn-success">Login</button>
            </div>
        
    </div> 
  )
}

export default UserLogin