import {useEffect, useState} from "react";
import TreeVisualiser from "./TreeVisualiser";
import TreeDescription from "./TreeDescription";
import styles from "../CSS/tabs.module.css";

export default function Tree()
{
    useEffect(() => {
        document.title = "Tree - ViStructures";
    }, []);

    const [activeTab, setActiveTab] = useState('description');

    return (
     <div>
         <div className={styles.header}>
             <h1>TREE</h1>
         </div>

         <div className={styles.definition}>
             A tree is a hierarchical data structure that organizes nodes in a parent-child relationship, starting from
             a single root node and branching outward without forming cycles.
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

         <div>
             {activeTab === "description" && <TreeDescription />}
             {activeTab === "visualiser" && <TreeVisualiser />}
         </div>

     </div>
    );


} // end of tree
