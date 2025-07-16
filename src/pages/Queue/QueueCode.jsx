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
                <h2>Code: Queue Interface</h2>
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
                <h2>Code: Queue</h2>
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

const interfaceCode = `public interface Queue<E> {
    /**
     * Returns the number of elements in the queue.
     * @return number of elements in the queue
     */
    int size();

    /**
     * Tests whether the queue is empty.
     * @return true if the queue is empty, false otherwise
     */
    boolean isEmpty();

    /**
     * Inserts an element at the rear of the queue.
     * @param e  the element to be inserted
     */
    void enqueue(E e);

    /**
     * Returns, but does not remove, the first element of the queue.
     * @return the first element of the queue (or null if empty)
     */
    E first();

    /**
     * Removes and returns the first element of the queue.
     * @return element removed (or null if empty)
     */
    E dequeue();
}`;


const javaCode = `public class ArrayQueue<E> implements Queue<E>
{
    // NOTE:
    // This class has not been documented as it was provided with the lecture notes
    // and simply is a direct copy-paste of the provided code

    // instance variable of ArrayQueue
    private static final int CAPACITY = 1000;
    private E[] data;
    private int front = 0;
    private int size = 0;

    public ArrayQueue()
    {
        this(CAPACITY);
    } // end of no arg constructor

    public ArrayQueue(int capacity)
    {
        data = (E[]) new Object[capacity];
    } // end of full-arg constructor

    public int size()
    {
        return size;
    } // end of size()

    public boolean isEmpty()
    {
        return size == 0;
    } //  end of isEmpty()

    public void enqueue(E element) throws IllegalStateException
    {
        if (size == data.length)
            throw new IllegalStateException("Queue is full");

        int avail = (front + size) % data.length;
        data[avail] = element;
        size++;

    } // end of enqueue

    public E first()
    {
        if (isEmpty())
            return null;
        return data[front];
    } // end of first

    public E dequeue()
    {
        if (isEmpty())
            return null;

        E answer = data[front];
        data[front] = null;
        front = (front + 1) % data.length;
        size--;

        return answer;

    } // end of dequeue

    @Override
    public String toString()
    {
        // creating an instance of StringBuilder
        StringBuilder sb = new StringBuilder();

        sb.append("[");
        // using a for loop to print everything
        for(int i = 0; i < size; i++)
        {
            // this appends the data into the queue while also considering the rotating effect that
            // the queue has
            sb.append(data[(front + i) % data.length]);

            if (i < size - 1)
                sb.append(", ");            // only append if not the last element

        } // end of for loop
        sb.append("]");

        return sb.toString();

    } // end of toString()

} // end of arrayQueue`;