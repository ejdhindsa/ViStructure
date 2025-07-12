// import statements
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../CSS/SinglyLinkedList.module.css"
import linkedListStyles from "../CSS/Structures.module.css"

export default function AddNode()
{
    // starting state initialisation
    // creates a state variable array called nodes and its updater function setNodes
    // initialises empty array [] in the useState()
    const [nodes, setNodes] = useState([]);
    const [inputValue, setInputValue] = useState("");       // for input field
    // states for traversal
    const [currentIndex, setCurrentIndex] = useState(null);
    const [traversedNodes, setTraversedNodes] = useState([]);
    const [isTraversing, setIsTraversing] = useState(false);
    // new state for the snapshot of the list
    const [traverseSnapshot, setTraverseSnapshot] = useState([]);
    // state for pausing or continuing the traversal
    const [isPaused, setIsPaused] = useState(false);
    // Update all references of index inside useEffect and traverseNext
    const [traversalIndex, setTraversalIndex] = useState(0);


    // ref for controlling interval
    const intervalRef = useRef(null);

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

    const removeFirst = () => {
        if (nodes.length === 0)
            return;

        setNodes(prevNodes => prevNodes.slice(1));
    } // end of removeFirst()

    // function that starts traversing the list
    const traverseList = () => {
        if (nodes.length === 0)
            return;

        setTraverseSnapshot([...nodes]); // snapshot of nodes at the time
        setTraversedNodes([]);
        setTraversalIndex(0);
        setIsTraversing(true);
        setIsPaused(false);

    }; // end of traverseList

    // function that allows manually stepping forward
    const traverseNext = () => {
        if (traversalIndex < traverseSnapshot.length) {
            setTraversedNodes(t => [...t, traverseSnapshot[traversalIndex].value]);
            setCurrentIndex(traversalIndex);
            setTraversalIndex(prev => prev + 1);
        } // end of if
        else {
            setIsTraversing(false);
            setCurrentIndex(null);
        } // end of else

    }; // end of traverse next

    // function that allows manually stepping backwards
    const traversePrevious = () => {

        setTraversalIndex(prev => {
            const newIndex = Math.max(prev - 1, 0);
            setTraversedNodes(t => t.slice(0, newIndex));
            setCurrentIndex(newIndex);
            return newIndex;
        });

    }; // end of traversePrevious

    // toggles pause or play of the traversal
    const togglePause = () => {
        setIsPaused((prev) => !prev);
    } // end of toggle pause

    // instead of traversing directly in the traverseList method, list traverses here
    // this safeguards traverse list to from accessing nodes before they have been declared
    useEffect(() => {
        if (!isTraversing || traverseSnapshot.length === 0)
            return;

        const interval = setInterval(() => {

            // exits if the traversal is paused
            if (isPaused)
                return;

            // Guard clause — do nothing if out of bounds
            if (traversalIndex >= traverseSnapshot.length || !traverseSnapshot[traversalIndex]) {
                clearInterval(interval);
                setCurrentIndex(null);
                setIsTraversing(false);
                return;
            } // end of if

            // Safe access
            const currentNode = traverseSnapshot[traversalIndex];
            setTraversedNodes((prev) => [...prev, currentNode.value]);
            setCurrentIndex(traversalIndex);
            setTraversalIndex(prev => prev + 1); // Move to next node

        }, 1000);

        return () => clearInterval(interval);
    }, [isTraversing, traverseSnapshot, isPaused, traversalIndex]);

    // clears the nodes and empties the current array of nodes
    const clearNodes = () => {
        setNodes([]);                   // clears the linked list nodes
        setTraversedNodes([]);          // clears the traversal log
        setTraversalIndex(0);           // resets active index
        setIsTraversing(false);         // stop traversal if in progress
        setTraverseSnapshot([]);        // clear the snapshot as well
        setIsPaused(false);             // sets pause to false (play)
        clearInterval(intervalRef.current)    // clear interval
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
                <button onClick={removeFirst} className={linkedListStyles.addNode} type="button">
                    Remove First
                </button>
            )}
            {nodes.length > 0 && (
                <button onClick={clearNodes} className={linkedListStyles.clearButton} type="button">
                    Clear Nodes
                </button>
            )}
        </div>

        <div className={linkedListStyles.extraMethods}>
            <h3>Structure Information:</h3>
            <div className={linkedListStyles.methods}>
                <p className={linkedListStyles.method}>
                    isEmpty(): {nodes.length > 0 ? "false" : "true"}
                </p>
                <p className={linkedListStyles.method}>
                    size(): {nodes.length}
                </p>
                <p className={linkedListStyles.method}>
                    first(): {nodes.length > 0 ? nodes[0].value : "null"}
                </p>
                <p className={linkedListStyles.method}>
                    last(): {nodes.length > 0 ? nodes[nodes.length - 1].value : "null"}
                </p>
            </div>
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
                            className={`${isFirst ? styles.listNode : styles.arrowNodes}`}
                            initial={{ opacity: 0, x: -50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Optional Arrow for middle/last nodes */}
                            {!isFirst && <div className={styles.arrow}>→</div>}

                            <div className={styles.listNode}>
                                <div className={`${styles.valueBox}
                                                 ${index === currentIndex ? styles.activeNode : ""}`}
                                >
                                    {node.value}
                                </div>
                                <div className={`${styles.pointerBox}
                                                 ${index === currentIndex ? styles.activeNode : ""}`}>
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

        {/* Traversal Control Section */}
        <div className={linkedListStyles.traversalControls}>
            {nodes.length > 0 && !isTraversing && (
                <button onClick={traverseList} className={linkedListStyles.addNode} type="button">
                    Traverse
                </button>
            )}
            {isTraversing && (
                <button onClick={togglePause} type="button" className={linkedListStyles.addNode}>
                    {isPaused ? "Resume" : "Pause"}
                </button>
            )}
            {nodes.length > 0 && (
                <>
                    <button onClick={traversePrevious} className={linkedListStyles.addNode}>
                        Previous
                    </button>
                    <button onClick={traverseNext} className={linkedListStyles.addNode}>
                        Next
                    </button>
                </>
            )}

        </div>

        <AnimatePresence initial={false}>
            {nodes.length > 0 && (
                <div className={linkedListStyles.traversalLog}>
                    <h3>Traversal Order:</h3>
                    <div className={linkedListStyles.logNodes}>
                        {traversedNodes.map((node, index) => (
                            <motion.span
                                key={index}
                                className={linkedListStyles.logNode}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                {node}
                            </motion.span>
                        ))}
                    </div>
                </div>
            )}
        </AnimatePresence>

    </div>

    ) // end of return()

} // end of DLLVisualiser()