import styles from "./style.module.css"


export default function Button({ className, value, onClick, type = 0, children }) {

   let buttonStyle = ["", styles.roundSelectButton, styles.roundButton, styles.squareSelectButton, styles.squareButton]

   return <button value={value} onClick={onClick && onClick} className={`${className} ${buttonStyle[type]}`} >{children}</button>
}