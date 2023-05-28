import styles from "./style.module.css"
import { useEffect, useState } from "react"
import Task from "../Task"
import apiFunction from "../../functions/apiFunction"
import Pagination from "../Pagination"

export default function TaskList({ listTask, setTaskList, setEditTask }) {

	let [showTodoTasks, setShowTodoTasks] = useState([])
	let [showDoneTasks, setShowDoneTasks] = useState([])

	let [showTasks, setShowTasks] = useState([])

	let [currentPage, setCurrentPage] = useState(1)
	let [amountToShow, setAmountToShow] = useState(10)


	useEffect(() => {
		if (listTask[0]) {

			let todoArr = [], doneArr = [];

			listTask.forEach((task) => {
				if (task.is_done)
					doneArr.push(task)
				else
					todoArr.push(task)
			})

			
			setShowTodoTasks(todoArr)
			setShowDoneTasks(doneArr)
			setShowTasks(listTask)
		}
	}, [listTask])


	function handleDoubleClick(data) {
		setEditTask(data)
	}

	// To change the task to execution and vice versa
	function handleCheckbox(event, data) {
		let checked = event.target.checked;
		apiFunction("tasks", "PUT", { is_done: checked, id: data.id }, (dataFromServer) => {
			// Get new list
			setTaskList(dataFromServer)
		})
	}

	// To delete task
	function handleDelete(data, index) {
		apiFunction("tasks", "DELETE", { id: data.id }, () => {
			let state = [...listTask];
			state.splice(index, 1)
			setTaskList(state)
		})
	}


	function whatTasksToShow() {
		let copyCurrentPage = currentPage ? currentPage : 1
		let start = ((copyCurrentPage - 1) * amountToShow);
		let end = (start + amountToShow);
		let arr = showTasks.slice(start, end);
		return arr;
	}

	function numPagesToShow() {
		let num = Math.ceil(showTasks.length / amountToShow)
		console.log("num = ", num);
		return num;
	}


	return (<>
		<div className={styles.TaskList}>

			<div className={styles.buttonContainer}>
				<button className={styles.button} onClick={() => { setShowTasks(listTask) }}>All tasks</button>
				<button className={styles.button} onClick={() => { setShowTasks(showTodoTasks) }}>Todo</button>
				<button className={styles.button} onClick={() => { setShowTasks(showDoneTasks) }}>Done</button>
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

		</div>
		<div className={styles.paginationContainer}>
			{showTasks[0] && <Pagination currentPage={currentPage} pagesNum={numPagesToShow()} handleClick={setCurrentPage} />}
		</div></>
	)
}