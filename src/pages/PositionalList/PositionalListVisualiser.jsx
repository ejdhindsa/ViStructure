// PositionalListVisualiser.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import structureStyles from '../CSS/Structures.module.css';
import positionalStyles from "../CSS/PositionalList.module.css"

const nextAddress = (n) => {
    let s = "0x1";
    n += 1;
    while (n > 0) {
        const rem = (n - 1) % 26;
        s += String.fromCharCode(65 + rem);
        n = Math.floor((n - 1) / 26);
    }
    return s;
};

function PositionalBlock({ element }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className={positionalStyles.elementsWrapper}
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.45 }}
        >
            <div
                className={positionalStyles.elements}
                onClick={() => setIsFlipped(f => !f)}
            >
                <div className={positionalStyles.flipCard}>
                    <div
                        className={positionalStyles.flipCardInner}
                        style={{
                            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                        }}
                    >
                        <div className={positionalStyles.flipCardFront}>
                            Address: &nbsp;
                            <p className={positionalStyles.addressLabel}>{element.address}</p>
                        </div>
                        <div className={positionalStyles.flipCardBack}>
                            <p className={positionalStyles.backLine}><b></b> {element.value}</p>
                            <p className={positionalStyles.backLine}>
                                <span className={positionalStyles.backLineAddress}>
                                    Address: {element.address}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function PositionalListVisualiser() {
    const [list, setList] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [targetAddressInput, setTargetAddressInput] = useState("");

    const [nextAddrCount, setNextAddrCount] = useState(0);
    const [nextInsertionIndex, setNextInsertionIndex] = useState(0);
    const [beforeAfterResult, setBeforeAfterResult] = useState("");

    const findIndexByAddress = (addr) => list.findIndex((e) => e.address === addr);

    const isEmpty = () => list.length === 0;
    const size = () => list.length;
    const first = () => (isEmpty() ? null : list[0]);
    const last = () => (isEmpty() ? null : list[list.length - 1]);

    const addElementObject = (obj, position = "end", referenceAddress = null) => {
        setList((prev) => {
            const copy = [...prev];
            if (position === "start") copy.unshift(obj);
            else if (position === "end") copy.push(obj);
            else if (position === "before") {
                const idx = copy.findIndex((e) => e.address === referenceAddress);
                if (idx === -1) { alert(`Address ${referenceAddress} not found`); return prev; }
                copy.splice(idx, 0, obj);
            } else if (position === "after") {
                const idx = copy.findIndex((e) => e.address === referenceAddress);
                if (idx === -1) { alert(`Address ${referenceAddress} not found`); return prev; }
                copy.splice(idx + 1, 0, obj);
            }
            return copy;
        });
    };

    const addFirst = () => {
        if (!valueInput.trim()) return;
        const addr = nextAddress(nextAddrCount);
        const obj = { address: addr, value: valueInput, insertionIndex: nextInsertionIndex };
        setNextAddrCount(n => n + 1);
        setNextInsertionIndex(n => n + 1);
        addElementObject(obj, "start");
        setValueInput("");
    };

    const addLast = () => {
        if (!valueInput.trim()) return;
        const addr = nextAddress(nextAddrCount);
        const obj = { address: addr, value: valueInput, insertionIndex: nextInsertionIndex };
        setNextAddrCount(n => n + 1);
        setNextInsertionIndex(n => n + 1);
        addElementObject(obj, "end");
        setValueInput("");
    };

    const addBefore = () => {
        if (!valueInput.trim()) return;
        const ref = targetAddressInput.trim();
        if (!ref) { alert("Please supply a target address."); return; }
        const idx = findIndexByAddress(ref);
        if (idx === -1) { alert(`Address ${ref} not found`); return; }
        const addr = nextAddress(nextAddrCount);
        const obj = { address: addr, value: valueInput, insertionIndex: nextInsertionIndex };
        setNextAddrCount(n => n + 1);
        setNextInsertionIndex(n => n + 1);
        addElementObject(obj, "before", ref);
        setValueInput(""); setTargetAddressInput("");
    };

    const addAfter = () => {
        if (!valueInput.trim()) return;
        const ref = targetAddressInput.trim().toUpperCase();
        if (!ref) { alert("Please supply a target address."); return; }
        const idx = findIndexByAddress(ref);
        if (idx === -1) { alert(`Address ${ref} not found`); return; }
        const addr = nextAddress(nextAddrCount);
        const obj = { address: addr, value: valueInput, insertionIndex: nextInsertionIndex };
        setNextAddrCount(n => n + 1);
        setNextInsertionIndex(n => n + 1);
        addElementObject(obj, "after", ref);
        setValueInput(""); setTargetAddressInput("");
    };

    const setValueByAddress = () => {
        const ref = targetAddressInput.trim().toUpperCase();
        if (!ref) { alert("Please supply a target address."); return; }
        setList(prev => prev.map(e => e.address === ref ? { ...e, value: valueInput } : e));
        setValueInput(""); setTargetAddressInput("");
    };

    const removeByAddress = () => {
        const ref = targetAddressInput.trim().toUpperCase();
        if (!ref) { alert("Please supply a target address."); return; }
        setList(prev => prev.filter(e => e.address !== ref));
        setTargetAddressInput("");
    };

    const clearList = () => { setList([]); setNextAddrCount(0); setNextInsertionIndex(0); };

    return (
        <div className={structureStyles.container}>
            <div className={structureStyles.controls}>
                <input type="text" value={targetAddressInput}
                       onChange={e => setTargetAddressInput(e.target.value)}
                       placeholder="Address (optional)" className={structureStyles.inputField}
                />
                <input type="text" value={valueInput}
                       onChange={e => setValueInput(e.target.value)}
                       placeholder="Input" maxLength={12} className={structureStyles.inputField}
                       onKeyDown={(e) => e.key === "Enter" && addLast()}
                />
                <button onClick={addFirst} className={structureStyles.addNode}>addFirst()</button>
                <button onClick={addLast} className={structureStyles.addNode}>addLast()</button>
            </div>

            <div className={structureStyles.controls}>
                <button onClick={addBefore} className={structureStyles.addNode}>addBefore()</button>
                <button onClick={addAfter} className={structureStyles.addNode}>addAfter()</button>
                <button onClick={setValueByAddress} className={structureStyles.addNode}>set()</button>
                <button onClick={removeByAddress} className={structureStyles.clearButton}>remove()</button>
                {list.length > 0 && <button onClick={clearList} className={structureStyles.clearButton}>Clear</button>}
            </div>

            <div style={{ marginTop: "2rem" }}>
                <input
                    type="text"
                    placeholder="Address"
                    value={targetAddressInput}
                    onChange={(e) => setTargetAddressInput(e.target.value)}
                    className={structureStyles.inputField}
                />

                <button
                    onClick={() => {
                        const ref = targetAddressInput.trim();
                        const index = findIndexByAddress(ref);
                        if (index > 0) {
                            const beforeEl = list[index - 1];
                            setBeforeAfterResult(beforeEl.address);
                        } else {
                            setBeforeAfterResult("null");
                        }
                    }}
                    className={structureStyles.addNode}
                    style={{ marginLeft: "1rem" }}
                >
                    before()
                </button>

                <button
                    onClick={() => {
                        const ref = targetAddressInput.trim();
                        const index = findIndexByAddress(ref);
                        if (index !== -1 && index < list.length - 1) {
                            const afterEl = list[index + 1];
                            setBeforeAfterResult(afterEl.address);
                        } else {
                            setBeforeAfterResult("null");
                        }
                    }}
                    className={structureStyles.addNode}
                    style={{ marginLeft: "0.5rem" }}
                >
                    after()
                </button>

                <p style={{ marginTop: "4rem", fontSize: "1.5rem", marginBottom: "2rem", color:"#c69c72"}}>
                    Result: {beforeAfterResult}
                </p>
            </div>


            <div className={structureStyles.extraMethods}>
                <h3>Structure Information:</h3>
                <div className={structureStyles.methods}>
                    <p className={structureStyles.method}>size(): {size()}</p>
                    <p className={structureStyles.method}>isEmpty(): {isEmpty() ? "true" : "false"}</p>
                    <p className={structureStyles.method}>
                        first(): {first() ? `${first().address}` : "null"}
                    </p>
                    <p className={structureStyles.method}>
                        last(): {last() ? `${last().address}` : "null"}
                    </p>
                </div>
            </div>

            <div className={positionalStyles.elementContainer}>
                <AnimatePresence>
                    {list.map(el => <PositionalBlock key={el.address} element={el} />)}
                </AnimatePresence>
            </div>
        </div>
    );
}
