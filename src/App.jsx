import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CategorySection from './components/Category/CategorySection'
import PGBoys from './pages/PGBoys';
import PGGirls from './pages/PGGirls';
import CoLiving from './pages/CoLiving';
import PgDetailsWrapper from "./pages/PgDetailsWrapper";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <CategorySection />
          </>
        } />
        <Route path="/pg-boys" element={<PGBoys />} />
        <Route path="/pg-girls" element={<PGGirls />} />
        <Route path="/co-living" element={<CoLiving />} />
        <Route path="/pg-boys/:id" element={<PgDetailsWrapper />} />
      </Routes>
    </>
  )
}

export default App
