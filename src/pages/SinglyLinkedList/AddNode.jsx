// import React's `useState` hook for state management
import {useState} from "react";
// import for animating nodes
import { motion, AnimatePresence } from "framer-motion";
// import CSS module from the said directory
import styles from "../CSS/SinglyLinkedList.module.css"
import linkedListStyles from "../CSS/Structures.module.css"

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


            <AnimatePresence initial={false}>
                {nodes.length > 0 && (
                    <motion.div
                        className={styles.headPointer}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className={styles.headLabel}>Head</span>
                        <div className={styles.headArrow}>→</div>
                    </motion.div>
                )}

                {nodes.map((node, index) => {
                    const isFirst = index === 0;
                    const isLast = index === nodes.length - 1;

                    return (
                        <motion.div
                            key={node.id}
                            className={isFirst ? styles.listNode : styles.arrowNodes}
                            initial={{ opacity: 0, x: -50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 50, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Optional Arrow for middle/last nodes */}
                            {!isFirst && <div className={styles.arrow}>→</div>}

                            <div className={styles.listNode}>
                                <div className={styles.valueBox}>{node.value}</div>
                                <div className={styles.pointerBox}>
                                    {(isLast) && <span className={styles.nullNode}>∅</span>}
                                </div>
                            </div>

                            {/* TAIL POINTER: Only for the last node */}
                            {isLast && (
                                <motion.div
                                    className={styles.tailPointer}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={styles.tailArrow}>←</div>
                                    <span className={styles.tailLabel}>Tail</span>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </AnimatePresence>

        </div>

    </div>

    ) // end of return()

} // end of AddNode()