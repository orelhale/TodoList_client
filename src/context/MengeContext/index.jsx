import { useContext, useState } from "react"
import Context from "../Context"

export default function MengeContext({ children }) {
   let [userData, setUserData] = useState("");
   let [listTask, setSistTask] = useState([]);

   let value = {
      userData,
      setUserData,
      listTask,
      setSistTask,
   }

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}