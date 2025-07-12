import styles from "../CSS/listDescription.module.css";

export default function CLLDescription() {

    return (

        <div className={styles.description}>
            <div className={styles.descriptionText} id="sll-desc">
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A doubly linked list is a type of linked list where each node contains references to both its
                    previous and next nodes. This allows traversal in <b>both directions</b>, forward and backward, unlike
                    singly linked lists which can only move forward. The first node’s previous pointer is `null`,
                    and the last node’s next pointer is also `null`.
                    <br/> <br/> <br/>
                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                            A Doubly Linked List contains the following methods: <br/>
                            i. <span className={styles.methodName}>size():</span> Returns the size of the list. <br/>
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
                        </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Doubly Linked Lists are ideal when frequent traversal is needed in both directions. They are
                    commonly used in navigation systems (forward/back buttons), undo-redo functionality in
                    editors, music playlist managers, and complex data structures like dequeue, LRU caches,
                    and binary trees (via threaded binary trees).
                </p>
            </div>
        </div>

    );
}