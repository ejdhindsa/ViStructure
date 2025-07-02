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
                <span className={styles.dropdownLabel}>Structure Description</span>
            </button>
            {expanded && (
                <div className={styles.dropdownContent} id="sll-desc">
                    <p>
                        A stack is a collection of objects that are inserted and removed according to last-in first-out
                        (LIFO) principle. A user may insert objects into a stack at any time, but may only access or
                        remove the most recently inserted object that remains (the "top" of the stack).
                        <br /> <br/>
                        <span className={styles.methodsList}>
                            A Stack consists of following methods: <br/>
                            i. <span className={styles.methodName}>size():</span>
                                Returns the size of the stack. <br/>
                            ii. <span className={styles.methodName}>isEmpty():</span>
                                Returns true if the stack is empty, false otherwise. <br/>
                            iii. <span className={styles.methodName}>top():</span>
                                Returns (but does not remove) the top most element in the stack. <br/>
                            iv. <span className={styles.methodName}>push(e):</span>
                                Adds a new element to the top of the stack. <br/>
                            v. <span className={styles.methodName}>pop():</span>
                                Removes and returns the element on top of the stack. <br/>
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}