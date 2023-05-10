
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

function getColorPriorityMUI(num) {
   let highTask = {
      '&.Mui-checked': {
         backgroundColor: "#f2dede",
         color: "#a94442",
         border: "1px solid #ebccd1",
      }
   }
   let middleTask = {
      '&.Mui-checked': {
         backgroundColor: "#fcf8e3",
         color: "#8a6d3b",
         border: "1px solid #faebcc",
      }
   }
   let lowTask = {
      '&.Mui-checked': {
         backgroundColor: "#deefd7",
         color: "#3c763d",
         border: "1px solid #d6e9c6",
      }
   }
   return (num == 1 ? lowTask : num == 2 ? middleTask : num == 3 ? highTask : "")
}

function getColorPriority(num) {
   let highTask = {
      backgroundColor: "#f2dede",
      color: "#a94442",
      border: "1px solid #ebccd1",
   }
   let middleTask = {
      backgroundColor: "#fcf8e3",
      color: "#8a6d3b",
      border: "1px solid #faebcc",
   }
   let lowTask = {
      backgroundColor: "#deefd7",
      color: "#3c763d",
      border: "1px solid #d6e9c6",
   }
   return (num == 1 ? lowTask : num == 2 ? middleTask : num == 3 ? highTask : "")
}


export {
   getNamePriority,
   getColorPriority,
   getColorPriorityMUI,
}