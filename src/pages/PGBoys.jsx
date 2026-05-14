import "./PGBoys.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import pgBoysData from "../Data/PgBoysData";

function PGBoys() {
  const [searchText, setSearchText] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [amenityFilter, setAmenityFilter] = useState("all");

  // Filter PGs based on search and filters
  const filteredPGs = pgBoysData.filter((pg) => {
    // Search filter
    const matchesSearch =
      pg.name.toLowerCase().includes(searchText.toLowerCase()) ||
      pg.area.toLowerCase().includes(searchText.toLowerCase()) ||
      pg.city.toLowerCase().includes(searchText.toLowerCase());

    // Price filter
    let matchesPrice = true;
    if (priceFilter === "budget") matchesPrice = pg.priceRange.min < 6000;
    else if (priceFilter === "mid") matchesPrice = pg.priceRange.min >= 6000 && pg.priceRange.min < 9000;
    else if (priceFilter === "premium") matchesPrice = pg.priceRange.min >= 9000;

    // Amenity filter
    let matchesAmenity = true;
    if (amenityFilter === "ac") matchesAmenity = pg.amenities.ac;
    else if (amenityFilter === "wifi") matchesAmenity = pg.amenities.wifi;
    else if (amenityFilter === "food") matchesAmenity = pg.amenities.food;
    else if (amenityFilter === "laundry") matchesAmenity = pg.amenities.laundry;

    return matchesSearch && matchesPrice && matchesAmenity && pg.isAvailable;
  });

  return (
    <div className="pgb-container">
      {/* Header Section */}
      <div className="pgb-header">
        <h1 className="pgb-title">
          <span className="pgb-title-icon">🏠</span>
          PGs for Boys
        </h1>
        <p className="pgb-subtitle">
          Find your perfect stay from {pgBoysData.length}+ verified PGs
        </p>
      </div>

      {/* Search & Filters */}
      <div className="pgb-filters">
        <div className="pgb-search-wrap">
          <svg className="pgb-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="pgb-search-input"
            placeholder="Search by name, area, or city..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="pgb-filter-group">
          <select
            className="pgb-select"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="budget">Budget (&lt; ₹6K)</option>
            <option value="mid">Mid-range (₹6K - ₹9K)</option>
            <option value="premium">Premium (₹9K+)</option>
          </select>

          <select
            className="pgb-select"
            value={amenityFilter}
            onChange={(e) => setAmenityFilter(e.target.value)}
          >
            <option value="all">All Amenities</option>
            <option value="ac">AC</option>
            <option value="wifi">WiFi</option>
            <option value="food">Food</option>
            <option value="laundry">Laundry</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="pgb-results-info">
        <span className="pgb-results-count">{filteredPGs.length} PGs found</span>
      </div>

      {/* PG Cards List */}
      <div className="pgb-list">
        {filteredPGs.length === 0 && (
          <div className="pgb-no-results">
            <span className="pgb-no-results-icon">🔍</span>
            <p>No PGs found matching your criteria</p>
          </div>
        )}

        {filteredPGs.map((pg) => (
          <Link to={`/pg-boys/${pg.id}`} className="pgb-card" key={pg.id}>
            {/* Image Section */}
            <div className="pgb-card-image">
              <img src={pg.image} alt={pg.name} />
              {pg.isVerified && <span className="pgb-badge verified">✓ Verified</span>}
              {pg.safetyScore >= 4 && <span className="pgb-badge popular">⭐ Popular</span>}
            </div>

            {/* Content Section */}
            <div className="pgb-card-content">
              <div className="pgb-card-top">
                <div className="pgb-card-header">
                  <h3 className="pgb-card-title">{pg.name}</h3>
                  <div className="pgb-card-rating">
                    <span className="pgb-rating-star">★</span>
                    <span>{pg.safetyScore}</span>
                  </div>
                </div>
                <p className="pgb-card-location">
                  <svg className="pgb-location-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {pg.area}, {pg.city}
                </p>
              </div>

              <div className="pgb-card-middle">
                <div className="pgb-tags">
                  <span className="pgb-tag room-type">
                    {pg.roomType.charAt(0).toUpperCase() + pg.roomType.slice(1)} Sharing
                  </span>
                  {pg.amenities.ac && <span className="pgb-tag">❄️ AC</span>}
                  {pg.amenities.wifi && <span className="pgb-tag">📶 WiFi</span>}
                  {pg.amenities.food && <span className="pgb-tag">🍽️ Food</span>}
                  {pg.amenities.laundry && <span className="pgb-tag">👕 Laundry</span>}
                </div>
              </div>

              <div className="pgb-card-bottom">
                <div className="pgb-price-section">
                  <span className="pgb-price-label">Starting from</span>
                  <span className="pgb-price">₹{pg.priceRange.min.toLocaleString()}</span>
                  <span className="pgb-price-period">/month</span>
                </div>
                <div className="pgb-card-actions">
                  <button className="pgb-btn-secondary">Schedule Visit</button>
                  <button className="pgb-btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PGBoys;
