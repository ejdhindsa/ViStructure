import styles from "../CSS/listDescription.module.css";

export default function PositionalListDescription() {

    return (

        <div className={styles.description}>
            <div className={styles.descriptionText} id="positional-list-desc">
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A Positional List is a linear data structure that stores elements in a sequence using <b>positions</b>,
                    which act as abstract references to elements rather than numeric indices.
                    Unlike arrays or indexed lists, a positional list allows navigation using relative access—
                    such as moving to the <b>first</b>, <b>last</b>, <b>before</b>, or <b>after</b> a given position.
                    This makes it highly flexible for insertions and deletions at arbitrary locations without shifting
                    elements.
                    <br/> <br/> <br/>

                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                        <span className={styles.methodsList}>
                            A Positional List contains the following common operations: <br/>
                            i. <span className={styles.methodName}>first():</span>
                                Returns the first position in the list, or null if the list is empty. <br/>
                            ii. <span className={styles.methodName}>last():</span>
                                Returns the last position in the list, or null if the list is empty. <br/>
                            iii. <span className={styles.methodName}>before(p):</span>
                                Returns the position immediately before position <b>p</b>, or null if <b>p</b> is the first. <br/>
                            iv. <span className={styles.methodName}>after(p):</span>
                                Returns the position immediately after position <b>p</b>, or null if <b>p</b> is the last. <br/>
                            v. <span className={styles.methodName}>isEmpty():</span>
                                Returns true if the list contains no elements, false otherwise. <br/>
                            vi. <span className={styles.methodName}>size():</span>
                                Returns the number of elements in the list. <br/>
                            vii. <span className={styles.methodName}>addFirst(e):</span>
                                Inserts element <b>e</b> at the front of the list and returns its position. <br/>
                            viii. <span className={styles.methodName}>addLast(e):</span>
                                Inserts element <b>e</b> at the end of the list and returns its position. <br/>
                            ix. <span className={styles.methodName}>addBefore(p, e):</span>
                                Inserts element <b>e</b> before position <b>p</b> and returns the new position. <br/>
                            x. <span className={styles.methodName}>addAfter(p, e):</span>
                                Inserts element <b>e</b> after position <b>p</b> and returns the new position. <br/>
                            xi. <span className={styles.methodName}>set(p, e):</span>
                                Replaces the element at position <b>p</b> with <b>e</b>, returning the old element. <br/>
                            xii. <span className={styles.methodName}>remove(p):</span>
                                Removes and returns the element at position <b>p</b>. <br/>
                        </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Positional Lists are ideal when frequent insertions and deletions occur in the middle of a sequence.
                    They are commonly used in applications like text editors, undo/redo systems, playlist management,
                    and any scenario where navigation relative to specific positions is more natural than using numeric
                    indices.
                </p>
            </div>
        </div>

    );

} // end of ArrayDescription
