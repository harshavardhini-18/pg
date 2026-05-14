import "./PgDetails.css";

function PgDetails({ pg }) {
  // pg = { ... } // Pass the selected PG object as a prop or fetch by ID from route
  if (!pg) return <div>Loading...</div>;

  return (
    <div className="pg-details-container">
      <img className="pg-details-banner" src={pg.image} alt={pg.name} />
      <div className="pg-details-main">
        <div className="pg-details-header">
          <h1>{pg.name}</h1>
          <span className="pg-details-verified">{pg.isVerified && "✔ Verified"}</span>
        </div>
        <div className="pg-details-location">
          {pg.area}, {pg.city} | <span className="pg-details-room">{pg.roomType} room</span>
        </div>
        <div className="pg-details-price">₹{pg.priceRange.min} – ₹{pg.priceRange.max}</div>
        <div className="pg-details-amenities">
          {pg.amenities.ac && <span>AC</span>}
          {pg.amenities.wifi && <span>WiFi</span>}
          {pg.amenities.food && <span>Food</span>}
          {pg.amenities.laundry && <span>Laundry</span>}
        </div>
        <div className="pg-details-section">
          <h3>Rules</h3>
          <ul>
            {pg.pgRules.split(",").map(rule => <li key={rule}>{rule.trim()}</li>)}
          </ul>
        </div>
        <div className="pg-details-section">
          <h3>Food</h3>
          <p>{pg.foodDetails}</p>
        </div>
        <div className="pg-details-footer">
          <span className="pg-details-safety">Safety: {pg.safetyScore}★</span>
          <button className="pg-details-contact-btn">Contact Owner</button>
        </div>
      </div>
    </div>
  );
}

export default PgDetails;