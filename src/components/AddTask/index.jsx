import { useContext, useEffect, useState, useRef } from "react"
import styles from "./style.module.css"
import apiFunctions from "../../functions/apiFunctions"
import Context from "../../context/Context"
import Plus1 from "../icons/Plus1"
import Edit from "../icons/Edit"
import SelectList from "../SelectList"
import { getPriorityListPoint, getBallPriorityMUI } from "../../functions/taskFanctions"

export default function AddTask() {
	let { setListTask, editTask, setEditTask, editTaskSocket } = useContext(Context)

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
		editTaskSocket({ priority: e.target.value })
	}

	let handleOnkeyPress = (e) => {
		if (e.key == "Enter") {
			handleAddOrEditTask()
		}
	}

	let handleInput = (e) => {
		if (borderStyle) {
			setBorderStyle(null)
		}
		setDescriptionData(e.target.value)
		editTaskSocket({ description: e.target.value })
	}


	let handleAddOrEditTask = () => {
		if (!descriptionData) {
			setBorderStyle({ "border-color": "red" })
			return;
		}
		let dataToServer = { description: descriptionData, priority: priorityData }

		// TO edit task
		if (editTask) {
			editTask.is_done = false;

			dataToServer = { ...editTask, ...dataToServer }

			apiFunctions("tasks", "PUT", dataToServer, (data) => {
				// Get new list
				setListTask(data)
				// Data reset
				setPriorityData(1)
				setDescriptionData("")
			})
			// TO add task
		} else {


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

	let buttonAddTask = <>{<Plus1 className={styles.icon} />}<span className={styles.buttonText}> Add</span></>;
	let buttonEditTask = <>{<Edit className={styles.icon} />}<span className={styles.buttonText}> Edit</span></>;

	return (
		<div className={styles.AddTask}>

			<div className={styles.inputContainer} style={borderStyle}>
				<input
					onKeyDown={handleOnkeyPress}
					className={styles.input}
					placeholder="New task"
					value={descriptionData}
					onChange={handleInput}
					type="text"
					required
				/>
				<SelectList handleChange={handleSelect} myValue={getBallPriorityMUI} value={priorityData} listMenuItem={getPriorityListPoint} />
			</div>

			<div className={styles.buttonSubmit} onClick={handleAddOrEditTask}>
				{editTask ? buttonEditTask : buttonAddTask}
			</div>

		</div>
	)
}

