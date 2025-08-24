// importing function to make up this page
import { useState } from 'react';
import NodeVisualiser from "./DLLVisualiser";
import CodeViewer from "./DLLCode";
import styles from "../CSS/tabs.module.css";
import DLLDescription from "./DLLDescription";

export default function DoublyLinkedList() {

    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>DOUBLY LINKED LIST</h1>
            </div>

            <div className={styles.definition}>
                A doubly linked list is a sequence of nodes where each node points to both its next and previous nodes,
                allowing traversal in both directions.
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
                {activeTab === "description" && <DLLDescription />}
                {activeTab === "code" && <CodeViewer />}
                {activeTab === "visualiser" && <NodeVisualiser />}
            </div>
        </div>
    ) // end of return

} // end of main function