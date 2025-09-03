import {useEffect, useState} from "react"
import ArrayDescription from "./ArrayDescription"
import NodeVisualiser from "./ArrayVisualiser"
import styles from "../CSS/tabs.module.css"

export default function Array() {

    useEffect(() => {
        document.title = "Array - ViStructures";
    }, []);

    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>ARRAY</h1>
            </div>

            <div className={styles.definition}>
                An array is a linear data structure that stores elements in contiguous memory locations,
                allowing direct access to each element using an index. The size of an array is fixed once created.

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
                {activeTab === "description" && <ArrayDescription />}
                {activeTab === "visualiser" && <NodeVisualiser />}
            </div>
        </div>
    )

} // end of Queue function