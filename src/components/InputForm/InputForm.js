import React, { useState } from 'react'
import './InputForm.css'
import Card from '../UI/Card'

const InputForm = (props) => {
    
    const [food, setFood] = useState('');
    const [calories, setCalories] = useState('');
    const [isvalid, setIsvalid] = useState(false);

    const foodHandler = (event) =>{
        setIsvalid(false);
        setFood(event.target.value);
    }

    const calorieHandler = (event) =>{
        setIsvalid(false);
        setCalories(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        
        const data ={
            foodname : food,
            calories : parseInt(calories),
            id : Math.random()
        }

        if(food.trim().length === 0 || calories.trim().length === 0 ){
            setIsvalid(true);
            alert("Add Food Name and Calories Both!");
            return ;
        }

        props.onAddFood(data);
        setFood('');
        setCalories('');
    }


    return (

        <Card>
            <div className="whole-form">
                <form onSubmit={formSubmitHandler}>
                    <div className='new-calorie__controls'>
                        <div className='new-calorie__control'>
                            <label htmlFor="Food Name">Food Name</label>
                            <input type='text' onChange={foodHandler} value={food}/>
                        </div>
                        <div className='new-calorie__control'>
                            <label htmlFor="Calories">Calories</label>
                            <input type='number' onChange={calorieHandler} value={calories}/>
                        </div>
                    </div>
                    <div className='new-calorie__actions'>
                        <div className="total-calorie">
                            <div className="display-calorie">{props.Total}</div>
                            <div className="calories-taken-text">Total Calories</div>
                        </div>
                        <button type="submit" className='btn' disabled={isvalid}>Add Calories</button>
                    </div>
                </form>
            </div>
        </Card>

    )
}

export default InputForm