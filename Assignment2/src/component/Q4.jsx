import React from 'react'

import { useState } from 'react'



// import star from './images/star.jpg';

const star = require('./star.jpg');

const Rating = () => {



const [rate,setRating] = useState(0)



const incRating = ()=>{

    if(rate<5){

        setRating(rate+1)

    }

}



const decRating = ()=>{

    if(rate>0){

        setRating(rate-1)

    }

}

return (

    <div classname='container'>

        <div className="mt-5 mb-3">

       

        <button onClick={incRating}>+</button>

        <span style={{padding:10,margin:10, fontWeight:'bold'}}>{rate}</span>

        <button onClick={decRating}>-</button>

        <div className="container">

            {

                [ ...Array(rate)].map(()=>{

                    return(

                        <img src =  {star} alt = "star"/>

                    );

                })}

              </div>

               

           

        </div>

    </div>

  )

}



export default Rating