import ItemCount from "../ItemCount/ItemCount"
import styles from './ItemDetail.module.css'

const ItemDetail =({id, name, img, category, descripcion, price, stock}) =>{
    return(
        <article className={styles.cardItem}>
            <header className={styles.header}>
                <h2 className={styles.itemHeader}>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={styles.itemImg}/>
            </picture>
            <section>
                <p className={styles.info}>
                    Categoria:{category}
                </p>
                <p className={styles.info}>
                    Descripcion:{descripcion} 
                </p>
                <p className={styles.info}>
                    Precio: ${price} 
                </p>
            </section>
            <footer className={styles.itemFooter}>
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agregada', quantity) } id={id} />
            </footer>
        </article>
    )
}

export default ItemDetail