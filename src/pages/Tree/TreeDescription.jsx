import styles from "../CSS/listDescription.module.css"

export default function TreeDescription() {
    return (
        <div className={styles.description}>
            <div className={styles.descriptionText}>
                <p>
                    <div className={styles.descriptionHeader}> DESCRIPTION: <br/></div>
                    A tree is a hierarchical data structure consisting of nodes connected by edges.
                    Unlike linear structures (like arrays or stacks), trees organize data in a parent-child relationship,
                    starting from a unique root node and branching outward without forming cycles.
                    It is ideal for representing hierarchical data where elements have ancestors and descendants.
                    <br/> <br/> <br/>
                    <div className={styles.descriptionHeader}> METHODS: <br/></div>
                    <span className={styles.methodsList}>
                    A TREE contains the following methods: <br/>
                    i. <span className={styles.methodName}>size():</span> Returns the number of nodes in the tree. <br/>
                    ii. <span className={styles.methodName}>isEmpty():</span> Returns true if the tree has no nodes. <br/>
                    iii. <span className={styles.methodName}>isRoot(p):</span> Returns true if position p is the root. <br/>
                    iv. <span className={styles.methodName}>isInternal(p):</span> Returns true if p has at least one child. <br/>
                    v. <span className={styles.methodName}>isExternal(p):</span> Returns true if p has no children (is a leaf). <br/>
                    vi. <span className={styles.methodName}>root():</span> Returns the position of the tree's root. <br/>
                    vii. <span className={styles.methodName}>parent(p):</span> Returns the position of the parent of p. <br/>
                    viii. <span className={styles.methodName}>left(p):</span> Returns the position of the left child of p. <br/>
                    ix. <span className={styles.methodName}>right(p):</span> Returns the position of the right child of p. <br/>
                    x. <span className={styles.methodName}>sibling(p):</span> Returns the position of the sibling of p. <br/>
                    xi. <span className={styles.methodName}>addRoot(e):</span> Creates a root for an empty tree with element e. <br/>
                    xii. <span className={styles.methodName}>addLeft(p, e):</span> Adds a new node with element e as the left child of p. <br/>
                    xiii. <span className={styles.methodName}>set(p, e):</span> Replaces the element at position p with e. <br/>
                    xiv. <span className={styles.methodName}>remove(p):</span> Removes the node at position p from the tree. <br/>
                    xv. <span className={styles.methodName}>depth(p):</span> Returns the number of ancestors of p. <br/>
                    xvi. <span className={styles.methodName}>height():</span> Returns the height of the tree (max depth). <br/>
                </span>
                    <br/> <br/>

                    <div className={styles.descriptionHeader}> USE CASES: <br/></div>
                    Trees are fundamental in computer science for organizing hierarchical data.
                    Common use cases include file systems (directories and files), the Document Object Model (DOM)
                    in web development, routing algorithms, decision-making processes in AI (Decision Trees), and
                    parsing syntax in compilers.
                </p>
            </div>
        </div>
    );
}