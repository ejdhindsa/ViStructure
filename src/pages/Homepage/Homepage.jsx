import styles from '../CSS/homepage.module.css'
import LinkedLists from "./DataStructureSection"

export default function Homepage() {
    return (
        <div className={styles.homepage}>
            <div className={styles.hero}>
                <h1>Visual Representation of Data Structures</h1>
                <p>
                    Data Structures are one of the most important as well as one of the most difficult
                    entities to understand in computer science. It is important to understand that they
                    make up a bulkier portion of Computer Science degrees. Already being hard to understand,
                    it is  difficult to visually represent them merely on paper and learning boards.
                    Therefore, this is a meagre attempt to cast these structures to life and help understand
                    how different operations are performed on different data structures.
                </p>
            </div>
            <div className={styles.mainDivision}>
                <div className={styles.subDivisionOne}>
                    <h2>What are Data Structures?</h2>
                </div>
                <div className={styles.subDivisionTwo}>
                    <p>
                        According to Geeks-for-Geeks, "<em>A data structure is a way of organizing and storing data in
                        a computer so that it can be accessed and used efficiently. It refers to the logical or
                        mathematical representation of data, as well as the implementation in a computer program</em>".
                        That is, data structures make accessing and using of data simpler and efficient.
                    </p>
                </div>
            </div>
            <LinkedLists />
        </div>
    ) // end of return
} // end of Homepage