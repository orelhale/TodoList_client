import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function getBallPriorityMUI(num, style = {}) {
   let highTask = <FiberManualRecordIcon sx={{ backgroundColor: "#a94442", color: "#a94442", width: "10px", height: "10px", borderRadius: "50%", ...style }}></FiberManualRecordIcon>
   let middleTask = <FiberManualRecordIcon sx={{ backgroundColor: "#8a6d3b", color: "#8a6d3b", width: "10px", height: "10px", borderRadius: "50%", ...style }}></FiberManualRecordIcon>
   let lowTask = <FiberManualRecordIcon sx={{ backgroundColor: "#3c763d", color: "#3c763d", width: "10px", height: "10px", borderRadius: "50%", ...style }}></FiberManualRecordIcon>
   return (num == 1 ? lowTask : num == 2 ? middleTask : num == 3 ? highTask : "")
}


let getPriorityListPoint = [
   { value: 1, element: getBallPriorityMUI(1) },
   { value: 2, element: getBallPriorityMUI(2) },
   { value: 3, element: getBallPriorityMUI(3) },
]

export {
   getPriorityListPoint,
   getBallPriorityMUI,
}