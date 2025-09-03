import {useEffect, useState} from "react";
import NodeVisualiser from "./CLLVisualiser";
import CLLDescription from "./CLLDescription"
import CodeViewer from "./CLLCode";
import styles from "../CSS/tabs.module.css"

export default function CircularlyLinkedList() {

    useEffect(() => {
        document.title = "CLL - ViStructures";
    }, []);

    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>CIRCULARLY LINKED LIST</h1>
            </div>

            <div className={styles.definition}>
                A circularly linked list is a sequence of nodes where each node points to the next, and the last node
                points back to the head, forming a circle.
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
                {activeTab === "description" && <CLLDescription />}
                {activeTab === "code" && <CodeViewer />}
                {activeTab === "visualiser" && <NodeVisualiser />}
            </div>
        </div>
    )
}