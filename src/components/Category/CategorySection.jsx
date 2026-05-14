
import './CategorySection.css';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'PGs For Boys',
    desc: 'Comfortable, secure, and affordable PGs for boys in top locations.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    link: '/pg-boys',
  },
  {
    title: 'PGs For Girls',
    desc: 'Safe, modern, and well-connected PGs for girls with all amenities.',
    img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
    link: '/pg-girls',
  },
  {
    title: 'PGs For Co-Living',
    desc: 'Premium co-living spaces for students and professionals.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    link: '/co-living',
  },
];

function CategorySection() {
  return (
    <section className="category-section">
      <div className="category-title">
        <span style={{ color: '#2563eb', fontWeight: 600, fontSize: 18 }}>Paying Guest</span>
        <br />
        Find PGs based on your need
      </div>
      <div className="category-cards">
        {categories.map((cat) => (
          <Link
            className="category-card image-card"
            key={cat.title}
            to={cat.link}
            style={{ textDecoration: 'none' }}
          >
            <div className="category-img-wrap">
              <img src={cat.img} alt={cat.title} className="category-img" />
              <div className="category-img-overlay">
                <div className="category-img-text">
                  <span className="category-img-title">{cat.title}</span>
                  <span className="category-img-arrow">→</span>
                </div>
              </div>
            </div>
            <p className="category-desc">{cat.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
