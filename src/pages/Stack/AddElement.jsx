import { useState } from 'react'
// import structure styles
import structureStyles from '../CSS/Structures.module.css'
import styles from "../CSS/Stack.module.css"

export default function AddElement()
{
    // using useState to create elements to be added in the stack
    const [elements, setElements] = useState([]);
    // using useState to get an inputValue
    const [inputValue, setInputValue] = useState("");

    const enqueue = () => {
        // return when the input is empty
        if (inputValue.trim() === "")
            return;

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
            <div className={structureStyles.controls}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && enqueue()}
                    placeholder="Element Name"
                    className={structureStyles.inputField}
                />
                <button onClick={enqueue} className={structureStyles.addNode} type="button">
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

            <div className={styles.elementContainer}>

                {elements.map((element, index) => {
                    return (
                        <div key={element.id} className={styles.elements}>
                            <div className={styles.element}>
                                {element.value}
                            </div>
                        </div>
                    ) // end of return
                })}

            </div>

        </div>
    ) // end of return

} // end of AddElement