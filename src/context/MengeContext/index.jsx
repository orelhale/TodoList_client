import { useState } from "react"
import Context from "../Context"

export default function MengeContext({ children }) {

   let [userData, setUserData] = useState("");
   let [listTask, setListTask] = useState([]);
   let [editTask, setEditTask] = useState(null);

   let value = {
      userData,
      setUserData,
      listTask,
      setListTask,
      editTask,
      setEditTask,
   }

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}