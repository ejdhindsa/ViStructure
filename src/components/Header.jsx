import { Link } from 'react-router-dom'
import styles from './header.module.css';

export default function Header() {
   return (
       <>
            <div className={styles.header}>
                <img
                    src="/assets/images/header-image.png"
                    alt="header-image"
                    className={styles.headerImage}
                />
                <Link to="/" className={styles.headLink}>
                    <h1 className={styles.headerText}>
                        <span className={styles.highlight}>VI</span>STRUCTURES
                    </h1>
                </Link>
            </div>
       </>
    ) // end of return

} // end of homepage