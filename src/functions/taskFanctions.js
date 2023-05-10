import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

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
      'color': "#a94442",
      padding:"0px",
      '&.Mui-checked': {
         color: "#a94442",
         // backgroundColor: "#f2dede",
         // border: "1px solid #ebccd1",
         border: null,
         padding:"0px",
      }
   }
   let middleTask = {
      'color': "#8a6d3b",
      padding:"0px",
      '&.Mui-checked': {
         color: "#8a6d3b",
         // backgroundColor: "#fcf8e3",
         // border: "1px solid #faebcc",
         border: null,
         padding:"0px",
      }
   }
   let lowTask = {
      'color': "#3c763d",
      padding:"0px",
      '&.Mui-checked': {
         color: "#3c763d",
         // backgroundColor: "#deefd7",
         // border: "1px solid #d6e9c6",
         border: null,
         padding:"0px",
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
   return (num == 1 ? lowTask : num == 2 ? middleTask : num == 3 ? highTask : {})
}

function getBallPriority(num) {
   let highTask = <span style={{ backgroundColor: "#a94442", width: "10px", height: "10px", borderRadius: "50%" }}></span>
   let middleTask = <span style={{ backgroundColor: "#8a6d3b", width: "10px", height: "10px", borderRadius: "50%" }}></span>
   let lowTask = <span style={{ backgroundColor: "#3c763d", width: "10px", height: "10px", borderRadius: "50%" }}></span>
   return (num == 1 ? lowTask : num == 2 ? middleTask : num == 3 ? highTask : "")
}

function getBallPriorityMUI(num, style = {}) {
   let highTask = <FiberManualRecordIcon sx={{ backgroundColor: "#a94442",color: "#a94442", width: "10px", height: "10px", borderRadius: "50%",...style }}></FiberManualRecordIcon>
   let middleTask = <FiberManualRecordIcon sx={{ backgroundColor: "#8a6d3b",color: "#8a6d3b", width: "10px", height: "10px", borderRadius: "50%",...style }}></FiberManualRecordIcon>
   let lowTask = <FiberManualRecordIcon sx={{ backgroundColor: "#3c763d",color: "#3c763d", width: "10px", height: "10px", borderRadius: "50%",...style }}></FiberManualRecordIcon>
   return (num == 1 ? lowTask : num == 2 ? middleTask : num == 3 ? highTask : "")
}


let getPriorityListName = [
   { value: 1, element: "L" },
   { value: 2, element: "N" },
   { value: 3, element: "H" },
]

let getPriorityListPoint = [
   { value: 1, element: getBallPriority(1) },
   { value: 2, element: getBallPriority(2) },
   { value: 3, element: getBallPriority(3) },
]

export {
   getNamePriority,
   getColorPriority,
   getColorPriorityMUI,
   getPriorityListName,
   getPriorityListPoint,
   getBallPriority,
   getBallPriorityMUI,
}