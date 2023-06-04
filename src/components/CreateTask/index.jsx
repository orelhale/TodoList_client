import { useEffect, useState } from "react"
import styles from "./style.module.css"
import apiFunction from "../../functions/apiFunction"
import SelectList from "../SelectList"
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import PriorityBall from "../../components/PriorityBall"
import Button from "../Button";


export default function CreateTask({ setTaskList, editTask, setEditTask }) {

	let [descriptionData, setDescriptionData] = useState("")
	let [priorityData, setPriorityData] = useState(1)
	let [borderStyle, setBorderStyle] = useState(null)

	let priorityList = [...Array(3).keys()].map(item => ({ value: (item + 1), element: (<PriorityBall type={(item + 1)} />) }))

	useEffect(() => {
		if (editTask) {
			setDescriptionData(editTask.description)
			setPriorityData(editTask.priority)
		}
	}, [editTask])


	let handleSelect = (e) => {
		setPriorityData(e.target.value)
		editTask && setEditTask((item) => ({ ...item, priority: e.target.value }))
	}


	let handleInput = (e) => {
		if (borderStyle)
			setBorderStyle(null)
		setDescriptionData(e.target.value)
		editTask && setEditTask((item) => ({ ...item, description: e.target.value }))
	}

	let handleAddOrEditTask = () => {
		if (!descriptionData) {
			setBorderStyle(true)
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

	return (
		<div className={styles.CreateTask}>

			<div className={`${styles.inputContainer} ${borderStyle && styles.borderStyle}`}>
				<input
					className={styles.input}
					placeholder="New task"
					value={descriptionData}
					onChange={handleInput}
					type="text"
					required
				/>
				<SelectList handleChange={handleSelect} value={priorityData} selectList={priorityList} />
			</div>


			<Button type={3} onClick={handleAddOrEditTask}>
				{editTask ? <EditIcon /> : <ControlPointIcon />}
				<span className={styles.buttonText}> {editTask ? "Edit" : "Add"}</span>
			</Button>

		</div>
	)
}

