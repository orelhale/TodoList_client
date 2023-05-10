import { useContext, useEffect, useState, useRef } from "react"
import styles from "./style.module.css"
import apiFunctions from "../../functions/apiFunctions"
import Context from "../../context/Context"
import Plus1 from "../icons/Plus1"

export default function AddTask() {
	let { setListTask, editTask, setEditTask } = useContext(Context)

	let [descriptionData, setDescriptionData] = useState("")
	let [priorityData, setPriorityData] = useState(1)
	let [borderStyle, setBorderStyle] = useState(null)

	useEffect(() => {
		if (editTask) {
			setDescriptionData(editTask.description)
			setPriorityData(editTask.priority)
		}
	}, [editTask])

	let handleSelect = (e) => {
		setPriorityData(e.target.value)
	}

	let handleInput = (e) => {
		if (borderStyle){
			setBorderStyle(null)
		}
		setDescriptionData(e.target.value)
	}

	let handleAddTask = () => {
		if (!descriptionData) {
			setBorderStyle({ "border-color": "red" })
			return;
		}

		let dataToServer = {
			description: descriptionData,
			priority: priorityData
		}

		if (editTask) {
			// Edit task
			dataToServer = { ...editTask, ...dataToServer }
			apiFunctions("tasks", "PUT", dataToServer, (data) => {

				// Get new list
				setListTask(data)

				// Data reset
				setPriorityData(1)
				setDescriptionData("")
			})
		} else {
			// Create new task
			apiFunctions("tasks", "POST", dataToServer, (data) => {

				// Get new list
				setListTask(data)

				// Data reset
				setEditTask(null)
				setPriorityData(1)
				setDescriptionData("")
			})
		}
	}

	let buttonAddTask = <>{<Plus1 style={{marginRight: "7px"}} />} Add</>;
	let buttonEditTask = <>{<Plus1 style={{marginRight: "7px"}} />} Edit</>;

	// useEffect(()=>{
	// 	console.log("priorityData = ",priorityData);
	// },[priorityData])


	return (
		<div className={styles.AddTask}>
			<div className={styles.containerInputAddTask} style={borderStyle}>
				<input
					className={styles.inputAddTask}
					placeholder="New task"
					value={descriptionData}
					onChange={handleInput}
					type="text"
					required
				/>
				<select onChange={handleSelect} value={priorityData}>
					<option value={1}>L</option>
					<option value={2}>M</option>
					<option value={3}>H</option>
				</select>
			</div>

			<div className={styles.buttonSubmit} onClick={handleAddTask}>
				{editTask ? buttonEditTask : buttonAddTask}
			</div>
		</div>
	)
}

