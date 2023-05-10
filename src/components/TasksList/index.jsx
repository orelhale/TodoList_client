import styles from "./style.module.css"
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react"
import Task from "../Task"
import apiFunctions from "../../functions/apiFunctions"

export default function TasksList() {
	let { listTask, setListTask, chenchIndexInListTask, setEditTask } = useContext(Context)

	useEffect(() => {
		getTasksFromServer()
	}, [])

	// Get tasks from server
	async function getTasksFromServer() {
		let data = await apiFunctions("tasks", "GET")
		data && setListTask(data)
	}

	function handleDoubleClick(data) {
		setEditTask(data)
	}

	// To change the task to execution and vice versa
	function handleCheckbox(event, data, indexTask) {
		let checked = event.target.checked;
		apiFunctions("tasks", "PUT", { is_done: checked, id: data.id }, () => {
			data.is_done = checked;
			chenchIndexInListTask(indexTask, data)
		})
	}

	// To delete task
	function handleDelete(data, index) {
		apiFunctions("tasks", "DELETE", { id: data.id }, () => {
			let state = [...listTask];
			state.splice(index, 1)
			setListTask(state)
		})
	}

	return (
		<div className={styles.TasksList}>
			{listTask[0] &&
				listTask.map((task, indexTask) => {
					return <Task
						handleDoubleClick={handleDoubleClick}
						indexTask={indexTask}
						key={indexTask}
						data={task}
						handleCheckbox={handleCheckbox}
						handleDelete={handleDelete}
					/>
				})
			}
		</div >
	)
}