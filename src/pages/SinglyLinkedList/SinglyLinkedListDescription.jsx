import { useState } from "react";
import styles from "../CSS/listDescription.module.css";

export default function SinglyLinkedListDescription() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.header}>
                <h1>Singly Linked List</h1>
            </div>
            <button
                className={styles.dropdownToggle}
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-controls="ll-desc"
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
                <div className={styles.dropdownContent} id="ll-desc">
                    <p>
                        A singly linked list is a concrete data structure consisting of sequence of nodes, starting
                        from the head pointer. Each node in the list stores an element, the link to the next node,
                        and the last node (tail) refers to null.
                        <br /> <br/>
                        <span className={styles.methodsList}>
                            A Singly Linked List consists of following methods: <br/>
                            i. <span className={styles.methodName}>size():</span> Returns the size of the list. <br/>
                            ii. <span className={styles.methodName}>isEmpty():</span> Returns true if the list is empty, false otherwise. <br/>
                            iii. <span className={styles.methodName}>first():</span> Returns (but does not remove) thee first element in the list. <br/>
                            iv. <span className={styles.methodName}>last():</span> Returns (but does not remove) the last element in the list. <br/>
                            v. <span className={styles.methodName}>addFirst(element):</span> Adds a new element to the front of the list. <br/>
                            vi. <span className={styles.methodName}>addLast(element):</span> Adds a new element to the last of the list. <br/>
                            vii. <span className={styles.methodName}>removeFirst():</span> Removes and returns the first element of the list. <br/>
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}