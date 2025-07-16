import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import structureStyles from '../CSS/Structures.module.css';
import styles from "../CSS/Queue.module.css";
import linkedListStyles from "../CSS/Structures.module.css";

export default function QueueVisualiser()
{
    // using useState to create elements to be added to the Queue
    const [ elements, setElements ] = useState([]);
    // using useState to get input from the user
    const [ inputValue, setInputValue ] = useState( "" );

    const enqueue = () => {
        // return if the inputValue is empty
        if (inputValue === "" )
            return

        if (elements.length >= 8) {
            alert("Maximum 8 elements allowed!")
            return;
        } // end of if

        setElements([{id: Date.now(), value: inputValue},
            ...elements]);

        // reset input value
        setInputValue("");
    } // end of enqueue

    const dequeue = () => {
        if (elements.length === 0)
            return;

        // create a set of new elements without the last element so that it has been dequeued
        const newElements = elements.splice(0, (elements.length - 1));
        setElements(newElements);

    } // end of dequeue

    const clearElements = () => {
        setElements([]);
    } // end of clearElements()

    return (
        <div className={structureStyles.container}>
            <div className={structureStyles.controls}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && enqueue()}
                    placeholder="Input (max 10 chars)"
                    maxLength={10}
                    className={structureStyles.inputField}
                />
                <button
                    onClick={enqueue}
                    className={structureStyles.addNode}
                    type="button"
                    disabled={elements.length >= 8}
                >
                    Enqueue
                </button>
                {elements.length > 0 && (
                    <button onClick={dequeue} className={structureStyles.addNode} type="button">
                        Dequeue
                    </button>
                )}
                {elements.length > 0 && (
                    <button onClick={clearElements} className={structureStyles.clearButton} type="button">
                        Clear
                    </button>
                )}
            </div>

            <div className={linkedListStyles.extraMethods}>
                <h3>Structure Information:</h3>
                <div className={linkedListStyles.methods}>
                    <p className={linkedListStyles.method}>isEmpty(): {elements.length > 0 ? "false" : "true"}</p>
                    <p className={linkedListStyles.method}>size(): {elements.length}</p>
                    <p className={linkedListStyles.method}>
                        first(): {elements.length > 0 ? elements[elements.length - 1].value : "null"}
                    </p>
                </div>

            </div>

            <div className={styles.elementContainer}>

                <AnimatePresence>
                    {elements.map((element) => {
                        return (
                            <motion.div
                                key={element.id}
                                className={styles.elements}
                                initial={{ opacity: 0, x: -15, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                                transition={{ duration: 0.2}}
                            >

                                <div className={styles.element}>
                                    {element.value}
                                </div>
                            </motion.div>
                        ) // end of return
                    })}
                </AnimatePresence>

            </div>

        </div>
    ); // end of return

} // end of QueueVisualiser()
