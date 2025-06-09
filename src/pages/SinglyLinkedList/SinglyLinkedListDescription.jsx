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
                <span className={styles.dropdownLabel}>Description</span>
            </button>
            {expanded && (
                <div className={styles.dropdownContent} id="ll-desc">
                    <p>
                        According to Geeks for Geeks, A singly linked list is a fundamental data structure, it
                        consists of nodes where each node contains a data field and a reference to the next node
                        in the linked list. The next of the last node is null, indicating the end of the list.
                        Linked Lists support efficient insertion and deletion operations.
                    </p>
                </div>
            )}
        </div>
    );
}