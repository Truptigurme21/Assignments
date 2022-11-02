//Question create a component to print the details of following object



import React from 'react'



const  Car = ()=> {



   const car = {
        model: 'i20',
        company: 'Hyundai',
        price: 20,
        configuration: {
         color: 'gray',
         fuel: 'petrol',
         cylinder: 4,
         fuelTankCapacity: 37,
         mileage: {
         city: 14,
         highway: 20,
         },
         },
        features: ['touch screen', 'bluetooth', 'alloy wheels', 'power steering']
        }

return (
    <div>
    <div><b>Model:</b>{ car.model}</div>
    <div><b>Company:</b>{car.company}</div>
    <div><b>Price:</b>{car.price}</div>
   <div><h4>Configuration:</h4>color:-{car.configuration.color}</div>
   <div>fuel:-{car.configuration.fuel}</div>
   <div>cylinder:-{car.configuration.cylinder}</div>
   <div>fuelTankCapacity:-{car.configuration.fuelTankCapacity}</div>
   <div><h4>Milage:</h4>city-{car.configuration.mileage.city}</div>
   <div>highway-{car.configuration.mileage.highway}</div>
   <div><h4>Features:</h4>
    <ul>
        {/* Accessing array elements using index */}
        {/* <li>{car.features[0]}</li>
        <li>{car.features[1]}</li>
        <li>{car.features[2]}</li>
        <li>{car.features[3]}</li> */}
    

 {car.features.map((carFeatures)=>{
       return(
            <li>
                {carFeatures}
            </li>
        ) 
    })}
    </ul>
          
</div>
</div>   
   ) 
}
   export default Car
