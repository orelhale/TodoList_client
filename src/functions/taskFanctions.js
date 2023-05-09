
function getNamePriority(num) {
   return (
      num == 1 ? 
      "Low" :
      num == 2 ? 
      "Medium" :
      num == 3 ? 
      "High" :
      ""
   )
}


export {
   getNamePriority,
}