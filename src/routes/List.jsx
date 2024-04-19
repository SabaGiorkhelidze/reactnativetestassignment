import React, { useContext } from "react";
import { AppContext } from "../App";
export default function List() {
  const { buttonClickHandler, deleteObject } = useContext(AppContext);
  const arr = buttonClickHandler()
  return (
    <div>
      {arr.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.body}</p>
          <button onClick={() => deleteObject(arr, item)}>delete</button>
        </div>
      ))}
    </div>
  );
}
