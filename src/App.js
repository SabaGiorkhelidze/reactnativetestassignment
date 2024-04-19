import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { useState, createContext } from "react";
import List from "./routes/List";

import { Home } from "./routes/Home";
import data1 from "./data/Array_1.json";
import data2 from "./data/Array_2.json";

export const AppContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "list",
    element: <List />,
  },
]);

// const ButtonClickhandler = () => {
//   const mergedArray = data1.concat(data2);
//   const ids = mergedArray.map(({ id }) => id);
//   const result = mergedArray.filter(({ id }, index) => !ids.includes(id, index + 1));
//   return result
// };
const buttonClickHandler = () => {
  const mergedArray = data1.concat(data2);
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i+1; j < mergedArray.length; j++) {
      if (mergedArray[i].id == mergedArray[j].id) {
        mergedArray.splice(j, 1);
      }
    }
  }
  return mergedArray;
};
// console.log(buttonClickHandler())
const deleteObject = (arr, objectToDelete) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === objectToDelete) {
      arr.splice(i, 1);
      i--; // Decrement i to account for the removed element
    }
  }
  console.log('item')
  return arr;
}
function App() {
  const [state, setState] = useState(null);
  return (
    <AppContext.Provider value={{ state, setState, buttonClickHandler, deleteObject }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
