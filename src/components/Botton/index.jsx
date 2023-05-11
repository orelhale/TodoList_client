import { Button } from "@mui/material";


export default function Botton({ style = {}, value, onClick }) {
   let buttonStyle = {
      backgroundColor: "#FFF",
      border: "1px solid #1890FF",
      color: "#1890FF",
      ...style
   }
   // console.log("buttonStyle = ",buttonStyle);

   return <Button onClick={onClick && onClick} sx={buttonStyle}>{value}</Button>
}