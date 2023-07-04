import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const Checkout = ()=>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")
    const[cart, total, clearCart] = useContext(CartContext)
    const createOrder = async({name, phone, email}) =>{
        setLoading(true)
        try {
            const objOrder ={
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

        }

    }

    if (loading) {
        return <h1>Se esta generando su orden...</h1>
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }
    
    return{
        <div>
            <h1>Checkout</h1>
        </div>

    } 
}