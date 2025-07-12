import { useState } from "react";
import NodeVisualiser from "./StackVisualiser";
import StackDescription from "./StackDescription";
import CodeViewer from "./StackCode";
import styles from "../CSS/tabs.module.css"

export default function Stack()
{
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>STACK</h1>
            </div>

            <div className={styles.definition}>
                A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where elements
                are added and removed from the top.
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
                >
                    CODE
                </button>

            </div>

            {/* Conditional Rendering */}
            <div>
                {activeTab === "description" && <StackDescription />}
                {activeTab === "code" && <CodeViewer />}
                {activeTab === "visualiser" && <NodeVisualiser />}
            </div>
        </div>

    ) // end of return

} // end of stack