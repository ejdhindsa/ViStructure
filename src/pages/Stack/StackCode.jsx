import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "../CSS/code.module.css"

export default function CodeViewer() {

    const [copied, setCopied] = useState(false);

    const handleCodeCopy = async () => {
        try {
            await navigator.clipboard.writeText(javaCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after two seconds
        } // end of try
        catch (err) {
            console.error("Copy failed! : " + err);
        } // end of catch
    }

    const handleInterfaceCopy = async () => {
        try {
            await navigator.clipboard.writeText(interfaceCode);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // reset after two seconds
        } // end of try
        catch (err) {
            console.error("Copy failed! : " + err);
        } // end of catch
    }

    return (
        <div className={styles.container}>
            <div className={styles.nameSection}>
                <h2>Code: Stack Interface</h2>
                {/* Copy Button */}
                <button
                    onClick={handleInterfaceCopy}
                    style={{
                        transition: "0.3s ease-in-out",
                        position: 'relative',
                        top: "auto",
                        padding: '0.6rem 1.2rem',
                        fontSize: '1rem',
                        fontWeight: '500',
                        backgroundColor: copied ? '#c69c72' : '#4a4a4a',
                        color: '#f1fffa',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <div className={styles.codeSection}>
                <SyntaxHighlighter
                    language="java"
                    style={ vscDarkPlus }
                    showLineNumbers
                    wrapLines
                    customStyle={{
                        borderRadius: '0 0 20px 20px',
                        fontSize: '1.5rem',
                        padding: '1rem'
                    }}
                >
                    { interfaceCode }
                </SyntaxHighlighter>
            </div>

            <div className={styles.nameSection}>
                <h2>Code: Stack</h2>
                {/* Copy Button */}
                <button
                    onClick={handleCodeCopy}
                    style={{
                        transition: "0.3s ease-in-out",
                        position: 'relative',
                        top: "auto",
                        padding: '0.6rem 1.2rem',
                        fontSize: '1rem',
                        fontWeight: '500',
                        backgroundColor: copied ? '#c69c72' : '#4a4a4a',
                        color: '#f1fffa',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <div className={styles.codeSection}>
                <SyntaxHighlighter
                    language="java"
                    style={ vscDarkPlus }
                    showLineNumbers
                    wrapLines
                    customStyle={{
                        borderRadius: '0 0 20px 20px',
                        fontSize: '1.5rem',
                        padding: '1rem'
                    }}
                >
                    { javaCode }
                </SyntaxHighlighter>
            </div>
        </div>

    );

} // end of function

const interfaceCode = `public interface Stack<E> {
    /**
     * Returns the number of elements in the stack.
     * @return number of elements in the stack
     */
    int size();

    /**
     * Tests whether the stack is empty.
     * @return true if the stack is empty, false otherwise
     */
    boolean isEmpty();

    /**
     * Inserts an element at the top of the stack.
     * @param e   the element to be inserted
     */
    void push(E e);

    /**
     * Returns, but does not remove, the element at the top of the stack.
     * @return top element in the stack (or null if empty)
     */
    E top();

    /**
     * Removes and returns the top element from the stack.
     * @return element removed (or null if empty)
     */
    E pop();
}`;


const javaCode = `public class ArrayStack<E> implements Stack<E>
{
    // instance variables of the ArrayStack Class
    public static final int CAPACITY = 1000;    // default capacity of the stack
    private E[] data;                           // generic array used for storage
    private int index = -1;                     // index of the top element in the stack

    /**
     * No-argument constructor that creates an instance of the ArrayStack with a default
     * capacity of 1000
     */
    public ArrayStack() {this(CAPACITY); }

    /**
     * Full-argument constructor that creates an instance of the ArrayStack with the given
     * capacity. This requires casting as the field variable casting cannot be changed and
     * a new data type must be initialized.
     * @param capacity the capacity of the stack
     */
    public ArrayStack(int capacity) {
        data = (E[])  new Object[capacity];
    } // end of full-arg constructor

    /**
     * Method that returns the size of the stack
     * @return size of stack
     */
    public int size() {return (index + 1); }

    /**
     * Returns a boolean value if the stack is empty by checking if the size of the array
     * is -1
     * @return boolean true/false if array is empty
     */
    public boolean isEmpty() {return (index == -1);}

    /**
     * Method that pushes the provided parameter to the stack
     * @param element   the item to be pushed onto this stack.
     * @throws IllegalStateException If the stack is full
     */
    public void push(E element) throws IllegalStateException
    {
        if (size() == data.length)
            throw new IllegalStateException("Stack is full");
        data[++index] = element;            // increments index before adding new item
    } // end of push()

    /**
     * A method that returns the latest element in the stack
     * @return element on top of stack
     */
    public E top()
    {
        if (isEmpty())
            return null;
        return data[index];
    } // end of top()

    /**
     * Returns that value that was pushed last into the stack, i.e., the item
     * on top of the stack
     * @return item on top of the stack
     */
    public E pop()
    {
        if (isEmpty())
            return null;
        E answer = data[index];     // sets the data index and decrements the index
        data[index] = null;           // dereference to help with garbage collection
        index--;

        return answer;
    } // end of pop()

    /**
     * Creates a toString for the ArrayStack as required by the sample output using a String Builder and
     * returns the String to be printed
     * @return String as required by the output
     */
    @Override
    public String toString()
    {
        if (isEmpty())
            return "[]";

        StringBuilder sb = new StringBuilder();         // initializing a string builder to hold the string values

        sb.append("[");
        for (int i = 0; i < (index + 1); i++)
        {
            if (i != index)
                sb.append(data[i]).append(",");
            else
                sb.append(data[i]);
        } // end of for-each
        sb.append("]");

        return sb.toString();

    } // end of toString

} // end of class`;