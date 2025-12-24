import { useState, useRef, useLayoutEffect, useMemo } from "react";
import structureStyles from "../CSS/Structures.module.css";
import styles from "../CSS/Trees.module.css";

const NODE_WIDTH = 60;
const NODE_HEIGHT = 50;
const NODE_SPACING = 80;
const LEVEL_HEIGHT = 120;

const useBinaryTree = () => {
    const [nodes, setNodes] = useState([]);

    const findNode = (id) => nodes.find((n) => n.id === id);
    const getRoot = () => nodes.find((n) => n.parent === null);

    const calculateDepth = (node) => {
        let depth = 0;
        let curr = node;
        while (curr && curr.parent) {
            curr = findNode(curr.parent);
            depth++;
        }
        return depth;
    };

    const calculateHeight = (node) => {
        if (!node) return -1;
        if (!node.left && !node.right) return 0;

        const leftChild = findNode(node.left);
        const rightChild = findNode(node.right);

        return 1 + Math.max(calculateHeight(leftChild), calculateHeight(rightChild));
    };

    const addNode = (value) => {
        if (!value.trim()) return;

        if (nodes.length === 0) {
            setNodes([{ id: Date.now(), value, parent: null, left: null, right: null }]);
            return;
        }

        const queue = [getRoot()];
        let targetParent = null;
        let side = null;

        while (queue.length) {
            const current = queue.shift();
            if (!current.left) { targetParent = current; side = "left"; break; }
            if (!current.right) { targetParent = current; side = "right"; break; }
            queue.push(findNode(current.left));
            queue.push(findNode(current.right));
        }

        if (!targetParent) return;

        const newNode = { id: Date.now(), value, parent: targetParent.id, left: null, right: null };

        setNodes(prev =>
            prev.map(n => n.id === targetParent.id ? { ...n, [side]: newNode.id } : n)
                .concat(newNode)
        );
    };

    const setNodeValue = (id, newValue) => {
        setNodes(prev => prev.map(n => n.id === id ? { ...n, value: newValue } : n));
    };

    const removeNode = (node) => {
        if (node.left || node.right) {
            alert("For this visualizer, please remove leaf nodes only.");
            return;
        }
        setNodes(prev =>
            prev.filter(n => n.id !== node.id)
                .map(n => {
                    if (n.left === node.id) return { ...n, left: null };
                    if (n.right === node.id) return { ...n, right: null };
                    return n;
                })
        );
    };

    const clear = () => setNodes([]);

    return {
        nodes, addNode, removeNode, setNodeValue, clear,
        findNode, getRoot, calculateDepth, calculateHeight
    };
};

export default function TreeVisualiser() {
    const {
        nodes, addNode, removeNode, setNodeValue, clear,
        findNode, getRoot, calculateDepth, calculateHeight
    } = useBinaryTree();

    const [inputValue, setInputValue] = useState("");
    const [selectedNodeId, setSelectedNodeId] = useState(null);
    const [canvasWidth, setCanvasWidth] = useState(800);
    const canvasRef = useRef(null);

    const selectedNode = findNode(selectedNodeId);
    const rootNode = getRoot();

    useLayoutEffect(() => {
        const updateWidth = () => {
            if (canvasRef.current) setCanvasWidth(canvasRef.current.clientWidth);
        };
        window.addEventListener("resize", updateWidth);
        updateWidth();
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const treeLayout = useMemo(() => {
        if (nodes.length === 0) return {};
        const positions = {};

        const assign = (node, depth, minX, maxX) => {
            if (!node) return;
            const x = (minX + maxX) / 2 - NODE_WIDTH / 2;
            const y = depth * LEVEL_HEIGHT;
            positions[node.id] = { x, y };

            if (node.left) {
                const leftNode = nodes.find(n => n.id === node.left);
                assign(leftNode, depth + 1, minX, x - NODE_SPACING);
            }
            if (node.right) {
                const rightNode = nodes.find(n => n.id === node.right);
                assign(rightNode, depth + 1, x + NODE_SPACING + NODE_WIDTH, maxX);
            }
        };

        assign(rootNode, 0, NODE_SPACING, canvasWidth - NODE_SPACING);
        return positions;
    }, [nodes, canvasWidth, rootNode]);

    const getSibling = (node) => {
        if (!node || !node.parent) return null;
        const parent = findNode(node.parent);
        if (!parent) return null;

        if (parent.left === node.id) return parent.right ? findNode(parent.right) : null;
        if (parent.right === node.id) return parent.left ? findNode(parent.left) : null;
        return null;
    };

    const handleUpdateValue = () => {
        if (selectedNode && inputValue) {
            setNodeValue(selectedNode.id, inputValue);
            setInputValue("");
        }
    };

    const handleAdd = () => {
        if (!inputValue.trim()) return;

        if (inputValue.length > 5) {
            setInputValue("");
            alert("Input length cannot be more than 5!")
            return;
        }

        if (nodes.length === 31) {
            setInputValue("");
            alert("You cannot add more than 15 nodes!");
            return;
        }
        addNode(inputValue);
        setInputValue("");
    };

    const breadthFirstOrder = useMemo(() => {
        if (!rootNode) return [];

        const queue = [rootNode];
        const visited = [];

        while (queue.length > 0) {
            const current = queue.shift();
            visited.push(current);

            if (current.left) {
                const leftNode = nodes.find(n => n.id === current.left);
                if (leftNode) queue.push(leftNode);
            }
            if (current.right) {
                const rightNode = nodes.find(n => n.id === current.right);
                if (rightNode) queue.push(rightNode);
            }
        }
        return visited;
    }, [nodes, rootNode]);

    const preOrderTraversal = useMemo(() => {
        if (!rootNode) return [];

        const visited = [];
        const traverse = (currentNode) => {
            if (!currentNode) return;
            visited.push(currentNode);

            if (currentNode.left) {
                const leftNode = nodes.find(n => n.id === currentNode.left);
                traverse(leftNode);
            }
            if (currentNode.right) {
                const rightNode = nodes.find(n => n.id === currentNode.right);
                traverse(rightNode);
            }
        };
        traverse(rootNode);
        return visited;
    }, [nodes, rootNode]);

    const inOrderTraversal = useMemo(() => {
        if (!rootNode) return [];

        const visited = [];
        const traverse = (currentNode) => {
            if (!currentNode) return;

            if (currentNode.left) {
                const leftNode = nodes.find(n => n.id === currentNode.left);
                traverse(leftNode);
            }
            visited.push(currentNode);
            if (currentNode.right) {
                const rightNode = nodes.find(n => n.id === currentNode.right);
                traverse(rightNode);
            }
        };
        traverse(rootNode);
        return visited;
    }, [nodes, rootNode]);

    const postOrderTraversal = useMemo(() => {
        if (!rootNode) return [];

        const visited = [];
        const traverse = (currentNode) => {
            if (!currentNode) return;

            if (currentNode.left) {
                const leftNode = nodes.find(n => n.id === currentNode.left);
                traverse(leftNode);
            }
            if (currentNode.right) {
                const rightNode = nodes.find(n => n.id === currentNode.right);
                traverse(rightNode);
            }
            visited.push(currentNode);
        };
        traverse(rootNode);
        return visited;
    }, [nodes, rootNode]);

    return (
        <div className={structureStyles.container}>
            <div className={structureStyles.controls}>
                <input
                    className={structureStyles.inputField}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Value"
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                />
                <button className={structureStyles.addNode} onClick={handleAdd}>
                    addNode()
                </button>
                <button
                    className={structureStyles.addNode}
                    onClick={handleUpdateValue}
                    disabled={!selectedNode}
                    title="Select a node first"
                >
                    set(p, e)
                </button>
                <button className={structureStyles.clearButton} onClick={clear}>
                    Clear
                </button>
            </div>

            <div className={structureStyles.extraMethods}>
                <h3>Structure Information</h3>

                <div className={structureStyles.methods} style={{ marginBottom: "2rem" }}>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>size(): </span>
                        {nodes.length}
                    </p>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>isEmpty(): </span>
                        {nodes.length === 0 ? "true" : "false"}
                    </p>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>height(): </span>
                        {rootNode ? calculateHeight(rootNode) : 0}
                    </p>
                    <p className={structureStyles.method}>
                        <span className={structureStyles.methodName}>root(): </span>
                        {rootNode ? rootNode.value : "null"}
                    </p>
                </div>

                {selectedNode ? (
                    <div style={{ borderTop: "1px solid #444", paddingTop: "1rem" }}>
                        <h4 style={{ color: "#c69c72", marginBottom: "1rem" }}>
                            Selected Position (p): {selectedNode.value}
                        </h4>
                        <div className={structureStyles.methods} style={{ flexWrap: "wrap", gap: "2rem" }}>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>isRoot(p): </span>
                                {selectedNode.parent === null ? "true" : "false"}
                            </p>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>isInternal(p): </span>
                                {selectedNode.left || selectedNode.right ? "true" : "false"}
                            </p>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>isExternal(p): </span>
                                {!selectedNode.left && !selectedNode.right ? "true" : "false"}
                            </p>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>depth(p): </span>
                                {calculateDepth(selectedNode)}
                            </p>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>parent(p): </span>
                                {selectedNode.parent ? findNode(selectedNode.parent)?.value : "null"}
                            </p>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>sibling(p): </span>
                                {getSibling(selectedNode) ? getSibling(selectedNode).value : "null"}
                            </p>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>left(p): </span>
                                {selectedNode.left ? findNode(selectedNode.left).value : "null"}
                            </p>
                            <p className={structureStyles.method}>
                                <span className={structureStyles.methodName}>right(p): </span>
                                {selectedNode.right ? findNode(selectedNode.right).value : "null"}
                            </p>
                        </div>
                    </div>
                ) : (
                    <p style={{ color: "#666", marginTop: "1rem" }}>
                        Select a node to view position-based methods (isInternal, depth, sibling, etc.)
                    </p>
                )}
            </div>

            <p style={{ color: "#888", marginBottom: "1rem" }}>
                Double click a leaf to remove(p). Click once to select as 'p'.
            </p>

            <div className={styles.treeCanvas} ref={canvasRef}>
                <svg className={styles.edgeLayer}>
                    {nodes.map(node => {
                        if (!node.parent) return null;
                        const start = treeLayout[node.parent];
                        const end = treeLayout[node.id];
                        if (!start || !end) return null;
                        return (
                            <line
                                key={`edge-${node.id}`}
                                x1={start.x + NODE_WIDTH / 2}
                                y1={start.y + NODE_HEIGHT}
                                x2={end.x + NODE_WIDTH / 2}
                                y2={end.y}
                                className={styles.edge}
                            />
                        );
                    })}
                </svg>

                {nodes.map((node) => {
                    const pos = treeLayout[node.id];
                    if (!pos) return null;
                    const isSelected = selectedNodeId === node.id;

                    return (
                        <div
                            key={node.id}
                            className={`
                                ${styles.treeNode}
                                ${node.parent === null ? styles.rootNode : ""}
                                ${!node.left && !node.right ? styles.leafNode : styles.internalNode}
                                ${isSelected ? styles.selectedNode : ""}
                            `}
                            style={{ left: pos.x, top: pos.y }}
                            onClick={() => setSelectedNodeId(node.id)}
                            onDoubleClick={() => removeNode(node)}
                        >
                            {node.value}
                        </div>
                    );
                })}
            </div>

            <div>
                {breadthFirstOrder.length === 0 ? (
                    <p className={styles.traversalHead}>Tree is empty</p>
                ) : (
                    <div>
                        <div className={structureStyles.logNodes}>
                            <p className={styles.traversalHead}>Breadth First Order:</p>
                            {breadthFirstOrder.map((node, index) => (
                                <span key={node.id} className={styles.traversedNodes}>
                                    {node.value}{index < breadthFirstOrder.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </div>

                        <div className={structureStyles.logNodes}>
                            <p className={styles.traversalHead}>Pre Order:</p>
                            {preOrderTraversal.map((node, index) => (
                                <span key={node.id} className={styles.traversedNodes}>
                                    {node.value}{index < preOrderTraversal.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </div>

                        <div className={structureStyles.logNodes}>
                            <p className={styles.traversalHead}>In Order:</p>
                            {inOrderTraversal.map((node, index) => (
                                <span key={node.id} className={styles.traversedNodes}>
                                    {node.value}{index < inOrderTraversal.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </div>

                        <div className={structureStyles.logNodes}>
                            <p className={styles.traversalHead}>Post Order:</p>
                            {postOrderTraversal.map((node, index) => (
                                <span key={node.id} className={styles.traversedNodes}>
                                    {node.value}{index < postOrderTraversal.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}