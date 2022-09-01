import React, {useState} from 'react'

const MuppetCard = (props) => {
  const { name, job, location } = props
  const [age, setAge] = useState(props.age);

  const birthday = () => {
    setAge(age + 1)
  }
  
  return (
    <div className='card mt-3'>
      <h5 className="card-header">{name}</h5>
      <div className="card-body row">
        <p className="col">Age: {age}</p>
        <p className="col">Job: {job}</p>
        <p className="col">Location: {location}</p>
        <button
          className="col btn btn-success mx-3"
          onClick={birthday}
        >Happy Birthday</button>
      </div>
    </div>
  )
}

export default MuppetCard