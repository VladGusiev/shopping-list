import "../styles/Header.css";
function Header() {

    return (
        <div className="header-wrapper">
            <h1>Shopping List</h1>
            <button
                className="theme-switch">🌙</button>
        </div>
    )
}

export default Header;