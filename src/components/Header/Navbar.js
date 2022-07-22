import React from 'react'
import './Navbar.css'
import Calorie_Counter from '../Images/Calorie_Counter.png'

const Navbar = () => {
  return (
    <>
    <div className="container">
        <div className="content">
            <div className="title"> Calorie Counter</div>
            <div className="foodicon">
                <input className="image" type="image"  src={Calorie_Counter} alt="Calorie Image" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar