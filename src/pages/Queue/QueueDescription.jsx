import styles from "../CSS/listDescription.module.css";

export default function QueueDescription() {

    return (

        <div className={styles.description}>
            <div className={styles.descriptionText} id="sll-desc">
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A queue is a linear data structure that follows the First In, First Out (FIFO) principle.
                    This means the first element added to the queue is the first one to be removed. It works like a
                    real-life queue (e.g., people lining up)—the person who gets in first is served first. Elements are
                    added at the **rear** and removed from the front.
                    <br/> <br/> <br/>

                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                        A Queue contains the following methods: <br/>
                        i. <span className={styles.methodName}>size():</span> Returns the number of elements in the queue. <br/>
                        ii. <span className={styles.methodName}>isEmpty():</span>
                            Returns true if the queue is empty, false otherwise. <br/>
                        iii. <span className={styles.methodName}>enqueue(element):</span>
                            Adds a new element to the rear of the queue. <br/>
                        iv. <span className={styles.methodName}>dequeue():</span>
                            Removes and returns the front element of the queue. <br/>
                        v. <span className={styles.methodName}>first():</span>
                            Returns (but does not remove) the front element of the queue. <br/>
                    </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Queues are fundamental in systems that require elements to be processed in order. Common use cases
                    include task scheduling, printer queues, breadth-first search (BFS) in graphs, buffer handling in
                    data streams, and asynchronous messaging systems where tasks are lined up for sequential processing.
                </p>
            </div>
        </div>
    );

}// end of QueueDescription