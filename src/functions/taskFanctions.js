import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function getBallPriorityMUI(num, style = {}) {
   let highTask = <FiberManualRecordIcon sx={{ backgroundColor: "#fa0905", color: "#fa0905", width: "10px", height: "10px", borderRadius: "50%", ...style }}></FiberManualRecordIcon>
   let middleTask = <FiberManualRecordIcon sx={{ backgroundColor: "#fcb131", color: "#fcb131", width: "10px", height: "10px", borderRadius: "50%", ...style }}></FiberManualRecordIcon>
   let lowTask = <FiberManualRecordIcon sx={{ backgroundColor: "#35a839", color: "#35a839", width: "10px", height: "10px", borderRadius: "50%", ...style }}></FiberManualRecordIcon>
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