import styles from "./style.module.css"
import TasksList from "../../components/TasksList"

export default function Home() {

	return (
		<div className={styles.Home}>
			<TasksList />
		</div>
	)
}