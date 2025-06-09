// import useState hook for state management
import { useState} from "react";
// import CSS modules to stylise
import linkedListStyles from "../CSS/LinkedList.module.css"
import styles from "../CSS/DoublyLinkedList.module.css"

export default function AddNode()
{
    // starting state initialisation
    // creates a state variable array called nodes and its updater setNNodes
    const [nodes, setNodes] = useState([]);
    // create a state that will hold userInput for values of the nodes
    const [inputValue, setInputValue] = useState("");

    // declaring functions that will add nodes in the DLL

    // adds to the beginning of the linked list, after the header
    const addAtHeader = () => {
        // if the userInput is empty
        if (inputValue.trim() === "")
            return;                     // simply return as that is not a valid input

        // ...nodes spreads the existing node
        setNodes([{id: Date.now(), value: inputValue},
            ...nodes]);

        // resets the input value
        setInputValue("");
    } // end of addAtHeader()

    // adds to the end of the linked list, before the trailer
    const addAtTrailer = () => {
        // if the userInput is empty
        if (inputValue.trim() === "")
            return;                 // simply return as no input is invalid input

        setNodes([...nodes,
            {id: Date.now(), value: inputValue}])
        // resets all the input values
        setInputValue("");
    } // end of addAtTrailer()

    const clearNodes = () => {
        // clears the nodes now there are no nodes
        setNodes([]);
    } // end of clearNodes

    return (
        <div className={linkedListStyles.container}>
            <div className={linkedListStyles.controls}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addAtHeader()}
                    placeholder="Node Value"
                    className={linkedListStyles.inputField}
                />
                <button onClick={addAtHeader} className={linkedListStyles.addNode} type="button">
                    Add After Header
                </button>
                <button onClick={addAtTrailer} className={linkedListStyles.addNode} type="button">
                    Add Before Trailer
                </button>
                {nodes.length > 0 && (
                    <button onClick={clearNodes} className={linkedListStyles.clearButton} type="button">
                        Clear Nodes
                    </button>
                )}
            </div>

            <div className={styles.nodesContainer}>

                <div className={styles.sentinel}>
                    <div className={styles.listNode}>
                        <div className={styles.beforeNode}>
                            <span className={styles.nullNode}>∅</span>
                        </div>
                        <div className={styles.valueBox}>Header</div>
                        <div className={styles.afterNode}></div>
                        <div className={styles.afterArrow}>→</div>
                    </div>
                </div>


                {nodes.map((node) => {

                    return (
                        <div className={styles.listNode}>
                            <div className={styles.beforeArrow}>←</div>
                            <div className={styles.beforeNode}></div>
                            <div className={styles.valueBox}>{node.value}</div>
                            <div className={styles.afterNode}></div>
                            <div className={styles.afterArrow}>→</div>
                        </div>
                    )
                })}

                <div className={styles.sentinel}>
                    <div className={styles.listNode}>
                        <div className={styles.beforeArrow}>←</div>
                        <div className={styles.beforeNode}>
                        </div>
                        <div className={styles.valueBox}>Trailer</div>
                        <div className={styles.afterNode}>
                            <span className={styles.nullNode}>∅</span>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    ) // end of return

} // end of AddNode