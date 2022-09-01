import React, {useState} from 'react'

const Form = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('');
  const [job, setJob] = useState('')
  const [location, setLocation] = useState('')

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']
  const [char, setChar] = useState('')
  const [keyCount, setKeyCount] = useState(0)

  const handleClick = (e) => {
    e.preventDefault()
    props.setMups([
      ...props.mups,
      {
        name: name,
        age: parseInt(age),
        job: job,
        location: location,
      }]
    )
    setName('')
    setAge('')
    setJob('')
    setLocation('')
  }

  const handleKeyDown = (e) => {
    setChar(e.key)
  }

  const handleKeyUp = (e) => {
    console.log(char)
    if (char === konamiCode[keyCount]) {
      setKeyCount(keyCount + 1)
    }
    else {
      setKeyCount(0)
    }
    if (keyCount === 10) {
      props.setCodeCompleted(true)
    }
  }


  return (
    <div className="card mt-3">
      <h5 className="card-header">Make a Muppet</h5>
      <div className="card-body">
        <form className="mt-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age: </label>
            <input
              type="text"
              name="age"
              value={age}
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="job" className="form-label">Job: </label>
            <input
              type="text"
              name="job"
              value={job}
              className="form-control"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location: </label>
            <input
              type="text"
              name="location"
              value={location}
              className="form-control"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <input
            className="btn btn-info"
            type="submit"
            value="Add Muppet"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          />
        </form>
      </div>
    </div>
  )
}

export default Form