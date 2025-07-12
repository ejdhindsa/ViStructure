import styles from "../CSS/listDescription.module.css";


export default function StackDescription() {
    return (

        <div className={styles.description}>
            <div className={styles.descriptionText}>
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
                    This means the last element added to the stack is the first one to be removed. It can be visualized
                    like a stack of plates—new plates are added to the top and removed from the top. Stacks allow only
                    restricted access to elements: insertions and deletions are only allowed at one end, called the top.
                    <br/> <br/> <br/>
                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                            A STACK contains the following methods: <br/>
                            i. <span className={styles.methodName}>size():</span> Returns the size of the list. <br/>
                            ii. <span className={styles.methodName}>isEmpty():</span>
                                Returns true if the list is empty, false otherwise. <br/>
                            iii. <span className={styles.methodName}>push(element):</span>
                                Adds a new element to the top of the stack. <br/>
                            iv. <span className={styles.methodName}>pop():</span>
                                Removes and returns the top element from the stack. <br/>
                            v. <span className={styles.methodName}>top():</span>
                                Returns (but does not remove) the top element of the stack. <br/>
                        </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Stacks are widely used in computer science for their simplicity and efficiency in handling
                    reversible processes. Common use cases include undo-redo systems, function call stacks in
                    programming languages, backtracking algorithms, expression evaluation and syntax parsing, and
                    depth-first search (DFS) in graph traversal.
                </p>
            </div>
        </div>

    );
}