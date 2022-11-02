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
        features: ['touch screen', 'bluetooth', 'alloy wheels', 'power steering'],
        }




        //Question modify the above component to pass these values as props



       const CarFeature = (props) => {
            const { car } = props
            return (
              <div>
                <div>fearture: {car}</div>
              </div>
            )
          }






    return (
    <div>
        <h2>Car Info</h2>
        <ul>
        <li>car model = {car.model}</li>
        <li>car company = {car.company}</li>
        <li>car price = {car.price}</li>
    </ul>



   <ul>
    <h3>configuration</h3>



       <li>car color = {car.configuration.color}</li>
        <li>car fuel = {car.configuration.fuel}</li>
        <li>car cylinder = {car.configuration.cylinder}</li>
        <li>car fuelTankCapacity = {car.configuration.fuelTankCapacity}</li>
    </ul>



   <ul>
        <h3>Millage</h3>



       <li>car city = {car.configuration.mileage.city}</li>
        <li>car highway = {car.configuration.mileage.highway}</li>



   </ul>



   {/* <ul>
        <h3>features</h3>



   <li>{car.features[0]}</li>
    <li>{car.features[1]}</li>
    <li>{car.features[2]}</li>
    <li>{car.features[3]}</li>




    </ul> */}




    <ul>



   </ul>
    <ul>
        <h3>Features</h3>
        {car.features.map((c) => {
          return (
            <li>
              <CarFeature car={c} />
            </li>
          )
        })}
      </ul>



   </div>
  )
}



export default Car