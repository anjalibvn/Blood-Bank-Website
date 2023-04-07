import styles from "./Navbar.module.css"

const Navbar=({selected})=>{
    
    return(        <div >
           
        <ul className={styles.Navbar}>
        <h1>
           Blood Connect
        </h1>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        </div>
      
    )
}
export default Navbar;