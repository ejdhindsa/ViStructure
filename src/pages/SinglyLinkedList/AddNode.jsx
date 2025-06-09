// import React's `useState` hook for state management
import {useState} from "react";
// import CSS module from the said directory
import styles from "../CSS/SinglyLinkedList.module.css"
import linkedListStyles from "../CSS/LinkedList.module.css"

export default function AddNode()
{
    // starting state initialisation
    // creates a state variable array called nodes and its updater function setNodes
    // initialises empty array [] in the useState()
    const [nodes, setNodes] = useState([]);
    const [inputValue, setInputValue] = useState("");       // for input field

    // adds to the beginning of the linked list
    const addFirstNode = () => {
        // if node is empty
        if (inputValue.trim() === "")
            return;

        // ...nodes spreads the existing nodes
        // adds new node object with date as id and userInput as value
        setNodes([{id: Date.now(), value: inputValue},
                ...nodes]);
        setInputValue('');
    } // end of addFirstNode()

    // adds to the end of the linked list
    const addLastNode = () => {                     // defines an addLastNode function
        // if node is empty
        if (inputValue.trim() === "")
            return;

        // ...nodes spreads the existing nodes
        // adds new node object with date as id and userInput as value
        setNodes([...nodes, {
            id: Date.now(), // sets the id to be current date so no duplicates
            value: inputValue // stores the custom value
        }]);
        setInputValue('');
    } // end of addLastNode()

    // clears the nodes and empties the current array of nodes
    const clearNodes = () => {
        setNodes([]);
    } // end of clearNodes()

return (
    <div className={linkedListStyles.container}>
        <div className={linkedListStyles.controls}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addLastNode()}
                placeholder="Node Value"
                className={linkedListStyles.inputField}
            />
            <button onClick={addFirstNode} className={linkedListStyles.addNode} type="button">
                Add First
            </button>
            <button onClick={addLastNode} className={linkedListStyles.addNode} type="button">
                Add Last
            </button>
            {nodes.length > 0 && (
                <button onClick={clearNodes} className={linkedListStyles.clearButton} type="button">
                    Clear Nodes
                </button>
            )}
        </div>

        <div className={styles.nodesContainer}>

            { /* Head Pointer */ }
            {nodes.length > 0 && (
                <div className={styles.headPointer}>
                    <span className={styles.headLabel}>
                        Head
                    </span>
                    <div className={styles.headArrow}>→</div>
                </div>
            )}

            {/* First node (if exists) */}
            {nodes.length > 0 && (
                <div className={styles.listNode}>
                    <div className={styles.valueBox}>{nodes[0].value}</div>
                    <div className={styles.pointerBox}>
                        {/* If only one node, show null in pointer box */}
                        {nodes.length === 1 && <span className={styles.nullNode}>∅</span> }
                    </div>
                </div>
            )}

            {/* Tail pointer for when there is only one node */}
            {nodes.length === 1 && (
                <div className={styles.tailPointer}>
                    <div className={styles.tailArrow}>←</div>
                    <span className={styles.tailLabel}>Tail</span>
                </div>
            )}


            {/* Remaining nodes with arrows */}
            {nodes.slice(1).map((node, index) => {
                // check if this is last element
                const isLast = index === nodes.slice(1).length - 1;
                return (
                    <div key={node.id} className={styles.arrowNodes}>
                        <div className={styles.arrow}>→</div>
                        <div className={styles.listNode}>
                            <div className={styles.valueBox}>{node.value}</div>
                            <div className={styles.pointerBox}>
                                {isLast && <span className={styles.nullNode}>∅</span>}
                            </div>
                        </div>

                        {/* TAIL POINTER: Only for the last node if more than one node */}
                        {nodes.length > 1 && isLast && (
                            <div className={styles.tailPointer}>
                                <div className={styles.tailArrow}>←</div>
                                <span className={styles.tailLabel}>Tail</span>
                            </div>
                        )}
                    </div>
                )
            })}

        </div>

    </div>

    ) // end of return()

} // end of AddNode()