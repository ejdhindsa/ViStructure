import { useState } from 'react';
// importing framer motion to animate
import { motion, AnimatePresence } from 'framer-motion';
// import structure styles
import structureStyles from '../CSS/Structures.module.css';
import styles from "../CSS/Stack.module.css";
import linkedListStyles from "../CSS/Structures.module.css";

export default function StackVisualiser()
{
    // using useState to create elements to be added in the stack
    const [elements, setElements] = useState([]);
    // using useState to get an inputValue
    const [inputValue, setInputValue] = useState("");

    const enqueue = () => {
        // return when the input is empty
        if (inputValue.trim() === "")
            return;

        if (elements.length >= 10)
        {
            alert("Maximum 10 elements allowed!");
            return;
        } // end of if

        // create the array of elements
        setElements([{id: Date.now(), value: inputValue},
            ...elements]);

        // resets the input value
        setInputValue("");

    } // end of enqueue

    const dequeue = () => {
        // return if there is nothing to dequeue
        if (elements.length === 0)
            return;

        const newElements = elements.slice(1);

        // create the array of elements
        setElements(newElements);

    } // end of dequeue

    const clearElements = () => {
        setElements([]);
    } // end of clearElements()

    return (
        <div className={structureStyles.container}>

            <div className={linkedListStyles.extraMethods}>
                <h3>Structure Information:</h3>
                <div className={linkedListStyles.methods}>
                    <p className={linkedListStyles.method}>isEmpty(): {elements.length > 0 ? "false" : "true"}</p>
                    <p className={linkedListStyles.method}>size(): {elements.length}</p>
                    <p className={linkedListStyles.method}>top(): {elements.length > 0 ? elements[0].value : "null"}</p>
                </div>
            </div>

            <div className={structureStyles.controls}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && enqueue()}
                    placeholder="Input (max 15 chars)"
                    maxLength={15}
                    className={structureStyles.inputField}
                />
                <button
                    onClick={enqueue}
                    className={structureStyles.addNode}
                    type="button"
                    disabled={elements.length >= 10}
                >
                    Push
                </button>
                {elements.length > 0 && (
                    <button onClick={dequeue} className={structureStyles.addNode} type="button">
                        Pop
                    </button>
                )}
                {elements.length > 0 && (
                    <button onClick={clearElements} className={structureStyles.clearButton} type="button">
                        Clear
                    </button>
                )}
            </div>

            <div className={styles.elementContainer}>

                <AnimatePresence>
                    {elements.map((element) => {
                        return (
                            <motion.div
                                key={element.id}
                                className={styles.elements}
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -100 }}
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
    ) // end of return

} // end of QueueVisualiser