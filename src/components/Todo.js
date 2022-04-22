import React, { useState } from "react";
import {addTodo, deleteTodd, removeTodo} from '../actions/index';
import { useDispatch, useSelector } from "react-redux";
import './Todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                <figure>
                    <figcaption>Add Your List</figcaption>
                </figure>
            <div className='addItems'>
                <input type="text" placeholder="Add Items..."
                    value={inputData}
                    onChange={(event) =>setInputData(event.target.value)}
                />
                <i className='fa fa-plus add-btn' onClick={()=>dispatch(addTodo(inputData),
                    setInputData(''))}></i>
          </div>
                    <div className="showItems">
                        {
                            list.map((elem,id) =>{
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <span>{elem.data}</span>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btnn" title="Delete Item" onClick={()=> dispatch(deleteTodd(elem.id))}/>
                                        </div> 
                                    </div>
                                )   
                            })
                        }
                    </div>
                    <div>
                        <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}>
                            <span>Check List</span>
                        </button>
                    </div>
                    
        </div>
      </div>
      </>
    )
}

export default Todo; 