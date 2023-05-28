import styles from "./style.module.css"
import TaskList from "../../components/TaskList"
import CreateTask from "../../components/CreateTask"
import { useEffect, useState } from "react";
import apiFunction from "../../functions/apiFunction";

export default function Home() {

	let [listTask, setTaskList] = useState([]);
	let [editTask, setEditTask] = useState(null);

	// Get tasks from server
	async function getTasksFromServer() {
		let data = await apiFunction("tasks", "GET")
		data && setTaskList(data)
	}

	useEffect(() => {
		getTasksFromServer()
	}, [])


	return (
		<div className={styles.Home}>
			<div className={styles.Container}>

				<CreateTask setTaskList={setTaskList} setEditTask={setEditTask} editTask={editTask} />
				<TaskList setTaskList={setTaskList} setEditTask={setEditTask} listTask={listTask} />

			</div>
		</div>
	)
}