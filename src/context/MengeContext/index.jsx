import { useContext, useState } from "react"
import Context from "../Context"

export default function MengeContext({ children }) {
   let [userData, setUserData] = useState("");


   return (
      <Context.Provider value={{ userData, setUserData }}>
         {children}
      </Context.Provider>
   )
}