// importing dependencies for the webpage
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { CURRENT_PASSWORD } from "../../components/constants";
// importing styles to stylise the page
import styles from "../CSS/homepage.module.css"

export default function DataStructuresSection()
{
    // states for the password and unlocked content
    const [password, setPassword] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // load unlock state from localStorage
    useEffect(() => {

        const unlocked = localStorage.getItem("cdllUnlocked");
        if (unlocked === "true") {
            setIsUnlocked(true);
            setSuccessMessage("Circular Doubly Linked List Unlocked!");
        } // end of if

    }, []);

    // auto-hide success message after 5 seconds
    useEffect(() => {

        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 5000);

            return () => clearTimeout(timer);
        } // end of if

    }, [successMessage]);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === CURRENT_PASSWORD) {
            setIsUnlocked(true);
            setSuccessMessage("Circular Doubly Linked List Unlocked!");
            localStorage.setItem("cdllUnlocked", "true")
        } // end of if
        else {
            alert("Incorrect password");
        } // end of else

    } // end of handlePasswordSubmit

    return (
        <>
            <div className={styles.dataStructureHeader}>
                Data Structures
            </div>

            {/* Password input is only shown if CDLL is locked */}
            {!isUnlocked && (
                <form onSubmit={handlePasswordSubmit} className={styles.passwordForm}>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Password to Unlock CDLL"
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.passwordInput}
                    />
                    <button type="submit" className={styles.passwordButton}>Unlock</button>
                </form>
            )}

            {isUnlocked && (
                <form className={styles.passwordForm}>
                    <button
                        onClick={() => {
                            localStorage.removeItem("cdllUnlocked");
                            setIsUnlocked(false);
                            setSuccessMessage("");
                        }}
                        className={styles.passwordButton}
                    >
                        Lock CDLL
                    </button>
                </form>
            )}

            {/* Success Message */}
            {successMessage && (
                <div className={styles.successMessage}>{successMessage}</div>
            )}

            <div className={styles.structureTiles}>

                <div className={styles.tile}>
                    <Link to="/singlylinkedlist" className={styles.link}>
                        <img src="/assets/images/SLL.png" className={styles.tileImage} alt="Singly Linked List"/>
                        <div className={styles.tileLink}>
                            Singly Linked List
                        </div>
                    </Link>
                </div>

                <div className={styles.tile}>
                    <Link to="/circularlylinkedlist" className={styles.link}>
                        <img src="/assets/images/CLL.png" className={styles.tileImage} alt="Circularly Linked List"/>
                        <div className={styles.tileLink}>
                            Circularly Linked List
                        </div>
                    </Link>
                </div>

                <div className={styles.tile}>
                    <Link to="/doublylinkedlist" className={styles.link}>
                        <img src="/assets/images/DLL.png" className={styles.tileImage} alt="Doubly Linked List"/>
                        <div className={styles.tileLink}>
                            Doubly Linked List
                        </div>
                    </Link>
                </div>

                {/* Conditional render of CDLL */}
                {isUnlocked && (
                    <div className={styles.tile}>
                        <Link to="/circulardoublylinkedlist" className={styles.link}>
                            <img src="/assets/images/CDLL.png" className={styles.tileImage} alt="Circular Doubly Linked List"/>
                            <div className={styles.tileLink}>
                                Circular Doubly Linked List
                            </div>
                        </Link>
                    </div>
                )}

            </div>

            <div className={styles.structureTiles}>

                <div className={styles.tile}>
                    <Link to="/stack" className={styles.link}>
                        <img src="/assets/images/Stack.png" className={styles.tileImage} alt="stack"/>
                        <div className={styles.tileLink}>
                            Stacks
                        </div>
                    </Link>
                </div>

                <div className={styles.tile}>
                    <Link to="/queue" className={styles.link}>
                        <img src="/assets/images/Queue.png" className={styles.tileImage} alt="queue"/>
                        <div className={styles.tileLink}>
                            Queues
                        </div>
                    </Link>
                </div>

            </div>
        </>
    ) // end of return

} // end of LinkedListSection