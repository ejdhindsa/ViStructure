import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import './fonts.css'
import './global.css'

import Header from './components/Header'
import Homepage from './pages/Homepage/Homepage'
import SinglyLinkedList from './pages/SinglyLinkedList/SinglyLinkedList'
import CircularlyLinkedList from "./pages/CircularlyLinkedList/CircularlyLinkedList";
import DoublyLinkedList from "./pages/DoublyLinkedList/DoublyLinkedList";
import CircularDoublyLinkedList from "./pages/CircularDoublyLinkedList/CircularDoublyLinkedList";

function App() {
  return (
    <Router>
        <Header />

        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/singlylinkedlist" element={<SinglyLinkedList />} />
            <Route path="/circularlylinkedlist" element={<CircularlyLinkedList />} />
            <Route path="/doublylinkedlist" element={<DoublyLinkedList />} />
            <Route path="/circulardoublylinkedlist" element={<CircularDoublyLinkedList />} />
        </Routes>

    </Router>
  );
}

export default App;
