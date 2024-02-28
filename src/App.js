import {useRef,useState} from 'react';
import List from './List';
let i=localStorage.length

function App() {
  let deleteHandler=()=>{
    setS(!s)
  }
  let [s,setS]=useState(false)
  let inputItem=useRef()
  let clickHandler=(e)=>{
    if (inputItem.current.value===''){
      alert("Please provide value.")
      e.preventDefault()
      return
    }
    localStorage.setItem(i,inputItem.current.value)
    setS(!s)
    e.preventDefault()
    i=i+1;
  }
  return (
    <div className='section-center'>
      <form className='grocery-form' onSubmit={clickHandler}>
        <h3>Grocery Bud</h3>
        <div className='form-control'>
        <input type='text' className='grocery' ref={inputItem}></input>
        <button className='submit-btn'>Add Item</button>
        </div>
      </form>
      <div className='grocery-container'>
      <List deleteHandler={deleteHandler}/>
      </div>
    </div>
  );
}

export default App;
