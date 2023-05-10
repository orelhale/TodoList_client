import styles from "./style.module.css"
import TasksList from "../../components/TasksList"
import AddTask from "../../components/AddTask"

export default function Home() {

	return (
		<div className={styles.Home}>
			<AddTask />
			<TasksList />
		</div>
	)
}