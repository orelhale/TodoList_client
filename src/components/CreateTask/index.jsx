import { useEffect, useState } from "react"
import styles from "./style.module.css"
import apiFunction from "../../functions/apiFunction"
import SelectList from "../SelectList"
import { getPriorityListPoint } from "../../functions/taskFanctions"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';




export default function CreateTask({ setTaskList, editTask, setEditTask }) {

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
		if (borderStyle)
			setBorderStyle(null)
		setDescriptionData(e.target.value)
	}


	let handleAddOrEditTask = () => {
		if (!descriptionData) {
			setBorderStyle({ "border-color": "red" })
			return;
		}
		let dataToServer = editTask || {}

		dataToServer.description = descriptionData
		dataToServer.priority = priorityData
		dataToServer.is_done = false;

		apiFunction("tasks", (editTask ? "PUT" : "POST"), dataToServer, (data) => {
			// Get new list
			setTaskList(data)
			// Data reset
			setEditTask(null)
			setPriorityData(1)
			setDescriptionData("")
		})
	}


	let buttonCreateTask = <>{<ControlPointIcon className={styles.icon} />}<span className={styles.buttonText}> Add</span></>;
	let buttonEditTask = <>{<EditIcon className={styles.icon} />}<span className={styles.buttonText}> Edit</span></>;

	return (
		<div className={styles.CreateTask}>

			<div className={styles.inputContainer} style={borderStyle}>
				<input
					className={styles.input}
					placeholder="New task"
					value={descriptionData}
					onChange={handleInput}
					type="text"
					required
				/>
				<SelectList handleChange={handleSelect} value={priorityData} priorityList={getPriorityListPoint} />
			</div>

			<div className={styles.buttonSubmit} onClick={handleAddOrEditTask}>
				{editTask ? buttonEditTask : buttonCreateTask}
			</div>

		</div>
	)
}

