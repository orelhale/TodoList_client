import styles from "./style.module.css"


export default function PriorityBall({ type = 0, className = "" }) {
	let priorityList = ["", styles.lowTask, styles.middleTask, styles.highTask]

	return <div className={`${priorityList[type]} ${className}`}></div>
}
