import styles from "./style.module.css"
import MengeContext from "../../context/Context"
import { useContext, useEffect, useState } from "react"
import Task from "../Task"
import apiFunctions from "../../functions/apiFunctions"

export default function TasksList() {
	let { listTask, setSistTask } = useContext(MengeContext)
	let { list, setSist } = useState([])

	useEffect(() => {
		getList()
	}, [])

	async function getList() {
		let data = await apiFunctions("tasks", "GET")
		data && setSistTask(data)
	}

	async function handleCheckBox() {
	
	}
	async function handleDoubleClick() {
	
	}


	return (
		<div className={styles.TasksList}>
			{listTask[0] &&

				<table className={styles.table}>
					<tbody>
						{
							listTask.map((task, indexTask) => {
								return <Task 
									handleDoubleClick={handleDoubleClick} 
									key={indexTask} 
									data={task} 
									handleCheckBox={handleCheckBox}
								/>
							})
						}
					</tbody>
				</table>}
		</div >
	)
}