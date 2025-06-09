// import React's `useState` hook for state management
import {useState} from "react";
// importing refs to use reference of last and first node
import { useRef } from "react";
// importing effects to create a circular connection between nodes
import { useEffect } from "react";
// importing styles to create the nodes
import linkedListStyles from "../CSS/LinkedList.module.css";
import styles from "../CSS/CircularlyLinkedList.module.css";

export default function NodeAdder()         // defines the main component function
{
    // starting state initialisation
    // this creates a state variable array called nodes and its updater called setNodes
    // this initialises an empty array in the useState()
    const [nodes, setNodes] = useState([]);
    // sets state array called inputValue and setInputValue that takes input from user
    const [inputValue, setInputValue] = useState("");
    // stores the SVG path data for the circular arrow
    const [arrowPath, setArrowPath] = useState("");

    // initialisation of references
    const headRef = useRef(null);       // reference to the first node element
    const tailRef = useRef(null);       // reference to the last node element
    const containerRef = useRef(null);  // reference to the container holding all nodes


    // adds to the beginning of the list (after the tail)
    const addAfterTail = () => {
        // if user input is empty, return
        if (inputValue.trim() === "")
            return;

        // ...nodes spread the existing nodes
        // adds new node object with date as id and userInput as its value
        setNodes([
            {id: Date.now(), value: inputValue},
                ...nodes]
        ); // end of setNodes()

        // resets the input button value
        setInputValue("");

    } // end of addAfterTail()

    // adds to the end of the list (at the tail)
    const addAtTail = () => {
        if (inputValue.trim() === "")
            return;

        // ...nodes spreads the existing nodes
        setNodes([...nodes, {
            id: Date.now(),
            value: inputValue}
        ]) // end of setNodes()

        // resets the input button value
        setInputValue("");

    } // end of addAtTail()

    // the following function rotates the nodes
    const rotateNodes = () => {
        // if there are no nodes in the list or just one node, return normally
        if (nodes.length <= 1)
            return;

        // create a copy of the nodes and acquire thee value on the last node
        const newNodes = [...nodes];
        const lastValue = newNodes[newNodes.length - 1].value;

        // shift values from the tail to the head
        for (let i = newNodes.length -1; i > 0; i--)
        {
            newNodes[i].value = newNodes[i - 1].value;
        } // end of for

        // apply the last value to the first node
        newNodes[0].value = lastValue;

        // new the nodes to be the new nodes
        setNodes([...newNodes]);

    } // end of rotateNodes()

    // clears all the nodes and empties the current array from the nodes
    const clearNodes = () => {
        setNodes([]);
        setArrowPath("");
    } // end of clearNodes()

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
        const isSingleNode = nodes.length === 1;
        // stores the width of the tail node for self-loop calculations
        const nodeWidth = tailBox.width;

        // the following offset values define how curvier the arrows are, the first too are when there is
        // only one node and multi are for when there are multiple modes
        // feel free to play and find a suitable curve offset

        const loopOffsetX = 100; // wider horizontal stretch for self-loop
        const loopOffsetY = 125; // taller vertical stretch for self-loop

        const multiCurveOffsetX = 120; // wider horizontal stretch for multi-node curve
        const multiCurveOffsetY = 150; // taller vertical stretch for multi-node curve

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
        const newPath = isSingleNode
            ? `                     
            M ${startX} ${startY}
            C ${startX + loopOffsetX - 50} ${startY + loopOffsetY},
              ${startX - nodeWidth - loopOffsetX + 50} ${startY + loopOffsetY - 20},
              ${endX } ${endY}
            `
            : `
            M ${startX} ${startY}
            C ${startX + multiCurveOffsetX} ${startY + multiCurveOffsetY},
              ${endX - multiCurveOffsetX} ${endY + multiCurveOffsetY},
              ${endX} ${endY}
        `;

        // stores this constructed SVG path string in the state
        // also trigger re-render to display the updated arrow
        setArrowPath(newPath);
    }, [nodes]); // end of useEffect()

    return (
        <div className={linkedListStyles.container}>
            <div className={linkedListStyles.controls}>
                { /*
                   React Input: value takes the input value.
                   On change fires when the input changes and then updates the state (inputValue) wherever
                   the user types.
                */ }
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addAtTail()}
                    placeholder="Node Value"
                    className={linkedListStyles.inputField}
                />

                { /* Adds a node after the tail (at the pseudo head) */}
                <button onClick={addAfterTail} className={linkedListStyles.addNode} type="button">
                    Add After Tail
                </button>

                { /* Adds a node at the tail */}
                <button onClick={addAtTail} className={linkedListStyles.addNode} type="button">
                    Add at Tail
                </button>

                { /* Rotates the nodes */ }
                { nodes.length > 1 && (
                    <button onClick={rotateNodes} className={linkedListStyles.addNode} type="button">
                        Rotate Nodes
                    </button>
                )}

                { /* Clears the nodes from the screen */ }
                {nodes.length > 0 && (
                    <button onClick={clearNodes} className={linkedListStyles.clearButton} type="button">
                        Clear Nodes
                    </button>
                )}
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
                            className={styles.arrowNodes}
                            ref={el => {
                                if (isFirst) headRef.current = el;
                                if (isLast) tailRef.current = el;
                            }}
                        >
                            <div className={styles.listNode}>
                                <div className={styles.valueBox}>{node.value}</div>
                                <div className={styles.pointerBox}></div>
                                {!isLast && <div className={styles.arrow}>→</div>}
                            </div>
                        </div>
                    );
                })}

                {arrowPath && (
                    <svg className={styles.circularArrowSvg}>
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="6" refY="2" orient="auto">
                                <polygon points="0 0, 6 2, 0 6" fill="#d4d4d4" />
                            </marker>
                        </defs>
                        <path
                            d={arrowPath}
                            className={styles.circularArrowPath}
                            markerEnd="url(#arrowhead)"
                        />
                    </svg>
                )}
            </div>

        </div>

    ); // end of return

} // end of NodeAdder()