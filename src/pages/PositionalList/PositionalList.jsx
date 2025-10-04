import {useEffect, useState} from "react"
import styles from "../CSS/tabs.module.css"
import PositionalListDescription from "./PositionalListDescription"
import Visualiser from "./PositionalListVisualiser"

export default function PositionalList()
{
    useEffect( () => {
        document.title = "Positional List - ViStructures";
    }, []) // end of useEffect

    const [activeTab, setActiveTab] = useState("description");

    return (
        <div>
            <div className={styles.header}>
                <h1>POSITIONAL LIST</h1>
            </div>

            <div className={styles.definition}>
                A positional list is a data structure that stores elements in linked nodes, accessed by position.
            </div>

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
            </div>

            {/* Conditional rendering for the buttons */}
            <div>
                {activeTab === "description" && <PositionalListDescription />}
                {activeTab === "visualiser" && <Visualiser />}
            </div>

        </div>
    ) // end of return

} // end of PositionalList