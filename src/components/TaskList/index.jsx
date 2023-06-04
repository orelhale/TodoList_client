import styles from "./style.module.css"
import { useEffect, useState } from "react"
import Task from "../Task"
import apiFunction from "../../functions/apiFunction"
import Pagination from "../Pagination"
import Button from "../../components/Button"

export default function TaskList({ listTask, setTaskList, setEditTask }) {

	let [list, setList] = useState([])
	let [listOfDisplayOptions, setListOfDisplayOptions] = useState(null)
	let [currentPage, setCurrentPage] = useState(1)
	let [optionSelected, setOptionSelected] = useState("All")

	let displayOptions = ["All", "Todo", "Done"]
	const amountToShow = 5;

	let pagesNum = listOfDisplayOptions ? Math.ceil((listOfDisplayOptions[optionSelected].length) / amountToShow) : 0;


	useEffect(() => {
		if (listTask[0]) {
			let todoArr = [], doneArr = [];

			listTask.forEach((task) => {
				if (task.is_done)
					doneArr.push(task)
				else
					todoArr.push(task)
			})
			setListOfDisplayOptions({ All: listTask, Todo: todoArr, Done: doneArr })
		}
	}, [listTask])


	useEffect(() => {
		if (listOfDisplayOptions) {
			if (pagesNum < currentPage)
				setCurrentPage(currentPage - 1)
			else
				setList(sliceTheList())
		}
	}, [listOfDisplayOptions])


	useEffect(() => {
		if (listOfDisplayOptions)
			setList(sliceTheList())
	}, [currentPage])


	useEffect(() => {
		if (listOfDisplayOptions && optionSelected) {
			setList(sliceTheList())
			setCurrentPage(1)
		}
	}, [optionSelected])


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
			if (optionSelected != "All") 
				index = listTask.findIndex(item => item.id == data.id)
			let state = [...listTask];
			state.splice(index, 1)
			setTaskList(state)
		})
	}


	// To delete task
	function handleChangeOption(e) {
		setOptionSelected(e.target.value)
	}


	// slice the list by amount
	function sliceTheList() {
		let arr = listOfDisplayOptions[optionSelected] || []
		let start = ((currentPage - 1) * amountToShow);
		let end = (start + amountToShow);
		return arr.slice(start, end)
	}


	return (
		<div className={styles.TaskList}>

			<div className={styles.TaskListContainer}>
				<div className={styles.buttonContainer}>
					{displayOptions.map((option) =>
						<Button value={option} type={optionSelected == option ? 3 : 4} onClick={handleChangeOption}>{option}</Button>
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