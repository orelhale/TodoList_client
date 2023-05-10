import styles from "./style.module.css"
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react"
import Task from "../Task"
import apiFunctions from "../../functions/apiFunctions"

export default function TasksList() {
	let { listTask, setListTask, setEditTask } = useContext(Context)

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
		apiFunctions("tasks", "PUT", { is_done: checked, id: data.id }, (dataFromServer) => {
			// Get new list
			setListTask(dataFromServer)
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

			<div className={styles.header}>Todo list</div>
			<hr className={styles.hr} />

			{listTask[0] &&
				<div className={styles.listContainer}>
					{
						listTask.map((task, indexTask) => <>
							<Task
								handleDoubleClick={handleDoubleClick}
								indexTask={indexTask}
								key={indexTask}
								data={task}
								handleCheckbox={handleCheckbox}
								handleDelete={handleDelete}
							/>
							{(indexTask < listTask.length - 1) && <hr className={styles.hr2} />}
						</>)
					}
				</div>
			}
		</div >
	)
}