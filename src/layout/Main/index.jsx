import styles from "./style.module.css"
import MainRouter from "../../routes/MainRouter"

export default function Main() {

	return (
		<div className={styles.Main}>
			<MainRouter />
		</div>
	)
}