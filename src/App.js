import sunrise from "./assets/s_img_1.jpg"
import { useState } from 'react'
import "./App.css"
import sad from "./assets/s_sad.jpg"
import average from "./assets/s_average.jpg"
import { FaRegHeart, FaHeart } from "react-icons/fa6"
import happy from "./assets/s_happy.jpg"

const App = () => {
  const [sleep, setSleep] = useState(0)
  const [love, setLove] = useState(false)

  return (
    <div className='app_container'>
      {sleep === 0 &&
        <>
      <img src={sunrise}  className="sunrise"/>
      <div className="text">
        <p>GOOD MORNING AMORE!</p>
        <p>How did you sleep?</p>
        <span>
              <button onClick={() => setSleep(1)}>😔</button>
              <button onClick={() => setSleep(2)}>😊</button>
              <button onClick={() => setSleep(3)}>😍</button>
        </span>
      </div>
      </>
      }

      { sleep === 1 &&
      <>
      <img src={sad} className="sunrise"/>
      <p className="text1">Oh no! Looks like the bed won this round. Don’t worry, I’ll make sure you get the best spot next time</p>
      <span onClick={() => setLove(!love)} className="heart">{love ? <FaHeart /> : <FaRegHeart />}</span>
      </>
      }

      {sleep === 2 && 
      <>
      <img src={average} className="sunrise"/>
      <p className="text1">Not too bad, but I think we can definitely make tonight a bit cozier. Come amore</p>
      <span onClick={() => setLove(!love)} className="heart">{love ? <FaHeart /> : <FaRegHeart />}</span>
      </>}

      {sleep === 3 && 
      <>
      <img src={happy} className="sunrise"/>
      <p className="text2">Well, someone's a sleep expert! I bet even the bed is jealous</p>
      <span onClick={() => setLove(!love)} className="heart">{love ? <FaHeart /> : <FaRegHeart />}</span>
      </>}


    </div>
  )
}

export default App