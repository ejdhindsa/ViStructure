import styles from "../CSS/listDescription.module.css"

export default function PriorityQueueDescription() {
    return (
        <div className={styles.description}>
            <div className={styles.descriptionText}>
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A priority queue is an abstract data type that stores a collection of elements, each associated
                    with a priority key. Unlike standard queues (FIFO), elements in a priority queue are served based
                    on their priority level—typically, the element with the "minimum" key (highest priority) is accessed
                    first. It is often implemented using a heap data structure.
                    <br/> <br/> <br/>
                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                    A PRIORITY QUEUE contains the following methods: <br/>
                    i. <span className={styles.methodName}>size():</span> Returns the number of entries in the priority queue. <br/>
                    ii. <span className={styles.methodName}>isEmpty():</span> Returns true if the priority queue is empty. <br/>
                    iii. <span className={styles.methodName}>min():</span> Returns the entry with the smallest key (highest priority) without removing it. <br/>
                    iv. <span className={styles.methodName}>insert(k, v):</span> Adds a new entry with key k and value v to the queue. <br/>
                    v. <span className={styles.methodName}>removeMin():</span> Removes and returns the entry with the smallest key (highest priority). <br/>
                </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Priority Queues are essential for algorithms where processing order depends on item importance.
                    Common use cases include graph algorithms (Dijkstra’s Shortest Path, Prim’s Minimum Spanning Tree),
                    process scheduling in operating systems (where certain tasks take precedence), and data compression
                    techniques like Huffman coding.
                </p>
            </div>
        </div>
    );
}