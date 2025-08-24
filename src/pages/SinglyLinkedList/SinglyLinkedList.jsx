import { useState } from "react";
import NodeVisualiser from './SLLVisualiser'
import SLLDescription from './SLLDescription'
import styles from "../CSS/tabs.module.css"

export default function SinglyLinkedList() {

    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>SINGLY LINKED LIST</h1>
            </div>

            <div className={styles.definition}>
                A singly linked list is a sequence of nodes where each node points to the next, and the last node points
                to null, marking the end of the list.
            </div>

            {/* Tabs */}
            <div className={styles.container}>
                <button
                    onClick={() => setActiveTab("description")}
                    className={styles.tab}
                >
                    DESCRIPTION
                </button>
                <button
                    onClick={() => setActiveTab("visualiser")}
                    className={styles.tab}
                >
                    VISUALISER
                </button>
                <button
                    onClick={() => setActiveTab("code")}
                    className={styles.tab}
                    hidden
                >
                    CODE
                </button>

            </div>

            {/* Conditional Rendering */}
            <div>
                {activeTab === "description" && <SLLDescription />}
                {activeTab === "visualiser" && <NodeVisualiser />}
            </div>
        </div>
    )

} // end of th function