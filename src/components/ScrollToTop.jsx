import { useEffect } from "react";
import {useLocation} from "react-router-dom";

// Function that makes sure that the page remains on top
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // scroll to top left
    }, [pathname]);

    return null;

} // end of ScrollToTop
