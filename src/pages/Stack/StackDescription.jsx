import { useState } from "react";
import styles from "../CSS/listDescription.module.css";


export default function StackDescription() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.header}>
                <h1>Stacks</h1>
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
                        A Stack is a linear data structure that follows a particular order in which the operations are
                        performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies
                        that the element that is inserted last, comes out first and FILO implies that the element that
                        is inserted first, comes out last.
                    </p>
                </div>
            )}
        </div>
    );
}