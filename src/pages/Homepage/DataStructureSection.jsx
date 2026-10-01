import { Link } from "react-router-dom";
import { STRUCTURE_ORDER, STRUCTURE_INFO } from "../../components/constants";
import styles from "../CSS/homepage.module.css";

export default function DataStructuresSection() {
    // Group items into pairs for the two-column layout
    const rows = [];
    for (let i = 0; i < STRUCTURE_ORDER.length; i += 2) {
        rows.push(STRUCTURE_ORDER.slice(i, i + 2));
    }

    return (
        <>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.structureTiles}>
                    {row.map(key => {
                        const data = STRUCTURE_INFO[key];
                        return (
                            <div key={key} className={styles.tile}>
                                <Link to={data.path} className={styles.link}>
                                    <div className={styles.linkName}>{data.name}</div>
                                    <div className={styles.linkDescription}>{data.desc}</div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            ))}
            <div className={styles.bottom}></div>
        </>
    );
}