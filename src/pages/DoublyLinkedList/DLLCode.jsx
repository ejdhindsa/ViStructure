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
                <h2>Code: Doubly Linked List</h2>
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

const javaCode = `public class DoublyLinkedList<E>
{
	// ------------- NESTED NODE CLASS ------------------
	private static class Node<E>
	{
		private E element; 			// reference to the element stored in this node
		private Node<E> prev; 		// reference to the previous node in the list
		private Node<E> next;		// reference to the subsequent node in the list
		
		public Node(E element, Node<E> prev, Node<E> next)
		{
			this.element = element;
			this.prev = prev;
			this.next = next;
			
		} // end of constructor
		
		public E getElement() {
			return element;
		} // end of getElement()
		
		public Node<E> getPrev() {
			return prev;
		} // end of getPrev()
		
		public Node<E> getNext() {
			return next;
		} // end of getNext()
		
		public void setPrev(Node<E> prev) {
			this.prev = prev;
		} // end of setPrev()
		
		public void setNext(Node<E> next) {
			this.next = next;
		} // end of setNext()
		
	} // ------------- END NESTED NODE CLASS ------------------
	
	// instance variables of this DoublyLinkedList
	private Node<E> header;				// header sentinel
	private Node<E> trailer;			// trailer sentinel
	private int size = 0;				// number of elements in the list
	
	/* Constructs a new empty list */
	public DoublyLinkedList() {
		header = new Node<>(null, null, null);
		trailer = new Node<>(null, header, null);
		header.setNext(trailer);
		
	} // end of constructor
	
	/** Returns the number of elements in the linked list **/
	public int size() {
		return size;
	} // end of size()
	
	/** Tests whether the linked list is empty **/
	public boolean isEmpty() {
		return size == 0;
	} // end of isEmpty()
	
	/** Returns (but does not remove) the first element of the list **/
	public E first() {
		if (isEmpty())
			return null;
			
		return header.getNext().getElement();
	} // end of first()
	
	/** Returns (but does not removve) the last element of the list **/
	public E last() {
		if (isEmpty())
			return null;
			
		return trailer.getPrev().getElement()
	} // end of last()
	
	// public update methods
	
	/** Adds element to the front of the list **/
	public void addFirst(E element) {
		addBetween(e, header, header.getNext())
	} // end of addFirst()
	
	/** Adds element to the end of the list **/
	public void addLast(E element) {
		addBetween(e, trailer.getPrev(), trailer);
	} // end of addLast()
	
	/** Removes and returns the first element of the list **/
	public E removeLast() {
		if (isEmpty())
			return null;
			
		return remove(trailer.get());
	} // end of removeFirst()
	
	/** Removes and returns the first element of the list **/
	public E removeFirst() {
		if (isEmpty())
			return null;
			
		return remove(header.get());
	} // end of removeFirst()
	
	// private update methods
	
	/** Adds element e to the linked list in between the given nodes **/
	private void addBetween(E element, Node<E> predecessor, Node<E> successor) {
		// create and link a new node
		Node<E> newest = new Node<>(element, predecessor, successor);
		predecessor.setNext(newest);
		successor.setPrev(newest);
		size++;
	} // end of addBetween()
	
	/** Removes the given node from the list and returns its element **/
	private E remove(Node<E> node)
	{
		Node<E> predecessor = node.getPrev();
		Node<E> successor = node.getNext();
		predecessor.setNext(successor);
		successor.setPrev(predecessor);
		size--;
		return node.getElement();
	} // end of remove
	
} // end of DoublyLinkedList`;