const BoxColor = ({r, g, b}) => {
  let color = `rgb(${r}, ${g}, ${b})`;
  var a = color.split("(")[1].split(")")[0];
  a = a.split(",");

  var hex = a.map(function(x){             
    x = parseInt(x).toString(16);      
    return (x.length==1) ? "0"+x : x;  
  })

  return (
    <div className="box" style={{backgroundColor : color}}>
        <h3>{color}</h3>
        <h3>#{hex}</h3>
    </div>
  )
}

export default BoxColor