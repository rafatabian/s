import sunrise from "./assets/s_img_1.jpg"
import { useEffect, useState } from 'react'
import "./App.css"
import sad from "./assets/s_sad.jpg"
import average from "./assets/s_average.jpg"
import { FaRegHeart, FaHeart } from "react-icons/fa6"
import happy from "./assets/s_happy.jpg"

const App = () => {
  const [sleep, setSleep] = useState(0)
  const [love, setLove] = useState(false)
  const [mobile, setMobile] = useState(false)

  // check vw and trow message
  useEffect(() => {
   if(window.innerWidth > 550){
    setMobile(true)
   }
  }, [])


  return (
    <>
    {mobile 
  ? <div className="mobile_conainter">
     <span>🙃</span>
     <span>open on mobile amore</span>
    </div>
  :
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
      <div className="sad_container">
      <img src={sad} className="sunrise"/>
      <p className="text1">Oh no! Looks like the bed won this round. Don’t worry, I’ll make sure you get the best spot next time</p>
      <span onClick={() => setLove(!love)} className={`heart ${love ? "heart_pop_out" : null}`}>{love ? <FaHeart /> : <FaRegHeart />}</span>
      </div>
      }

      {sleep === 2 && 
      <div className="sad_container">
      <img src={average} className="sunrise"/>
      <p className="text1">Not too bad, but I think we can definitely make tonight a bit cozier. Come amore</p>
      <span onClick={() => setLove(!love)} className={`heart ${love ? "heart_pop_out" : null}`}>{love ? <FaHeart /> : <FaRegHeart />}</span>
      </div>}

      {sleep === 3 && 
      <div className="sad_container">
      <img src={happy} className="sunrise"/>
      <p className="text2">Well, someone's a sleep expert! I bet even the bed is jealous</p>
      <span onClick={() => setLove(!love)} className={`heart ${love ? "heart_pop_out" : null}`}>{love ? <FaHeart /> : <FaRegHeart />}</span>
      </div>}


    </div>
}</>
  )
}

export default App