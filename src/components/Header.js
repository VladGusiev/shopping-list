import "../styles/Header.css";
import {useState} from "react";
function Header() {

    const [isDark, setIsDark] = useState(false);

    function toggleTheme() {
        if (!isDark) {
            document.body.classList.add('dark');
            setIsDark(true);
        } else {
            document.body.classList.remove('dark');
            setIsDark(false);
        }
    }

    return (
        <div className="header-wrapper">
            <h1>Shopping List</h1>
            <button
                onClick={toggleTheme}
                className="theme-switch">{isDark ? "☀️" : "🌙"}</button>
        </div>
    )
}

export default Header;