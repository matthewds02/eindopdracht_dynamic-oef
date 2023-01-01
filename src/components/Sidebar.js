import React, {useState} from "react";
import '../styles/Sidebar.css';

export function Sidebar() {
    // Gebruik de useState-hook om de uitgeklapte staat van de zijbalk te beheren
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`sidebar${isExpanded ? " expanded" : ""}`}>
            {/* Render de uitschuifknop */}
            <button className={"expand-button"} onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Close" : "Open"}
            </button>

            <div className="sidebar-content">
                <h1>Hallo</h1>
            </div>
        </div>
    );
}