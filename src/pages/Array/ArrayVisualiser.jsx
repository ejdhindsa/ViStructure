import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import structureStyles from '../CSS/Structures.module.css';
import styles from "../CSS/Queue.module.css"; // you can make Array.module.css later

export default function ArrayVisualiser() {
    // array state initialized as empty
    const [array, setArray] = useState([]);
    // user input for array size
    const [sizeInput, setSizeInput] = useState("");
    // user input for setting values
    const [valueInput, setValueInput] = useState("");
    const [indexInput, setIndexInput] = useState("");

    const createArray = () => {
        const size = parseInt(sizeInput, 10);
        if (isNaN(size) || size <= 0 || size > 20) {
            alert("Please enter a valid size (1–20)");
            return;
        }
        setArray(new Array(size).fill(null));
        setSizeInput("");
    };

    const setValueAtIndex = () => {
        const index = parseInt(indexInput, 10);
        if (isNaN(index) || index < 0 || index >= array.length) {
            alert("Invalid index!");
            return;
        }
        const newArray = [...array];
        newArray[index] = valueInput;
        setArray(newArray);
        setIndexInput("");
        setValueInput("");
    };

    const clearArray = () => {
        setArray([]);
    };

    return (
        <div className={structureStyles.container}>
            <div className={structureStyles.controls}>
                {/* Step 1: Create array */}
                <input
                    type="number"
                    value={sizeInput}
                    onChange={(e) => setSizeInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && createArray()}
                    placeholder="Array Size"
                    className={structureStyles.inputField}
                />
                <button onClick={createArray} className={structureStyles.addNode} type="button">
                    Create Array
                </button>
                {array.length > 0 && (
                    <button onClick={clearArray} className={structureStyles.clearButton} type="button">
                        Clear
                    </button>
                )}
            </div>

            {/* Step 2: Set values */}
            {array.length > 0 && (
                <div className={structureStyles.controls}>
                    <input
                        type="number"
                        value={indexInput}
                        onChange={(e) => setIndexInput(e.target.value)}
                        placeholder="Index"
                        className={structureStyles.inputField}
                    />
                    <input
                        type="text"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && setValueAtIndex()}
                        placeholder="Value"
                        maxLength={10}
                        className={structureStyles.inputField}
                    />
                    <button onClick={setValueAtIndex} className={structureStyles.addNode} type="button">
                        Set
                    </button>
                </div>
            )}

            {/* Structure Information */}
            <div className={structureStyles.extraMethods}>
                <h3>Structure Information:</h3>
                <div className={structureStyles.methods}>
                    <p className={structureStyles.method}>length: {array.length}</p>
                    <p className={structureStyles.method}>
                        isEmpty(): {array.length > 0 ? "false" : "true"}
                    </p>
                </div>
            </div>

            {/* Array Display */}
            <div className={styles.elementContainer}>
                <AnimatePresence>
                    {array.map((value, index) => (
                        <motion.div
                            key={index}
                            className={styles.elements}
                            initial={{ opacity: 0, y: -15, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.element}>
                                <p>[{index}]</p>
                                <p>{value !== null ? value : "-"}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
