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
            {/* CDLL Unlocker */ }

            <div className={styles.structureHeader}>

                {/* Password input is only shown if CDLL is locked */}
                {!isUnlocked && (
                    <form onSubmit={handlePasswordSubmit} className={styles.passwordForm}>
                        <input
                            type="text"
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

            </div>

            {/* Success Message */}
            {successMessage && (
                <div className={styles.successMessage}>{successMessage}</div>
            )}

            <div className={styles.structureTiles}>
                <div className={styles.tile}>
                    <Link to="/singlylinkedlist" className={styles.link}>
                        <div className={styles.linkName}>
                            SINGLY <br/> LINKED LIST
                        </div>
                        <div className={styles.linkDescription}>
                            A singly linked list is a sequence of nodes where each node points to the next. It starts
                            at the head and ends with null.
                        </div>
                    </Link>
                </div>

                <div className={styles.tile}>
                    <Link to="/circularlylinkedlist" className={styles.link}>
                        <div className={styles.linkName}>
                            CIRCULARLY LINKED LIST
                        </div>
                        <div className={styles.linkDescription}>
                            A circularly linked list is a sequence of nodes where each node points to the next, and the
                            last node points back to the head, forming a circle.
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles.structureTiles}>
                <div className={styles.tile}>
                    <Link to="/doublylinkedlist" className={styles.link}>
                        <div className={styles.linkName}>
                            DOUBLY <br/> LINKED LIST
                        </div>
                        <div className={styles.linkDescription}>
                            A doubly linked list is a sequence of nodes where each node points to both its next and
                            previous nodes, allowing traversal in both directions.
                        </div>
                    </Link>
                </div>

                <div className={styles.tile}>
                    <Link to="/stack" className={styles.link}>
                        <div className={styles.linkName}>
                            STACKS
                        </div>
                        <div className={styles.linkDescription}>
                            A stack is a linear data structure that follows the Last In, First Out (LIFO) principle,
                            where elements are added and removed from the top.
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles.structureTiles}>
                <div className={styles.tile}>
                    <Link to="/queue" className={styles.link}>
                        <div className={styles.linkName}>
                            QUEUES
                        </div>
                        <div className={styles.linkDescription}>
                            A queue is a data structure that follows the First In, First Out (FIFO) principle,
                            elements are added at the rear and removed from the front.
                        </div>
                    </Link>
                </div>

                <div className={styles.tile}>
                    <Link to="/array" className={styles.link}>
                        <div className={styles.linkName}>
                            ARRAY
                        </div>
                        <div className={styles.linkDescription}>
                            An array is a data structure that stores elements in contiguous memory locations
                            and allows direct access using an index.
                        </div>
                    </Link>
                </div>

            </div>

            <div className={styles.structureTiles}>
                {/* Conditional render of CDLL */}
                {isUnlocked && (
                    <div className={styles.tile}>
                        <Link to="/circulardoublylinkedlist" className={styles.link}>
                            <div className={styles.linkName}>
                                CIRCULAR DOUBLY LINKED LIST
                            </div>
                            <div className={styles.linkDescription}>
                                A circular doubly linked list has nodes linked in both directions, with the last node
                                pointing to the first and vice versa, forming a loop.
                            </div>
                        </Link>
                    </div>
                )}
            </div>

            <div className={styles.bottom}></div>

        </>
    ) // end of return

} // end of LinkedListSection