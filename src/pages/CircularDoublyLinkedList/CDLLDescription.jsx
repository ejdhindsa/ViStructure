import styles from "../CSS/listDescription.module.css";

export default function DoublyLinkedListDescription() {

    return (

        <div className={styles.description}>
            <div className={styles.descriptionText} id="sll-desc">
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A circular doubly linked list is a special type of linked list where each node has two pointers:
                    one pointing to the next node and one to the previous node, forming a two-way
                    connection. Unlike a regular doubly linked list, the last node links back to the first node,
                    and the first node links to the last node, creating a closed loop. This allows traversal in
                    both directions without encountering null values.

                    <br/><br/><br/>

                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                        A Circular Doubly Linked List typically contains the following methods: <br/>
                        i. <span className={styles.methodName}>size():</span>
                        Returns the number of elements in the list. <br/>
                        ii. <span className={styles.methodName}>isEmpty():</span>
                        Returns true if the list is empty, false otherwise. <br/>
                        iii. <span className={styles.methodName}>first():</span>
                        Returns (but does not remove) the first element in the list. <br/>
                        iv. <span className={styles.methodName}>last():</span>
                        Returns (but does not remove) the last element in the list. <br/>
                        v. <span className={styles.methodName}>addFirst(element):</span>
                        Adds a new element to the front of the list. <br/>
                        vi. <span className={styles.methodName}>addLast(element):</span>
                        Adds a new element to the end of the list. <br/>
                        vii. <span className={styles.methodName}>removeFirst():</span>
                        Removes and returns the first element. <br/>
                        viii. <span className={styles.methodName}>removeLast():</span>
                        Removes and returns the last element. <br/>
                        ix. <span className={styles.methodName}>rotate():</span>
                        Moves the head one node forward (clockwise). <br/>
                        x. <span className={styles.methodName}>reverse():</span>
                        Moves the head one node backward (counterclockwise). <br/>
                    </span>

                    <br/><br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Circular Doubly Linked Lists are useful when bi-directional and cyclic navigation is needed.
                    Applications include media playlists, where both next and previous tracks are cycled, tab navigation
                    in browsers, undo-redo systems, circular buffers, and task scheduling systems where navigation both
                    forward and backward in a loop is required.

                </p>
            </div>
        </div>
    );

}