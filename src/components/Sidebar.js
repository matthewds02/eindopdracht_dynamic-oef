import React, {useState} from "react";
import '../styles/Sidebar.css';
import {FaAngleDoubleRight} from "react-icons/fa";

export function Sidebar() {
    // Gebruik de useState-hook om de uitgeklapte staat van de zijbalk te beheren
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`sidebar${isExpanded ? " expanded" : ""}`}>
            {/* Render de uitschuifknop */}
            <div className={"expand-button"} onClick={() => setIsExpanded(!isExpanded)}>
                <FaAngleDoubleRight className={`icon${isExpanded ? " expanded" : ""}`}/>
            </div>

            <div className="sidebar-content">
                <p>Beschikbaar:</p>
                <button>Hallo</button>
            </div>
        </div>
    );
}
