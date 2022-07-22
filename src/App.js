import { useEffect, useState } from 'react';
import './App.css';
import ShowCalories from './components/Display/ShowCalories';
import Navbar from './components/Header/Navbar';
import InputForm from './components/InputForm/InputForm';

//get local starage
const getLocalData = () => {
  let data= localStorage.getItem('foodData');
  if(data){
    return JSON.parse(localStorage.getItem('foodData'));
  }else{
    return [];
  }
}

// const datas =[
//   {foodname:"Chicken", calories:250, id :Math.random()},
//   {foodname:"Paneer", calories:360, id :Math.random()},
// ]

function App() {  

  const [data, setData] = useState(getLocalData())
  const [count, setCount] = useState(0);

  useEffect(() => {
    let ctn = 0;
    for(const n of data){
      ctn += n.calories;
    }

    setCount(ctn);
    localStorage.setItem('foodData', JSON.stringify(data));
  }, [data])
  
  const addFoodHandler = (foodData)=>{
    setData((prevFood)=>{
      return  [foodData , ...prevFood];
    });
  }


  const deleteItemHandler = (id) =>{
    setData(prevFood => {
      const updatedFood = prevFood.filter(element => element.id !== id);
      return updatedFood;
    });
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No data found. Want to add one?</p>
  );

  if(data.length > 0){
    content = (
      <ShowCalories data={data} onDeleteItem={deleteItemHandler}/>
    );
  }


  return (
    <> 
      <Navbar/>
      <InputForm onAddFood={addFoodHandler} Total={count}/>
      {content}
    </>
  );
}

export default App;
