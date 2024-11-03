import Rating from "./Rating";

const DriverCard = ({name, rating, img, car}) => {
  return (
    <div className='driver-card'>
      <img src={img} alt="" className="driver-picture"/>

      <div className="driver-details">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <h3>{`${car.model} - ${car.licensePlate}`}</h3>        
      </div>
    </div>
  )
}

export default DriverCard