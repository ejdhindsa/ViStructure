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
            </div>
       </>
    ) // end of return

} // end of homepage