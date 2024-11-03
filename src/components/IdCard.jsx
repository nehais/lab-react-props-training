
const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
  

  return (
    <div className="card">
        <img src={picture} alt="Person Picture" />
        <div className="info-area">
            <div>
                <label htmlFor="firstName">First name: </label>
                <span id="firstName">{firstName}</span>
            </div>
            <div>
                <label htmlFor="lastName">Last name: </label>
                <span id="lastName">{lastName}</span>
            </div>
            <div>
                <label htmlFor="gender">Gender: </label>
                <span id="gender">{gender}</span>
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <span id="height">{height}</span>
            </div>
            <div>
                <label htmlFor="birth">Birth: </label>
                <span id="birth">{birth.toDateString()}</span>
            </div>
        </div>        
    </div>
  )
}

export default IdCard