// import React's `useState` hook for state management
import {useState} from "react";
// importing refs to use reference of last and first node
import { useRef } from "react";
// importing effects to create a circular connection between nodes
import { useEffect } from "react";
// importing for animating nodes
import { motion, AnimatePresence } from "framer-motion";
// importing styles to create the nodes
import linkedListStyles from "../CSS/Structures.module.css";
import circularStyles from "../CSS/CircularlyLinkedList.module.css";
import styles from "../CSS/DoublyLinkedList.module.css";

export default function NodeAdder()
{
    // starting state initialisation
    // this creates a state variable array called nodes and its updater called setNodes
    // this initialises an empty array in the useState()
    const [nodes, setNodes] = useState([]);
    // sets state array called inputValue and setInputValue that takes input from user
    const [inputValue, setInputValue] = useState("");
    // stores the SVG path data for the circular arrow
    const [arrowPath, setArrowPath] = useState("");
    const [reverseArrowPath, setReverseArrowPath] = useState("");
    // stored bool if list is rotated or not
    const [isRotated, setIsRotated] = useState(false);
    // stores the true or false if the arrow head will be visible
    const [showArrowHead, setShowArrowHead] = useState(false);

    // initialisation of references
    const headRef = useRef(null);       // reference to the first node element
    const tailRef = useRef(null);       // reference to the last node element
    const containerRef = useRef(null);  // reference to the container holding all nodes

    // adds to the beginning of the linked list, after the header
    const addAtHeader = () => {
        // if the userInput is empty
        if (inputValue.trim() === "")
            return;                     // simply return as that is not a valid input

        // ...nodes spreads the existing node
        setNodes([{id: Date.now(), value: inputValue},
            ...nodes]);

        // resets the input value
        setInputValue("");

        // delay arrowhead visibility
        setShowArrowHead(false);
        setTimeout(() => setShowArrowHead(true), 950);

    } // end of addAtHeader()

    // adds to the end of the linked list, before the trailer
    const addAtTrailer = () => {
        // if the userInput is empty
        if (inputValue.trim() === "")
            return;                 // simply return as no input is invalid input

        setNodes([...nodes,
            {id: Date.now(), value: inputValue}])
        // resets all the input values
        setInputValue("");

        // delay arrowhead visibility
        setShowArrowHead(false);
        setTimeout(() => setShowArrowHead(true), 950);

    } // end of addAtTrailer()

    // rotate the nodes
    const rotateNodes = () => {
        // if there are no nodes in the list or just one node, return normally
        if (nodes.length <= 1)
            return;

        // create a copy of the nodes and acquire the value of the last nodes
        const newNodes = [...nodes];

        if (isRotated) {
            // Rotate clockwise: move last to front
            const lastValue = newNodes[newNodes.length - 1].value;

            for (let i = newNodes.length - 1; i > 0; i--)
            {
                newNodes[i].value = newNodes[i - 1].value;
            } // end of for
            newNodes[0].value = lastValue;
        } // end of if
        else {
            // Rotate counter-clockwise: move first to end
            const firstValue = newNodes[0].value;
            for (let i = 0; i < newNodes.length - 1; i++)
            {
                newNodes[i].value = newNodes[i + 1].value;
            } // end of for
            newNodes[newNodes.length - 1].value = firstValue;
        } // end of else

        // new the nodes to be the new nodes
        setNodes([...newNodes]);

    } // end of rotate

    // reverse the nodes
    const toggleRotationDirection = () => {
        setIsRotated(prev => !prev);
    };

    const clearNodes = () => {
        // clears the nodes now there are no nodes
        setNodes([]);
        setArrowPath("");
        setReverseArrowPath("");
    } // end of clearNodes


    // the following function calculates an SVG path for the calculation effect
    /* note for anyone who is looking at this code, please don't change any lines  in this
        function. All these calculations were very meticulously produced. However, if you do decide
        to change these lines, please update the counter below:

        HOURS WASTED ON SVG PATH CALCULATION = 07hrs
     */
    useEffect(() => {
        // the effect runs when there are changes in the dom
        // this if statement checks if head, tail and container refs are present otherwise exits
        // without creating any SVG path, i.e. an early exit
        if (!headRef.current || !tailRef.current || !containerRef.current)
            return;

        // gets bounding rectangle measurements for:
        const headBox = headRef.current.getBoundingClientRect();            // first node in the list
        const tailBox = tailRef.current.getBoundingClientRect();            // last node in the list
        const containerBox = containerRef.current.getBoundingClientRect();  // parent container holding all nodes

        // calculation of relative co-ordinates
        // startX/Y calculates the co-ordinates from the endpoint (tail node),
        // feel free to change the constants at the end since they change where the arrow originates
        const startX = tailBox.right - containerBox.left - 15;
        const startY = tailBox.top - containerBox.top + 25;

        // endX/Y calculates the co-ordinates to the startpoint (pseudo-head node)
        // feel free to change these constants as well if you feel so
        const endX = headBox.left - containerBox.left;
        const endY = headBox.top - containerBox.top + 20;

        // checks if there is only one node (for self reference in CLL)
        const isSelfLoop = nodes.length === 0;
        // stores the width of the tail node for self-loop calculations
        const nodeWidth = tailBox.width;

        // the following offset values define how curvier the arrows are, the first too are when there is
        // only one node and multi are for when there are multiple modes
        // feel free to play and find a suitable curve offset

        const loopOffsetX = 100; // wider horizontal stretch for self-loop
        const loopOffsetY = 180; // taller vertical stretch for self-loop

        const multiCurveOffsetX = -20; // wider horizontal stretch for multi-node curve
        const multiCurveOffsetY = 100; // taller vertical stretch for multi-node curve

        /* -------------------- SVG PATH CONSTRUCTION -------------------------
        The first parts creates an SVG path if there is only one node, a ternary operator checks if there is
        only one node or if there are multiple nodes. The arrow is scalable, i.e. it lengthens and shrinks depending
        on the number of nodes that are present in the node container reference (containerRef)
        `M`: Move to the starting point (declares the starting point) * DON'T CHANGE THIS *
        `C`: Cubic Bézier curve with:                                 * ONLY CHANGE IF YOU KNOW WHAT YOU ARE DOING *
            a. First control point
            b. Second control point
            c. End point

        Both these points are practically the same for single and multi-node list.
        -------------------------------------------------------------------- */
        const newPath = isSelfLoop
            ? `                     
            M ${startX} ${startY}
            C ${startX + loopOffsetX} ${startY + loopOffsetY},
              ${startX - nodeWidth - loopOffsetX} ${startY + loopOffsetY},
              ${endX} ${endY}
            `
            : `
            M ${startX} ${startY + 5}
            C ${startX + multiCurveOffsetX} ${startY + multiCurveOffsetY},
              ${endX - multiCurveOffsetX} ${endY + multiCurveOffsetY},
              ${endX + 10} ${endY + 5}
        `;

        // stores this constructed SVG path string in the state
        // also trigger re-render to display the updated arrow
        setArrowPath(newPath);

        // same code but for the reverse path
        const reversePath = isSelfLoop
            ? `
        M ${endX} ${endY}
        C ${endX + loopOffsetX} ${endY + loopOffsetY},
          ${endX - nodeWidth - loopOffsetX} ${endY - loopOffsetY},
          ${startX} ${startY}
        `
        : `
        M ${endX + 10} ${endY}
        C ${endX - multiCurveOffsetX} ${endY - multiCurveOffsetY},
          ${startX} ${startY - multiCurveOffsetY},
          ${startX} ${startY}
        `;

        setReverseArrowPath(reversePath);

    }, [nodes]); // end of useEffect()

    return (
        <div className={linkedListStyles.container}>
            <div className={linkedListStyles.controls}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addAtHeader()}
                    placeholder="Node Value"
                    className={linkedListStyles.inputField}
                />
                <button onClick={addAtHeader} className={linkedListStyles.addNode} type="button">
                    Add After Header
                </button>
                <button onClick={addAtTrailer} className={linkedListStyles.addNode} type="button">
                    Add Before Trailer
                </button>
                { nodes.length > 1 && (
                    <button onClick={rotateNodes} type="button" className={linkedListStyles.addNode}>
                        Rotate
                    </button>
                )}
                {nodes.length > 1 && (
                    <button onClick={toggleRotationDirection} type="button" className={linkedListStyles.addNode}>
                        Reverse ({isRotated ? "→" : "←"})
                    </button>
                )}
                {nodes.length > 0 && (
                    <button onClick={clearNodes} className={linkedListStyles.clearButton} type="button">
                        Clear
                    </button>
                )}
            </div>

            <div className={linkedListStyles.extraMethods}>
                <h3>Structure Information:</h3>
                <div className={linkedListStyles.methods}>
                    <p className={linkedListStyles.method}>
                        isEmpty(): {nodes.length > 0 ? "false" : "true"}
                    </p>
                    <p className={linkedListStyles.method}>
                        size(): {nodes.length}
                    </p>
                    <p className={linkedListStyles.method}>
                        first(): {nodes.length > 0 ? nodes[0].value : "null"}
                    </p>
                    <p className={linkedListStyles.method}>
                        last(): {nodes.length > 0 ? nodes[nodes.length - 1].value : "null"}
                    </p>
                </div>
            </div>

            <div
                className={styles.nodesContainer}
                ref={containerRef}
                style={{ position: "relative" }}
            >

                {nodes.map((node, index) => {
                    const isFirst = index === 0;
                    const isLast = index === nodes.length - 1;

                    return (
                        <div
                            key={node.id}
                            className={styles.listNode}
                            ref={el => {
                                if (isFirst) headRef.current = el;
                                if (isLast) tailRef.current = el;
                            }}
                        >
                            <AnimatePresence>
                                <motion.div
                                    className={styles.animationContainer}
                                    initial={{ opacity: 0, scale: 0.5, x: -50 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {!isFirst && (
                                        <div className={styles.beforeArrow}>←</div>
                                    )}
                                    <div className={styles.beforeNode}></div>
                                    <div className={styles.valueBox}>{node.value}</div>
                                    <div className={styles.afterNode}></div>
                                    {!isLast && (
                                        <div className={styles.afterArrow}>→</div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    )
                })}

                {arrowPath && (
                    <svg className={circularStyles.circularArrowSvg}>

                        <defs>
                            { showArrowHead && (
                                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="6" refY="2" orient="auto">
                                    <polygon points="0 0, 6 2, 0 6" fill="#d4d4d4" />
                                </marker>
                            )}
                        </defs>
                        <motion.path
                            key={arrowPath} // forces re-animation when path changes
                            d={arrowPath}
                            className={circularStyles.circularArrowPath}
                            markerEnd="url(#arrowhead)"
                            fill="transparent"
                            stroke="#d4d4d4"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        />
                    </svg>
                )}

                {reverseArrowPath && (
                    <svg className={circularStyles.circularArrowSvg}>
                        <defs>
                            {showArrowHead && (
                                <marker
                                    id="reverseArrowhead"
                                    markerWidth="6"
                                    markerHeight="6"
                                    refX="0"
                                    refY="2"
                                    orient="auto"
                                >
                                    <polygon points="6 0, 0 2, 6 6" fill="#d4d4d4" />
                                </marker>
                            )}
                        </defs>
                        <motion.path
                            key={reverseArrowPath}
                            d={reverseArrowPath}
                            className={circularStyles.circularArrowPath}
                            markerEnd="url(#reverseArrowhead)"
                            fill="transparent"
                            stroke="#d4d4d4"
                            strokeWidth="2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        />
                    </svg>
                )}
            </div>

        </div>
    ) // end of return

} // end of NodeAdder()