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
                        A doubly linked list is a more complex data structure than a singly linked list, but it offers
                        several advantages. The main advantage of a doubly linked list is that it allows for efficient
                        traversal of the list in both directions. This is because each node in the list contains a
                        pointer to the previous node and a pointer to the next node. This allows for quick and easy
                        insertion and deletion of nodes from the list, as well as efficient traversal of the list in
                        both directions.
                    </p>
                </div>
            )}
        </div>
    );
}