import styles from "../CSS/listDescription.module.css";

export default function CLLDescription() {

    return (

        <div className={styles.description}>
                <div className={styles.descriptionText} id="sll-desc">
                    <p>
                        <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                        A circular linked list is a special type of linked list where all nodes are connected in a
                        circle. Unlike a regular linked list, which ends with a node pointing to null, the last node in
                        a circular linked list points back to the first node. This allows continuous traversal without
                        reaching a null value.
                        <br/> <br/> <br/>
                        <div className={styles.descriptionHeader}> METHODS: <br/></div>
                        <span className={styles.methodsList}>
                            A Circular Linked List contains the following methods: <br/>
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
                            vii. <span className={styles.methodName}>rotate():</span>
                                Moves the first to the end of the list. <br/>
                        </span>
                        <br/> <br/>

                        <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                        The application of Circularly Linked Lists is quite useful when the data needs to be accessed
                        in a looping or a cyclic manner. The most common use cases involve operating systems process
                        scheduling, media player where playlists are looped infinitely, and in video games where player
                        turns need to continuously rotated.
                    </p>
                </div>
        </div>
    );
}