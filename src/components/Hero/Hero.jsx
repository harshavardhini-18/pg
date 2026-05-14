// import { useState } from 'react';
// import './Hero.css';

// function Hero() {
//   const [city, setCity] = useState('');
//   const [location, setLocation] = useState('');
//   const [gender, setGender] = useState('');
//   const [minPrice, setMinPrice] = useState('1000');
//   const [maxPrice, setMaxPrice] = useState('50000');

//   const cities = [
//     'Chennai',
//     'Bangalore',
//     'Mumbai',
//     'Delhi',
//     'Hyderabad',
//     'Pune',
//     'Kolkata',
//     'Coimbatore'
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // TODO: Navigate to listings page with search params
//     console.log('Search:', { city, location, gender, minPrice, maxPrice });
//   };

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>Find Your Perfect Accommodation</h1>
//         <h2>-Conveniently from Anywhere</h2>
//         <p>Rent Smarter, Hassle-Free</p>

//         <div className="search-card">
//           <form className="search-form" onSubmit={handleSearch}>
//             {/* City Dropdown */}
//             <div className="form-group">
//               <select
//                 id="city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//               >
//                 <option value="">Select city</option>
//                 {cities.map((c) => (
//                   <option key={c} value={c.toLowerCase()}>{c}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Location Input */}
//             <div className="form-group location-group">
//               <input
//                 type="text"
//                 id="location"
//                 placeholder="Search Location"
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </div>

//             {/* Gender Dropdown */}
//             <div className="form-group">
//               <select
//                 id="gender"
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//               >
//                 <option value="">Gender</option>
//                 <option value="boys">Boys</option>
//                 <option value="girls">Girls</option>
//                 <option value="unisex">Unisex</option>
//               </select>
//             </div>

//             {/* Price Range */}
//             <div className="form-group price-group">
//               <span className="rent-label">₹ Rent</span>
//               <div className="price-inputs">
//                 <input
//                   type="number"
//                   value={minPrice}
//                   onChange={(e) => setMinPrice(e.target.value)}
//                   min="0"
//                 />
//                 <input
//                   type="number"
//                   value={maxPrice}
//                   onChange={(e) => setMaxPrice(e.target.value)}
//                   min="0"
//                 />
//               </div>
//             </div>

//             {/* Search Button */}
//             <button type="submit" className="search-btn">
//               Search PG Nearby→
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
import { useState } from 'react';
import './Hero.css';

function Hero() {
  // ===== STEP 1 STATES =====
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);
  const [locationError, setLocationError] = useState('');

  // ===== GET USER GPS LOCATION =====
  const getUserLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('Geolocation is not supported by this browser');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          reject('Location permission denied');
        }
      );
    });
  };

  // ===== HANDLE SEARCH (STEP 1 ONLY) =====
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const location = await getUserLocation();

      setUserLat(location.lat);
      setUserLng(location.lng);

      console.log('User GPS Location:', location);
    } catch (error) {
      setLocationError(error);
      alert(error);
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Accommodation</h1>
        <h2>- Conveniently from Anywhere</h2>
        <p>Rent Smarter, Hassle-Free</p>

        <div className="search-card">
          <form className="search-form" onSubmit={handleSearch}>
            <button type="submit" className="search-btn">
              Search PG Nearby →
            </button>
          </form>
        </div>

        {/* ===== DEBUG OUTPUT (REMOVE LATER) ===== */}
        {userLat && userLng && (
          <p className="location-debug">
            Detected Location → Latitude: {userLat.toFixed(4)} , Longitude: {userLng.toFixed(4)}
          </p>
        )}

        {locationError && (
          <p className="location-error">{locationError}</p>
        )}
      </div>
    </section>
  );
}

export default Hero;

