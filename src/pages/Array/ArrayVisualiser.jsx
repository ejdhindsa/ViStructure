import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import structureStyles from '../CSS/Structures.module.css';
import styles from "../CSS/Queue.module.css"; // can make Array.module.css later

export default function ArrayVisualiser() {
    const [array, setArray] = useState([]);
    const [sizeInput, setSizeInput] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [indexInput, setIndexInput] = useState("");

    const createArray = () => {
        const size = parseInt(sizeInput, 10);
        if (isNaN(size) || size <= 0 || size > 11) {
            alert("Please enter a valid size (1–11)");
            return;
        }
        setArray(new Array(size).fill(null));
        setSizeInput("");
    };

    const setValueAtIndex = () => {
        const index = parseInt(indexInput, 10);
        if (isNaN(index)) {
            // if no index is provided, fall back to add method
            addValue();
            return;
        }
        if (index < 0 || index >= array.length) {
            alert("Invalid index!");
            return;
        }
        const newArray = [...array];
        newArray[index] = valueInput;
        setArray(newArray);
        setIndexInput("");
        setValueInput("");
    };

    // 👇 new method: append to end
    const addValue = () => {
        const firstEmptyIndex = array.findIndex((el) => el === null);
        if (firstEmptyIndex === -1) {
            alert("Array is full! Cannot add more elements.");
            return;
        }
        const newArray = [...array];
        newArray[firstEmptyIndex] = valueInput;
        setArray(newArray);
        setValueInput("");
    };

    const clearArray = () => {
        setArray([]);
    };

    return (
        <div className={structureStyles.container}>
            <div className={structureStyles.controls}>
                <input
                    type="number"
                    value={sizeInput}
                    onChange={(e) => setSizeInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && createArray()}
                    placeholder="Array Size (Max 10)"
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

            {array.length > 0 && (
                <div className={structureStyles.controls}>
                    <input
                        type="number"
                        value={indexInput}
                        onChange={(e) => setIndexInput(e.target.value)}
                        placeholder="Index (optional)"
                        className={structureStyles.inputField}
                    />
                    <input
                        type="text"
                        value={valueInput}
                        onChange={(e) => setValueInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && setValueAtIndex()}
                        placeholder="Input (Max 7 chars.)"
                        maxLength={7}
                        className={structureStyles.inputField}
                    />
                    <button onClick={setValueAtIndex} className={structureStyles.addNode} type="button">
                        Set / Add
                    </button>
                </div>
            )}

            <div className={structureStyles.extraMethods}>
                <h3>Structure Information:</h3>
                <div className={structureStyles.methods}>
                    <p className={structureStyles.method}>length: {array.length}</p>
                    <p className={structureStyles.method}>
                        isEmpty(): {array.length > 0 ? "false" : "true"}
                    </p>
                </div>
            </div>

            <div className={styles.elementContainer}>
                <AnimatePresence>
                    {array.map((value, index) => (
                        <motion.div
                            key={index}
                            className={styles.elements}
                            initial={{ opacity: 0, y: -15, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={styles.element}>
                                <p>[{index}] &nbsp;</p>
                                <p>{value !== null ? [value + " "] : "-"}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
