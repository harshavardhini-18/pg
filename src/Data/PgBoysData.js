const PgBoysData = [
  {
    id: "pg1",
    name: "Green Valley Men's PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1001",
    location: {
      type: "Point",
      coordinates: [80.2707, 13.0827]
    },
    city: "Chennai",
    area: "Velachery",
    address: "No. 12, 3rd Street, Tansi Nagar, Velachery, Chennai",
    priceRange: { min: 6000, max: 9000 },
    genderType: "Male",
    amenities: { ac: true, wifi: true, food: true, laundry: false },
    roomType: "double",
    pgRules: "No smoking, No alcohol, Entry before 10 PM",
    foodDetails: "South Indian meals",
    safetyScore: 4,
    totalViews: 120,
    isAvailable: true,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg2",
    name: "Sri Sai Boys PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1002",
    location: {
      type: "Point",
      coordinates: [80.2410, 13.0674]
    },
    city: "Chennai",
    area: "T Nagar",
    address: "45, North Usman Road, T Nagar, Chennai",
    priceRange: { min: 7000, max: 10000 },
    genderType: "Male",
    amenities: { ac: true, wifi: true, food: true, laundry: true },
    roomType: "single",
    pgRules: "No alcohol, Visitors not allowed",
    foodDetails: "Veg & Non-veg",
    safetyScore: 5,
    totalViews: 210,
    isAvailable: true,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg3",
    name: "Metro Boys Hostel",
    ownerID: "65f2a9b0c9e77b4f9c2d1003",
    location: {
      type: "Point",
      coordinates: [80.2090, 13.0349]
    },
    city: "Chennai",
    area: "Guindy",
    address: "18, Industrial Estate Road, Guindy",
    priceRange: { min: 5500, max: 8000 },
    genderType: "Male",
    amenities: { ac: false, wifi: true, food: true, laundry: false },
    roomType: "triple",
    pgRules: "Entry before 9:30 PM",
    foodDetails: "South Indian",
    safetyScore: 3,
    totalViews: 95,
    isAvailable: true,
  isVerified: false,
  image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg4",
    name: "Elite Stay Boys PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1004",
    location: {
      type: "Point",
      coordinates: [80.2785, 13.0358]
    },
    city: "Chennai",
    area: "Adyar",
    address: "22, LB Road, Adyar",
    priceRange: { min: 9000, max: 13000 },
    genderType: "Male",
    amenities: { ac: true, wifi: true, food: false, laundry: true },
    roomType: "single",
    pgRules: "No smoking",
    foodDetails: "Outside food allowed",
    safetyScore: 5,
    totalViews: 300,
    isAvailable: true,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg5",
    name: "Comfort Zone Men's PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1005",
    location: {
      type: "Point",
      coordinates: [80.2245, 12.9941]
    },
    city: "Chennai",
    area: "Perungudi",
    address: "OMR Road, Perungudi",
    priceRange: { min: 6500, max: 9500 },
    genderType: "Male",
    amenities: { ac: false, wifi: true, food: true, laundry: true },
    roomType: "double",
    pgRules: "No alcohol",
    foodDetails: "Veg meals",
    safetyScore: 4,
    totalViews: 160,
    isAvailable: true,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg6",
    name: "Urban Nest Boys PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1006",
    location: {
      type: "Point",
      coordinates: [80.1920, 13.0910]
    },
    city: "Chennai",
    area: "Anna Nagar",
    address: "2nd Avenue, Anna Nagar",
    priceRange: { min: 8000, max: 12000 },
    genderType: "Male",
    amenities: { ac: true, wifi: true, food: true, laundry: true },
    roomType: "double",
    pgRules: "Entry before 10 PM",
    foodDetails: "North & South Indian",
    safetyScore: 5,
    totalViews: 250,
    isAvailable: true,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg7",
    name: "Budget Boys PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1007",
    location: {
      type: "Point",
      coordinates: [80.1840, 13.0730]
    },
    city: "Chennai",
    area: "Aminjikarai",
    address: "Nelson Manickam Road",
    priceRange: { min: 4500, max: 6500 },
    genderType: "Male",
    amenities: { ac: false, wifi: false, food: true, laundry: false },
    roomType: "triple",
    pgRules: "Strict timings",
    foodDetails: "Basic meals",
    safetyScore: 3,
    totalViews: 80,
    isAvailable: true,
  isVerified: false,
  image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg8",
    name: "Royal Stay Men's PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1008",
    location: {
      type: "Point",
      coordinates: [80.2502, 13.0400]
    },
    city: "Chennai",
    area: "Mylapore",
    address: "RK Mutt Road, Mylapore",
    priceRange: { min: 10000, max: 15000 },
    genderType: "Male",
    amenities: { ac: true, wifi: true, food: true, laundry: true },
    roomType: "single",
    pgRules: "No visitors",
    foodDetails: "Premium meals",
    safetyScore: 5,
    totalViews: 400,
    isAvailable: false,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg9",
    name: "Tech Park Boys PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1009",
    location: {
      type: "Point",
      coordinates: [80.2279, 12.9846]
    },
    city: "Chennai",
    area: "Sholinganallur",
    address: "Near IT Park, OMR",
    priceRange: { min: 7000, max: 11000 },
    genderType: "Male",
    amenities: { ac: true, wifi: true, food: false, laundry: true },
    roomType: "double",
    pgRules: "Flexible timing",
    foodDetails: "Outside food allowed",
    safetyScore: 4,
    totalViews: 190,
    isAvailable: true,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  },

  {
    id: "pg10",
    name: "Smart Living Boys PG",
    ownerID: "65f2a9b0c9e77b4f9c2d1010",
    location: {
      type: "Point",
      coordinates: [80.1986, 13.0623]
    },
    city: "Chennai",
    area: "Kodambakkam",
    address: "Arcot Road, Kodambakkam",
    priceRange: { min: 6000, max: 8500 },
    genderType: "Male",
    amenities: { ac: false, wifi: true, food: true, laundry: true },
    roomType: "double",
    pgRules: "No alcohol",
    foodDetails: "Home-style food",
    safetyScore: 4,
    totalViews: 140,
    isAvailable: true,
  isVerified: true,
  image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  createdAt: new Date(),
  updatedAt: new Date()
  }
];

export default PgBoysData;
