import { useState } from "react";
import styles from "../CSS/listDescription.module.css";

export default function CircularlyLinkedListDescription() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.header}>
                <h1>Circularly Linked List</h1>
            </div>
            <button
                className={styles.dropdownToggle}
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-controls="sll-desc"
                type="button"
            >
            <span
                className={`${styles.arrowIcon} ${expanded ? styles.arrowDown : styles.arrowRight}`}
            >
              ▶
            </span>
                <span className={styles.dropdownLabel}>Structure Description</span>
            </button>
            {expanded && (
                <div className={styles.dropdownContent} id="sll-desc">
                    <p>
                        A circular linked list is a special type of linked list where all the nodes
                        are connected to form a circle. Unlike a regular linked list, which ends with
                        a node pointing to NULL, the last node in a circular linked list points back to
                        the first node. This means that you can keep traversing the list without ever
                        reaching a NULL value.
                        <br/> <br/>
                        <span className={styles.methodsList}>
                            A Circular Linked List contains the following methods: <br/>
                            i. <span className={styles.methodName}>size():</span> Returns the size of the list. <br/>
                            ii. <span className={styles.methodName}>isEmpty():</span>
                                Returns true if the list is empty, false otherwise. <br/>
                            iii. <span className={styles.methodName}>first():</span>
                                Returns (but does not remove) thee first element in the list. <br/>
                            iv. <span className={styles.methodName}>last():</span>
                                Returns (but does not remove) the last element in the list. <br/>
                            v. <span className={styles.methodName}>addFirst(element):</span>
                                Adds a new element to the front of the list. <br/>
                            vi. <span className={styles.methodName}>addLast(element):</span>
                                Adds a new element to the last of the list. <br/>
                            vii. <span className={styles.methodName}>removeFirst():</span>
                                Removes and returns the first element of the list. <br/>
                            vii. <span className={styles.methodName}>rotate():</span>
                                Moves the first to the end of the list. <br/>
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}