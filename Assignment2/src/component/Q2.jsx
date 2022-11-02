// Create a registration component to get the user details. The component should contian a register
// button. The button should print the user credentials on console.

import React ,{useState} from 'react'

const RegisterPage = () => {



    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const[mobile,setMobile] = useState(0)
    const[password,setPassword] = useState('') 


    const showOnConsolData = ()=>{
        console.log(`username is = ${userName}`)
        console.log(`email is = ${email}`)
        console.log(`mobile is ${mobile}`)
        console.log(`password is ${password}`)
    }

    const readUserName = (e)=>{
        setUserName(e.target.value)
    }

    const readEmail = (e)=>{
        setEmail(e.target.value)
    }

    const readMobile = (e)=>{
        setMobile(e.target.value)
    }

    const readPassword = (e)=>{
        setPassword(e.target.value)
    }


  return (
    <div>
            <div>
                <label htmlFor="" >UserName</label>
                 <input onChange={readUserName}  type="text" placeholder='abc' />
            </div>
            <br />
            <div>
                <label htmlFor="" >Email</label>
                 <input onChange={readEmail}  type="email" placeholder='abc@gmail.com' />
            </div>
            <br />

            <div>
                <label htmlFor="" >Mobile</label>
                 <input onChange={readMobile} type="number" placeholder='+91 0000000000' />
            </div>

            <br />

            <div>
                <label htmlFor="" >Password</label>
                 <input onChange={readPassword}  type="password" placeholder='********' />
            </div>

            <br />
            <div>
            <button type="button" class="btn btn-primary">Register</button>
            </div>
        
    </div>
  )
}

export default RegisterPage