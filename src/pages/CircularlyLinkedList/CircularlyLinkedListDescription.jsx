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
                <span className={styles.dropdownLabel}>Description</span>
            </button>
            {expanded && (
                <div className={styles.dropdownContent} id="sll-desc">
                    <p>
                        A circular linked list is a special type of linked list where all the nodes
                        are connected to form a circle. Unlike a regular linked list, which ends with
                        a node pointing to NULL, the last node in a circular linked list points back to
                        the first node. This means that you can keep traversing the list without ever
                        reaching a NULL value.
                    </p>
                </div>
            )}
        </div>
    );
}