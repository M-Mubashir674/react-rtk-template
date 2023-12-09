export default function Main({children}) {
    return (
        <div className="mainLayout-wrapper">
            <div>Navbar</div>
            <div className="content">{children}</div>
        </div>
    );
}
