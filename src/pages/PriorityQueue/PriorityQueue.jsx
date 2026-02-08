import {useEffect, useState} from "react";
import PQDescription from "./PQDescription"
import UnsortedPQ from "./UnsortedPQ"
import styles from "../CSS/tabs.module.css";

export default function PriorityQueue()
{
    useEffect(() => {
        document.title = "Priority Queue - ViStructures";
    }, []);

    const [activeTab, setActiveTab] = useState('description');

    return (
        <div>
            <div className={styles.header}>
                <h1>Priority Queues</h1>
            </div>

            <div className={styles.definition} style={{padding: "5rem 15rem"}}>
                A priority queue is an abstract data type that manages a collection of elements where each element has
                an associated priority, and elements are served based on that priority rather than their order of
                insertion.
            </div>

            <div className={styles.container}>
                <button
                    onClick={() => setActiveTab("description")}
                    className={styles.tab}
                >
                    DESCRIPTION
                </button>

                <button
                    onClick={() => setActiveTab("unsortedPQ")}
                    className={styles.tab}
                >
                    UNSORTED PQ
                </button>

            </div>

            <div>
                {activeTab === "description" && <PQDescription />}
                {activeTab === "unsortedPQ" && <UnsortedPQ />}
            </div>

        </div>
    );


} // end of tree
