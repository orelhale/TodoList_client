import styles from "./style.module.css"
import Context from "../../context/Context"
import { useContext, useEffect, useState } from "react"
import Task from "../Task"
import apiFunctions from "../../functions/apiFunctions"
import SelectList from "../SelectList"
import Pagination from "../Pagination"

export default function TasksList() {
	let { listTask, setListTask, setEditTask } = useContext(Context)

	let [showTodoTasks, setShowTodoTasks] = useState([])
	let [showDoneTasks, setShowDoneTasks] = useState([])

	let [showTasks, setShowTasks] = useState([])

	let [currentPage, setCurrentPage] = useState(1)
	let [amountToShow, setAmountToShow] = useState(10)

	useEffect(() => {
		getTasksFromServer()
		numPagesToShow()
		whatTasksToShow()
	}, [])

	useEffect(() => {
		if (listTask[0]) {
			setShowTodoTasks(listTask.filter((task) => !task.is_done))
			setShowDoneTasks(listTask.filter((task) => task.is_done))
			setShowTasks(listTask)
		}
	}, [listTask])

	useEffect(() => {
		if (showTodoTasks[0]) {
			console.log("showTodoTasks = ", showTodoTasks);
		}
		if (showDoneTasks[0]) {
			console.log("showDoneTasks = ", showDoneTasks);
		}
	}, [listTask, showDoneTasks])

	// Get tasks from server
	async function getTasksFromServer() {
		let data = await apiFunctions("tasks", "GET")
		data && setListTask(data)
	}

	function handleDoubleClick(data) {
		setEditTask(data)
	}

	// To change the task to execution and vice versa
	function handleCheckbox(event, data) {
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

	// to cheange amount task to show 
	function handleInputAmountTasks(e) {
		setAmountToShow(e.target.value)
	}

	function whatTasksToShow() {
		let copyCurrentPage = currentPage ? currentPage : 1
		let start = ((copyCurrentPage - 1) * amountToShow);
		let end = (start + amountToShow);
		let arr = showTasks.slice(start, end);
		// let arr = fruits.slice(start, end) || [];
		console.log("start = ", start);
		console.log("end = ", end);
		return arr;
	}

	function numPagesToShow() {
		let copyCurrentPage = currentPage ? currentPage : 1
		let sum = showTasks.length;
		let result = Math.floor(sum / amountToShow)
		console.log("result = ", result);
		let num = result < (sum / amountToShow) ? (result + 1): result;
		console.log("num = ", num);
		return (!num || num == 0) ? 1 : num;
	}

	function handleClick(num) {
		num != currentPage && setCurrentPage(num)
	}

	return (
		<div className={styles.TasksList}>

			<div className={styles.buttonContainer}>
				<button className={styles.button} onClick={() => { setShowTasks(listTask) }}>All tasks</button>
				<button className={styles.button} onClick={() => { setShowTasks(showTodoTasks) }}>Todo</button>
				<button className={styles.button} onClick={() => { setShowTasks(showDoneTasks) }}>Done</button>
				<input value={amountToShow} min={1} onChange={handleInputAmountTasks} />
			</div>
			<hr className={styles.hr} />

			{showTasks[0] &&
				<div className={styles.listContainer}>

					{whatTasksToShow().map((task, indexTask, all) => <>
						<Task
							handleDoubleClick={handleDoubleClick}
							indexTask={indexTask}
							key={indexTask}
							data={task}
							handleCheckbox={handleCheckbox}
							handleDelete={handleDelete}
						/>
						{(indexTask < all.length - 1) && <hr className={styles.hr2} />}

					</>)}
				</div>
			}
			<div>
				<Pagination pagesNum={numPagesToShow()} handleClick={handleClick}/>
			</div>
		</div >
	)
}