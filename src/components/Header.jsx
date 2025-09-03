import { Link } from 'react-router-dom'
import { useEffect, useState, useRef} from "react";
import styles from './header.module.css';

export function Header() {

    // creating state constants to handle header animations
    const [isShrunk, setIsShrunk] = useState(false);        // tells if header is shrunk
    const lastScrollY = useRef(0);          // keeps track of previous scroll
    const timeoutRef = useRef(null);           // ref to score timeout ID

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                const scrollDown = currentScrollY > lastScrollY.current;
                const scrolledEnough = Math.abs(currentScrollY - lastScrollY.current) > 10;

                if (scrollDown && currentScrollY > 100 && scrolledEnough && !isShrunk) {
                    setIsShrunk(true);
                } // end of if
                else if (!scrollDown && currentScrollY < 50 && scrolledEnough && isShrunk) {
                    setIsShrunk(false);
                } // end of else

                lastScrollY.current = currentScrollY;
            }, 100); // debounce time
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutRef.current);
        };
    }, [isShrunk]);

    return (
        <>
            <div className={`${styles.header} ${isShrunk ? styles.shrunk : ''}`}>
                <div className={styles.leftAlign}>
                    <img
                        src="/assets/images/components/header-graph.png"
                        alt="header-image"
                        className={styles.headerImage}
                    />
                    <Link to="/" className={styles.headLink}>
                        <h1 className={styles.headerText}>
                            <span className={styles.highlight}>VI</span>STRUCTURES
                        </h1>
                    </Link>
                </div>

                <div className={styles.rightAlign} hidden>
                    <Link to="https://github.com/ejdhindsa/ViStructure" hidden>
                        <img
                            src="/assets/images/components/github-invertocat.png"
                            alt="github-image"
                            className={styles.githubImage}
                            hidden
                        />
                    </Link>
                </div>
            </div>
        </>
    ) // end of return

} // end of homepage