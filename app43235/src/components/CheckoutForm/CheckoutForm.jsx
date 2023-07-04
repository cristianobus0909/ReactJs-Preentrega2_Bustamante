import { useState } from "react"
import styles from "./CheckoutForm.module.css"

const CheckoutForm = ({onConfirm}) =>{
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")
    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData ={
            name, phone, email
        }
        onConfirm(userData)
    }
    return (
        <div>
            <form onSubmit ={handleConfirm} className={styles.form}>
                <label>
                </label>
            </form>
        </div>
    )
}