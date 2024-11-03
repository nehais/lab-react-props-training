import React from 'react'

const Greetings = ({lang, children}) => {
    let greeting;
    switch (lang){
        case 'de': greeting = `Hallo ${children}`;
                    break;
        case 'en': 
        case 'es': greeting = `Hello ${children}`;
                    break;
        case 'fr': greeting = `Bonjour ${children}`;
                    break;
    }

  return (
    <div className='greeting'>{greeting}</div>
  )
}

export default Greetings