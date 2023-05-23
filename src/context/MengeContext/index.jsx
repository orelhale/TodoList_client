import { useState } from "react"
import Context from "../Context"
import { useEffect } from "react";


export default function MengeContext({ children }) {

   let [userData, setUserData] = useState("");
   let [listTask, setListTask] = useState([]);
   let [editTask, setEditTask] = useState(null);
   let [socket, setSocker] = useState(null);

   useEffect(() => {
      if (socket) {
         socket.on("getBack", (dataSocket) => { console.log("dataSocket = ", dataSocket); })
      }
   }, [socket])
   

   function editTaskSocket(obj) {
      if (editTask && obj) {
         console.log("obj = ", obj);
         // console.log("editTask = ", editTask);
         let { description, priority } = obj
         
         let copyEditTask = { ...editTask }
         description && (copyEditTask.description = description)
         priority && (copyEditTask.priority = priority)
         
         // console.log("copyEditTask = ", copyEditTask);
         socket.emit('editTask', copyEditTask)
      }
   }

   let value = {
      userData,
      setUserData,
      listTask,
      setListTask,
      editTask,
      setEditTask,
      socket,
      setSocker,
      editTaskSocket,
   }

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}