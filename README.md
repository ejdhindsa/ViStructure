# ViStructure

[![Licence: GPL-3.0](https://img.shields.io/badge/Licence-GPL--3.0-blue.svg)](LICENSE)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)

Interactive web application for visualising fundamental data structures, built with React and Framer Motion.

Used as a visual learning aid for ACS-2947 (Data Structures and Algorithms) at the University of Winnipeg.

Live demo: [vistructures.com](https://www.vistructures.com/)

<!-- Screenshot placeholder: owner to supply image -->

## Features

- Interactive node operations: insertion, deletion, and traversal
- Step-by-step state animations with Framer Motion
- Side-by-side code views on supported structures
- Responsive layout across screen sizes

## Run Locally

Requirements: Node.js (v18+) and npm.

```bash
# Clone the repository
git clone https://github.com/ejdhindsa/ViStructure.git
cd ViStructure

# Install dependencies
npm ci

# Start the dev server
npm start
```

The app will be available at `http://localhost:3000`.

## Roadmap

Implemented data structures:
- Array (visualiser)
- Singly Linked List (visualiser)
- Doubly Linked List (visualiser + code view)
- Circularly Linked List (visualiser + code view)
- Circular Doubly Linked List (visualiser + code view)
- Stack (visualiser + code view)
- Queue (visualiser + code view)
- Positional List (visualiser)
- Tree (visualiser + code view)

Upcoming:
- Priority Queue (in progress on the `PriorityQueue` branch)
- Code view toggle for remaining structures (Array, Singly Linked List, Positional List)
- Algorithm visualisations
- Dark / light mode toggle

## Licence

This project is licensed under the terms of the [GNU General Public License v3.0](LICENSE).
