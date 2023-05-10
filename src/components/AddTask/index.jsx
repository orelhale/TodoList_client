import { useContext, useEffect, useState, useRef } from "react"
import styles from "./style.module.css"
import apiFunctions from "../../functions/apiFunctions"
import Context from "../../context/Context"

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
			dataToServer = { ...editTask, ...dataToServer }
			apiFunctions("tasks", "PUT", dataToServer, (data) => {
				setListTask(data)
			})
		} else {
			apiFunctions("tasks", "POST", dataToServer, (data) => {
				setListTask(data)
				setEditTask(null)
			})
		}
	}

	let buttonAddTask = ("+ Add");
	let buttonEditTask = ("Edit");

	// useEffect(()=>{
	// 	console.log("priorityData = ",priorityData);
	// },[priorityData])


	return (
		<div className={styles.AddTask}>
			<div className={styles.containerInputAddTask} style={borderStyle}>
				<select onChange={handleSelect} value={priorityData}>
					<option value={1}>L</option>
					<option value={2}>M</option>
					<option value={3}>H</option>
				</select>
				<input
					className={styles.inputAddTask}
					placeholder="New task"
					value={descriptionData}
					onChange={handleInput}
					type="text"
					required
				/>
			</div>

			<div className={styles.buttonSubmit} onClick={handleAddTask}>
				{editTask ? buttonEditTask : buttonAddTask}
			</div>
		</div>
	)
}

