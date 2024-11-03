import visaLogo from '../assets/images/visa.png';
import masterLogo from '../assets/images/master-card.svg';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  return (
    <div className="credit-card" style={{backgroundColor : bgColor, color : color}} >
      {(type === 'Visa') ? 
       (<img src={visaLogo} alt="Visa Logo" className='card-type'/>) :
       (<img src={masterLogo} alt="Master card Logo"  className='card-type'/>)
      }
      <h1>{`.... .... .... ${number.slice(-4)}`}</h1>
      <div className='line-3'>
        <p className="exp-dtls">{`Expires ${expirationMonth}/${expirationYear}`}</p>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>      
    </div>
  )
}

export default CreditCard