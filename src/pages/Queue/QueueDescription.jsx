import { useState } from "react";
import styles from "../CSS/listDescription.module.css";

export default function QueueDescription() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.header}>
                <h1>Queue</h1>
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
                        A Queue is a collection of objects that are inserted and removed according to the first-in
                        first out (FIFO) principle. Elements can be inserted at anytime, but only the element that has
                        been in the queue the longest can be removed at any time.
                        <br /> <br/>
                        <span className={styles.methodsList}>
                            A Queue consists of following methods: <br/>
                            i. <span className={styles.methodName}>size():</span>
                                Returns the size of the queue. <br/>
                            ii. <span className={styles.methodName}>isEmpty():</span>
                                Returns true if the queue is empty, false otherwise. <br/>
                            iii. <span className={styles.methodName}>first():</span>
                                Returns (but does not remove) the front in the queue. <br/>
                            iv. <span className={styles.methodName}>enqueue(element):</span>
                                Adds a new element to the front of the queue. <br/>
                            v. <span className={styles.methodName}>dequeue():</span>
                                Removes and returns the first element of the queue. <br/>
                        </span>
                    </p>
                </div>
            )}
        </div>
    );

}// end of QueueDescription