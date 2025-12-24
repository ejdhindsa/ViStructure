import {useState} from "react";
import structureStyles from "../CSS/Structures.module.css"
import styles from "../CSS/PriorityQueue.module.css"

export default function UnsortedPQ()
{
    const [queue, setQueue] = useState([]);

    const [keyInput, setKeyInput] = useState("");
    const [valInput, setValInput] = useState("");

    // method to insert key-value pairs in the queue
    const insert = () => {
        if (!keyInput || !valInput) return;

        if (valInput.length > 5 ) {
            alert("The maximum length of value cannot exceed 5")
            return;
        }

        const newKey = parseInt(keyInput);

        setQueue([
            ...queue,
            { key: newKey, value: valInput }
        ]);

        setKeyInput("");
        setValInput("");
    } // end of insert

    // method to remove the minimum value
    const removeMin = () => {
        if (queue.length === 0) {
            alert("Queue is already empty!")
            return
        }

        let minIndex = 0
        let minValue = queue[0].key;

        for (let i = 0; i < queue.length; i++) {
            if (queue[i].key < minValue) {
                minIndex = i;
                minValue = queue[i].key;
            }
        } // end for

        setQueue(prevQueue => prevQueue.filter((_, index) => index !== minIndex));

    } // end of removeMin

    const findMinForDisplay = () => {
        if (queue.length === 0) return "null";
        let min = queue[0].key;
        for (let i = 1; i < queue.length; i++) {
            if (queue[i].key < min) min = queue[i].key;
        }
        return min;
    };

    const findMinValue = () => {
        if (queue.length === 0) return "null";
        let min = queue[0]
        for (let i = 0; i < queue.length; i++) {
            if(queue[i].key > min.key)
                min = queue[i];
        }

        return min.value;
    }

    return (
        <div className={structureStyles.container}>
            <h3 className={styles.queueHeader}>
                Unsorted Priority Queue
            </h3>

            <p className={styles.queueDescription}>
                An Unsorted Priority Queue is a simple implementation of the priority queue ADT. <br/>
                Instead of maintaining a heap or sorted order, elements are stored in a linear sequence (like a list)
                in the order they are inserted. <br/>This makes adding items very fast (O(1)), but finding or removing the
                highest priority item is slower (O(n)) because the entire list must be scanned.
            </p>

            {/* CONTROLS */}
            <div className={structureStyles.controls}>
                <input
                    className={structureStyles.inputField}
                    type="text"
                    placeholder="Key (Priority)"
                    value={keyInput}
                    onChange={(e) => setKeyInput(e.target.value)}
                />
                <input
                    className={structureStyles.inputField}
                    type="text"
                    placeholder="Value (Task)"
                    value={valInput}
                    onChange={(e) => setValInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && insert()}
                />

                <button className={structureStyles.addNode} onClick={insert}>
                    insert(k, v)
                </button>

                <button
                    className={structureStyles.addNode}
                    onClick={removeMin}
                    disabled={queue.length === 0}
                    style={queue.length === 0 ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                >
                    removeMin()
                </button>

                <button className={structureStyles.clearButton} onClick={() => setQueue([])}>
                    Clear
                </button>
            </div>

            {/* INFO PANEL */}
            <div className={structureStyles.extraMethods}>
                <h3>Queue Statistics</h3>
                <div className={structureStyles.methods}>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>size(): </span>
                        {queue.length}
                    </p>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>isEmpty(): </span>
                        {queue.length === 0 ? "true" : "false"}
                    </p>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>minKey(): </span>
                        {findMinForDisplay()}
                    </p>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>minValue(): </span>
                        {findMinValue()}
                    </p>
                </div>
            </div>

            <div className={styles.queue}>
                {queue.length === 0 ? (
                    <p style={{ color: "#666", marginTop: "1rem" }}>Queue is empty</p>
                ) : (
                    <div className={styles.nodes}>
                        {queue.map((item, index) => (
                            <div key={index} className={styles.node}>
                                <span className={styles.key}>{item.key} </span>
                                <span className={styles.value}> {item.value} </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )

} // end of UnsortedPQ
