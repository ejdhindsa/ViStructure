import { useState } from "react";
import styles from "../CSS/listDescription.module.css";

export default function DoublyLinkedListDescription() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.header}>
                <h1>Circular Doubly Linked List</h1>
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
                        A circular doubly linked list is a data structure where each node has two pointers: one to the
                        next node and one to the previous node, and the last node points back to the first node,
                        creating a circular loop. This allows for efficient traversal in both directions and simplifies
                        insertion and deletion operations.
                    </p>
                </div>
            )}
        </div>
    );
}