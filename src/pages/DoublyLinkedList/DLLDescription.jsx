import { useState } from "react";
import styles from "../CSS/listDescription.module.css";

export default function DoublyLinkedListDescription() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.header}>
                <h1>Doubly Linked List</h1>
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
                <span className={styles.dropdownLabel}>Description</span>
            </button>
            {expanded && (
                <div className={styles.dropdownContent} id="sll-desc">
                    <p>
                        A Doubly Linked List can be traversed forward and backward. The nodes in this data structure
                        store the following information: an element, link to the previous node, and link to the
                        next node.
                        <br /> <br/>
                        <span className={styles.methodsList}>
                            A Doubly Linked List consists of following methods: <br/>
                            i. <span className={styles.methodName}>size():</span>
                                Returns the size of the list. <br/>
                            ii. <span className={styles.methodName}>isEmpty():</span>
                                Returns true if the list is empty, false otherwise. <br/>
                            iii. <span className={styles.methodName}>first():</span>
                                Returns (but does not remove) the first element in the list. <br/>
                            iv. <span className={styles.methodName}>last():</span>
                                Returns (but does not remove) the last element in the list. <br/>
                            v. <span className={styles.methodName}>addFirst(element):</span>
                                Adds a new element to the front of the list. <br/>
                            vi. <span className={styles.methodName}>addLast(element):</span>
                                Adds a new element to the last of the list. <br/>
                            vii. <span className={styles.methodName}>removeFirst():</span>
                                Removes and returns the first element of the list. <br/>
                            viii. <span className={styles.methodName}>removeLast():</span>
                                Removes and returns the last element of the list. <br/>
                        </span>
                        <br /><br />
                        At either ends of the doubly linked list are sentinel nodes. A header that is before the first
                        and a trailer that is after the last element of the list. These "dummy" or <em>sentinel </em>
                        nodes do not store any elements.
                    </p>
                </div>
            )}
        </div>
    );
}