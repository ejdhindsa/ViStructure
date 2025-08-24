import styles from "../CSS/listDescription.module.css";

export default function CLLDescription() {

    return (

        <div className={styles.description}>
            <div className={styles.descriptionText} id="sll-desc">
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A singly linked list is the most basic type of linked list where each node contains data and a
                    reference to the next node. Unlike a circular linked list, the last node in a singly linked list
                    points to <span className={styles.methodName}>null</span>, marking the end of the structure.
                    Traversal is only possible in one direction, from the head node to the tail node.
                    <br/> <br/> <br/>

                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                      A Singly Linked List contains the following methods: <br/>
                      i. <span className={styles.methodName}>size():</span> Returns the size of the list. <br/>
                      ii. <span className={styles.methodName}>isEmpty():</span>
                          Returns true if the list is empty, false otherwise. <br/>
                      iii. <span className={styles.methodName}>first():</span>
                          Returns (but does not remove) the first element in the list. <br/>
                      iv. <span className={styles.methodName}>addFirst(element):</span>
                          Adds a new element to the front of the list. <br/>
                      v. <span className={styles.methodName}>addLast(element):</span>
                          Adds a new element to the end of the list. <br/>
                      vi. <span className={styles.methodName}>removeFirst():</span>
                          Removes and returns the first element of the list. <br/>
                    </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Singly linked lists are commonly used when memory efficiency is important and data is processed
                    sequentially. Typical use cases include implementing stacks and queues, maintaining an ordered
                    collection where insertions and deletions at the beginning are frequent, and managing dynamic
                    memory allocation where array resizing would be costly.
                </p>
            </div>

        </div>
    );
}