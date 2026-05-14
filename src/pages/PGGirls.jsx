import "./pggirls.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import pgGirlsData from "../Data/PgGirlsData";
import { getDistanceKm } from "../utils/getDistanceKm";

function PGGirls() {
  const [searchText, setSearchText] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  const RADIUS_KM = 10;

  // GPS HANDLER
  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        alert("Location permission denied");
      }
    );
  };

  // FILTER LOGIC
  const filteredPGs = pgGirlsData.filter((pg) => {
    if (!userLocation) return false;

    const pgLng = pg.location.coordinates[0];
    const pgLat = pg.location.coordinates[1];

    const distance = getDistanceKm(
      userLocation.lat,
      userLocation.lng,
      pgLat,
      pgLng
    );

    const matchesSearch =
      pg.name.toLowerCase().includes(searchText.toLowerCase()) ||
      pg.area.toLowerCase().includes(searchText.toLowerCase()) ||
      pg.city.toLowerCase().includes(searchText.toLowerCase());

    return distance <= RADIUS_KM && pg.isAvailable && matchesSearch;
  });

  // Generate random viewing count for demo
  const getViewingCount = () => Math.floor(Math.random() * 5) + 1;

  return (
    <>
      {/* ========== SEARCH BAR ========== */}
      <div className="pg-search-horizontal">
        <div className="pg-search-inner">
          <input
            type="text"
            placeholder="Search by area, city, or PG name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="location-btn"
            title="Use current location"
            onClick={handleUseCurrentLocation}
          >
            ⦿
          </button>
          <button className="search-btn">Search</button>
        </div>
      </div>

      {/* ========== MAIN LAYOUT ========== */}
      <div className="pg-layout">
        {/* LEFT: PG Cards List */}
        <div className="pg-list">
          {!userLocation && (
            <p className="no-results">
              📍 Click the location button ⦿ to find PGs near you
            </p>
          )}

          {userLocation && filteredPGs.length === 0 && (
            <p className="no-results">
              🔍 No PGs found nearby. Try expanding your search.
            </p>
          )}

          {filteredPGs.map((pg) => (
            <Link
              to={`/pg-girls/${pg.id}`}
              className="pg-card"
              key={pg.id}
            >
              {/* Image Section */}
              <div className="pg-card-img-wrap">
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="pg-card-img"
                />
                <span className="pg-badge">Preferred by Students</span>
                <span className="pg-live-badge">
                  {getViewingCount()} People Viewing Now
                </span>
              </div>

              {/* Content Section */}
              <div className="pg-card-info">
                {/* Header Row */}
                <div className="pg-card-header">
                  <div>
                    <h3>{pg.name}</h3>
                    <p className="pg-location">
                      {pg.area}, {pg.city}
                    </p>
                    <span className="view-directions">View Directions</span>
                  </div>
                  <span className="gender-badge">Female</span>
                </div>

                {/* Amenity Highlight */}
                {pg.amenities.laundry && (
                  <p className="pg-amenity-highlight">Attached Washroom</p>
                )}

                {/* Tags */}
                <div className="pg-tags">
                  <span className="tag room-type">
                    {pg.roomType.charAt(0).toUpperCase() + pg.roomType.slice(1)}
                  </span>
                  {pg.amenities.ac && <span className="tag">❄️ AC</span>}
                  {pg.amenities.wifi && <span className="tag">📶 WiFi</span>}
                  {pg.amenities.food && <span className="tag">🍽️ Food</span>}
                </div>

                {/* Bottom: Price + Actions */}
                <div className="pg-card-bottom">
                  <div className="pg-price-wrap">
                    <span className="pg-price-label">Starts from</span>
                    <p className="pg-card-price">
                      ₹{pg.priceRange.min.toLocaleString()}
                      <span>/mo*</span>
                    </p>
                  </div>

                  <div className="pg-card-actions">
                    <button className="btn-solid">Schedule a Visit</button>
                    <button className="btn-outline">Request Callback</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT: Map Placeholder */}
        <div className="pg-map">
          <div className="map-placeholder">
            Map will appear here
          </div>
        </div>
      </div>
    </>
  );
}

export default PGGirls;
