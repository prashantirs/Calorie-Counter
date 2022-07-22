import React from 'react'
import Card from '../UI/Card'
import EachRecord from './EachRecord'
import './ShowCalories.css'

const ShowCalories = (props) => {

    

    return (
        <Card>
            <ul>
                {props.data.map((element) => {
                    return (
                        <EachRecord
                            key={Math.random()}
                            food={element.foodname}
                            calories={element.calories}
                            id={element.id}
                            onDelete={props.onDeleteItem}
                        >
                            <div className='items'>
                                <div className="items__deteial">
                                <span>Food:</span>  {element.foodname} <span>Calories:</span> {element.calories}
                                </div>
                            </div>
                        </EachRecord>
                    )
                })}
            </ul>
        </Card>
    )
}

export default ShowCalories