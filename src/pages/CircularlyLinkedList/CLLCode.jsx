import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from "../CSS/code.module.css"

export default function CodeViewer() {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(javaCode);
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
                <h2>Code: Singly Linked List</h2>
                {/* Copy Button */}
                <button
                    onClick={handleCopy}
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
}

const javaCode = `public class SinglyLinkedList<E>
{
    // ********************** NESTED NODE CLASS ***************************
    private static class Node<E>
    {
        private E element;
        private Node<E> next;
        public Node(E e, Node<E> n)
        {
            this.element = e;
            this.next = n;
        } // end of full-arg node

        //********** NODE UTILITY METHODS ****************
        public E getElement() { return element; }
        public Node<E> getNext() { return next; }
        public void setNext(Node<E> next) { this.next = next; }

    } // end of node class
    // ******************* END OF NESTED NODE CLASS ************************

    // instance variables of SinglyLinkedList
    private Node<E> head = null;
    private Node<E> tail = null;
    private int size = 0;

    public SinglyLinkedList() {}

    // access methods
    public int size() { return size; }
    public boolean isEmpty() { return size == 0; }

    public E first() {
        if(isEmpty()) return null;
        return head.getElement();
    } // end of first()

    public E last() {
        if(isEmpty()) return null;
        return tail.getElement();
    } // end of last()

    // update methods
    public void addFirst(E e) {
        head = new Node<>(e, head);
        if(size == 0) tail = head;
        size++;
    } // end of addFirst()

    public void addLast(E e) {
        Node<E> newest = new Node<>(e, null);
        if(isEmpty())
            head = newest;
        else
            tail.setNext(newest);
        tail = newest;
        size++;
    } // end of addLast()

    public E removeFirst() {
        if (isEmpty()) return null;
        E answer = head.getElement();
        head = head.getNext();
        size--;
        if(size == 0)
            tail = null;
        return answer;
    } // end of remove first

    /**
     * Creates a toString method as required
     * @return toString value
     */
    @Override
    public String toString()
    {
        StringBuilder sb = new StringBuilder();

        sb.append("[");
        while(head != null)
        {
            sb.append(head.getElement().toString());
            if (head.getNext() != null)
                sb.append("\\n");
            head = head.getNext();
        } // end of toString()

        sb.append("]");

        return sb.toString();
    } // end toString()

} // end of SinglyLinkedList`;