import styles from "./style.module.css"
import { useEffect, useState, useMemo } from "react"
import Task from "../Task"
import apiFunction from "../../functions/apiFunction"
import Pagination from "../Pagination"

export default function TaskList({ listTask, setTaskList, setEditTask }) {

	let [list, setList] = useState([])
	let [listOfOptions, setListOfOptions] = useState(null)
	let [currentPage, setCurrentPage] = useState(1)

	const amountToShow = 5;
	let pagesNum = listOfOptions ? Math.ceil((listOfOptions.All.length) / amountToShow) : 0;


	useEffect(() => {
		if (listTask[0]) {
			let todoArr = [], doneArr = [];

			listTask.forEach((task) => {
				if (task.is_done)
					doneArr.push(task)
				else
					todoArr.push(task)
			})

			setListOfOptions({ All: listTask, Todo: todoArr, Done: doneArr })
			setList(sliceTheList(listTask))
		}
	}, [listTask])


	useEffect(() => {
		if (listOfOptions) {
			if (pagesNum < currentPage)
				setCurrentPage(currentPage - 1)
			setList(sliceTheList())
		}
	}, [currentPage])


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


	// To delete task
	function handleChangeOption(e) {
		setList(listOfOptions[e.target.value])
		setCurrentPage(1)
	}


	// slice the list by amount
	function sliceTheList(specificArr = listOfOptions.All) {
		let arr = specificArr || []
		let copyCurrentPage = currentPage ? currentPage : 1
		let start = ((copyCurrentPage - 1) * amountToShow);
		let end = (start + amountToShow);
		return arr.slice(start, end)
	}


	return (
		<div className={styles.TaskList}>

			<div className={styles.TaskListContainer}>
				<div className={styles.buttonContainer}>
					{["All", "Todo", "Done"].map((option) =>
						<button value={option} className={styles.button} onClick={handleChangeOption}>{option}</button>
					)}
				</div>

				<hr className={styles.hr} />

				{list[0] && <div className={styles.listContainer}>
					{list.map((task, indexTask, all) => <>
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
				</div>}
			</div>

			<div className={styles.paginationContainer}>
				<Pagination currentPage={currentPage} pagesNum={pagesNum} handleClick={setCurrentPage} />
			</div>

		</div>
	)
}