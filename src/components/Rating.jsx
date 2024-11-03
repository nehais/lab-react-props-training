import React from 'react'

const Rating = ({children}) => {
  let rate = Math.round(children);
  let starClasses = [];

  for(let i=1; i <= 5; i++){
    let classes = 'star';
    if (i<=rate){
      classes += ' filled';
    }
    starClasses.push(classes);
  }

  return (
    <div id="star-rating">
        {
          starClasses.map((classes, index) =>{
            return (
              <span key={index} className={classes}>&#9733;</span>
            )}
          )
        }
    </div>
  )
}

export default Rating