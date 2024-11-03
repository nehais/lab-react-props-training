
const Random = ({min, max}) => {
  let randomNo = Math.floor((Math.random() * (max)) + 1);

  return (
    <div className="random">{`Random value between ${min} and ${max} => ${randomNo}`}</div>
  )
}

export default Random