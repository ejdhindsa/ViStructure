import { useState } from "react"
import QueueDescription from "./QueueDescription"
import NodeVisualiser from "./QueueVisualiser"
import CodeViewer from "./QueueCode"
import styles from "../CSS/tabs.module.css"

export default function Queue() {
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>QUEUE</h1>
            </div>

            <div className={styles.definition}>
                A queue is a linear data structure that follows the First In, First Out (FIFO) principle, where elements
                are added at the rear and removed from the front.
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
                {activeTab === "description" && <QueueDescription />}
                {activeTab === "code" && <CodeViewer />}
                {activeTab === "visualiser" && <NodeVisualiser />}
            </div>
        </div>
    )

} // end of Queue function