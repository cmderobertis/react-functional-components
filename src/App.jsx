import React, {useState} from 'react'
import MuppetCard from './components/MuppetCard'
import Form from './components/Form'
import "./cyborg_bootstrap.css"

function App() {

  const [mups, setMups] = useState([])
  const [codeCompleted, setCodeCompleted] = useState(false)


  return (
    <div className="container">
      <div className="row">
        {codeCompleted
          ?
        <div className="text-center">
          <h1> Konami Code? What a nerd 😋</h1>
          <img src="./assets/sanic-sonic.gif" alt="" />
        </div>
          :
        <div className="row">
          <div className="col-4 pe-0">
            <Form mups={mups} setMups={setMups} setCodeCompleted={setCodeCompleted}/>
          </div>
          <div className="col ps-3">
            {
              mups.map((mup, index) => {
                return (
                  <MuppetCard
                    key={index}
                    name={mup.name}
                    age={mup.age}
                    job={mup.job}
                    location={mup.location}
                  />
                )
              })
            }
          </div>
        </div>
      }
      </div>
    </div>
  )
}

export default App
