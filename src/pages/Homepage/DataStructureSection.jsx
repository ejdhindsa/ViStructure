import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PASSWORDS, UNLOCK_ORDER, STRUCTURE_INFO } from "../../components/constants";
import styles from "../CSS/homepage.module.css";

export default function DataStructuresSection() {
    const [password, setPassword] = useState("");
    const [unlockLevel, setUnlockLevel] = useState(0);

    useEffect(() => {
        const savedLevel = localStorage.getItem("structureLevel");
        if (savedLevel) setUnlockLevel(parseInt(savedLevel));
    }, []);

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        const matchedKey = Object.keys(PASSWORDS).find(k => PASSWORDS[k] === password);
        if (matchedKey) {
            const newLevel = UNLOCK_ORDER.indexOf(matchedKey) + 1;
            if (newLevel > unlockLevel) {
                setUnlockLevel(newLevel);
                localStorage.setItem("structureLevel", newLevel.toString());
            }
            setPassword("");
        } else {
            alert("Incorrect password");
        }
    };

    // Filter to only show unlocked items
    const unlockedItems = UNLOCK_ORDER.filter((key, index) => unlockLevel > index);

    // Group items into pairs for the two-column layout
    const rows = [];
    for (let i = 0; i < unlockedItems.length; i += 2) {
        rows.push(unlockedItems.slice(i, i + 2));
    }

    return (
        <>
            <div className={styles.structureHeader}>
                <form onSubmit={handlePasswordSubmit} className={styles.passwordForm}>
                    <input
                        type="text"
                        value={password}
                        placeholder="Enter Password..."
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.passwordInput}
                    />
                    <button type="submit" className={styles.passwordButton}>Unlock</button>
                </form>
            </div>

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