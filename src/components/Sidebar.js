import React, {useState} from "react";
import '../styles/Sidebar.css';
import {FaAngleDoubleRight} from "react-icons/fa";
import PropTypes from "prop-types";
import {Col, Row} from "react-bootstrap";

function Sidebar(props) {
    const {isAvailable, setIsAvailable, search, setSearch} = props;
    // Gebruik de useState-hook om de uitgeklapte staat van de zijbalk te beheren
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`sidebar${isExpanded ? " expanded" : ""}`}>
            {/* Render de uitschuifknop */}
            <div className={"expand-button"} onClick={() => setIsExpanded(!isExpanded)}>
                <FaAngleDoubleRight className={`icon${isExpanded ? " expanded" : ""}`}/>
            </div>

            <div className="sidebar-content">
                <h1>Filter op:</h1>
                <div style={{display: "flex", alignItems: "baseline"}}>
                    <p>Beschikbaarheid:</p>
                    {/* Pas de tekst van de button aan op basis van de waarde van de useState-hook */}
                    <button className="filterButton" style={{marginLeft: "10px"}}
                            onClick={() => setIsAvailable(!isAvailable)}>{isAvailable ? "Nee" : "Ja"}</button>
                </div>
                {/* Render de zoekbalk */}
                <Row className="my-4">
                    <Col>
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search for a headset..."
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    isAvailable: PropTypes.bool.isRequired,
    setIsAvailable: PropTypes.func.isRequired,
};

export default Sidebar;

