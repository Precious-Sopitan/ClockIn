import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => {
    return state
  });

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p className="text-7xl">{state.count}</p>
      <div className="flex items-center justify-center gap-5">
        <button
          className="outline outline-1 outline-[#c4c4c4] bg-gray-500"
          onClick={() =>
            dispatch({
              type: "INCREMENT",
            })
          }
        >
          increment
        </button>
        <button
          className="outline outline-1 outline-[#c4c4c4] bg-gray-500"
          onClick={() =>
            dispatch({
              type: "DECREMENT",
            })
          }
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default Counter