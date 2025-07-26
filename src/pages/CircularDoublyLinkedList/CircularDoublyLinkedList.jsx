import { useState } from "react";
import NodeVisualiser from "./CDLLVisualiser";
import CDLLDescription from "./CDLLDescription";
import styles from "../CSS/tabs.module.css"

export default function CircularDoublyLinkedList()
{
    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>CIRCULAR DOUBLY LINKED LIST</h1>
            </div>

            <div className={styles.definition}>
                A circular doubly linked list is a sequence of nodes where each node points to both its next and
                previous nodes, and the first and last nodes are connected, forming a closed loop.
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

                {/*
                <button
                    onClick={() => setActiveTab("code")}
                    className={styles.tab}
                >
                    CODE
                </button>
                */}

            </div>

            {/* Conditional Rendering */}
            <div>
                {activeTab === "description" && <CDLLDescription /> }
                {activeTab === "visualiser" && <NodeVisualiser />}
            </div>

        </div>

    ) // end of return

} // end of function