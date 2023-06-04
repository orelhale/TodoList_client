import { useState } from "react"
import Context from "../Context"

export default function ContextManagement({ children }) {

   let [userData, setUserData] = useState("");

   let value = {
      userData,
      setUserData,
   }

   return (
      <Context.Provider value={value}>
         {children}
      </Context.Provider>
   )
}