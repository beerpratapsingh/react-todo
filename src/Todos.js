import React, {} from 'react';

const Todos = ({todos, deleteTodo}) => {
  const totosList = todos.length ? (
    todos.map((ele) => {
      return(
        <div className="collection-item" key={ele.id}>
          <span onClick={() => {deleteTodo(ele.id)}}> {ele.content} </span>
        </div>
      )
    })
  ) : (
      <p className="center">There's no more todo's</p>
  ) 
  return(      
    <div className="todos collection">
      {totosList}
    </div>
  )
}


export default Todos;