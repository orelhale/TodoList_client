import { useContext, useState } from "react"
import Context from "../Context"

export default function MengeContext({ children }) {
   let [userData, setUserData] = useState("");
   let [listTask, setListTask] = useState([]);
   let [editTask, setEditTask] = useState(null);

   function chenchIndexInListTask(index, data) {
      let state = [...listTask];

      if (state[index]) {
         console.log("index = ", index);
         state[index] = data
         setListTask(state)
      }
   }

   let value = {
      userData,
      setUserData,
      listTask,
      setListTask,
      chenchIndexInListTask,
      editTask,
      setEditTask,
   }

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}