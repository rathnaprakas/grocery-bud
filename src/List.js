import {useState} from 'react';

let List=(props)=>{
    let deleteHandler=()=>{props.deleteHandler()}
    return <div className="grocery-list">
        {Object.keys(localStorage).map(i=><Item name={localStorage.getItem(i)} key={i} index={i} deleteHandler={deleteHandler}/>)}
    </div>
}

export default List;

let Item=(props)=>{
    let [t,setT]=useState(false)
    let tickHandler=()=>{
        setT(!t)
    }
    let onClickHandler=()=>{
        localStorage.removeItem(props.index);
        props.deleteHandler()
    }
    return <div className="grocery-item">
        <input type="checkbox" id={props.name} onChange={tickHandler}></input>
        {t?<p className="title2">{props.name}</p>:<p className="title1">{props.name}</p>}
        <div className="btn-container">
        <button onClick={onClickHandler} className="delete-btn">Delete</button>
        </div>
    </div>
}