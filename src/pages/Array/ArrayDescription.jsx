import styles from "../CSS/listDescription.module.css";

export default function ArrayDescription() {

    return (

        <div className={styles.description}>
            <div className={styles.descriptionText} id="array-desc">
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    An array is a linear data structure that stores elements in contiguous memory locations.
                    Each element can be accessed directly using its <b>index</b>, which makes retrieval very fast.
                    The size of an array is fixed once it is created, meaning the number of elements cannot be changed dynamically.
                    Arrays are simple yet powerful, forming the basis of many other data structures.
                    <br/> <br/> <br/>

                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                        An Array contains the following common operations: <br/>
                        i. <span className={styles.methodName}>size():</span> Returns the number of elements in the array. <br/>
                        ii. <span className={styles.methodName}>isEmpty():</span>
                            Returns true if the array contains no elements, false otherwise. <br/>
                        iii. <span className={styles.methodName}>get(index):</span>
                            Returns the element at the specified index. <br/>
                        iv. <span className={styles.methodName}>set(index, element):</span>
                            Updates the element at the given index with a new value. <br/>
                        v. <span className={styles.methodName}>traverse():</span>
                            Iterates through the array to access each element in sequence. <br/>
                    </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Arrays are widely used when fast, random access to elements is needed.
                    They are ideal for scenarios such as storing collections of fixed size, implementing mathematical vectors or matrices,
                    managing lookup tables, and serving as the foundation for more advanced data structures like stacks, queues, and heaps.
                </p>
            </div>
        </div>
    );

} // end of ArrayDescription
