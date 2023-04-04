import styles from "./Navbar.module.css"

const Navbar=()=>{
    return(        <div >
           
        <ul className={styles.Navbar}>
        <h1>
           Blood Connect
        </h1>
            <li>Donor</li>
            <li>Recipient</li>
            <li>Profile</li>
        </ul>
        </div>
      
    )
}
export default Navbar;