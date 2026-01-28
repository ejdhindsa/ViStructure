export const PASSWORDS = {
    ARRAY: "kali",
    SINGLY: "ubuntu",
    DOUBLY: "mint",
    STACK: "debian",
    QUEUE: "arch",
    CIRCULAR: "endeavor",
    CDLL: "fedora",
    POSITIONAL: "manjaro",
};

export const UNLOCK_ORDER = ["ARRAY", "SINGLY", "DOUBLY", "STACK", "QUEUE", "CIRCULAR", "CDLL", "POSITIONAL"];

export const STRUCTURE_INFO = {
    ARRAY: {
        name: "ARRAY",
        path: "/array",
        desc: "An array is a data structure that stores elements in contiguous memory locations and allows direct access using an index."
    },
    SINGLY: {
        name: <>SINGLY <br/> LINKED LIST</>,
        path: "/singlylinkedlist",
        desc: "A singly linked list is a sequence of nodes where each node points to the next. It starts at the head and ends with null."
    },
    DOUBLY: {
        name: <>DOUBLY <br/> LINKED LIST</>,
        path: "/doublylinkedlist",
        desc: "A doubly linked list is a sequence of nodes where each node points to both its next and previous nodes, allowing traversal in both directions."
    },
    STACK: {
        name: "STACKS",
        path: "/stack",
        desc: "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where elements are added and removed from the top."
    },
    QUEUE: {
        name: "QUEUES",
        path: "/queue",
        desc: "A queue is a data structure that follows the First In, First Out (FIFO) principle, elements are added at the rear and removed from the front."
    },
    CIRCULAR: {
        name: "CIRCULARLY LINKED LIST",
        path: "/circularlylinkedlist",
        desc: "A circularly linked list is a sequence of nodes where each node points to the next, and the last node points back to the head, forming a circle."
    },
    CDLL: {
        name: "CIRCULAR DOUBLY LINKED LIST",
        path: "/circulardoublylinkedlist",
        desc: "A circular doubly linked list has nodes linked in both directions, with the last node pointing to the first and vice versa, forming a loop."
    },
    POSITIONAL: {
        name: "POSITIONAL LIST",
        path: "/positionallist",
        desc: "A positional list is a data structure that stores elements in linked nodes and allows access through positions rather than indices."
    }
};