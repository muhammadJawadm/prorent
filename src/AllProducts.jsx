import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import './AllProducts.css';

function AllProducts() {
    const products = [
        {
            id: 1,
            image: '/camera.png',
            title: 'המצלמה מצלמת DSLR',
            price: 120,
            rating: 4,
            location: 'מגר - שכר',
            badge: 'לפי שעה'
        },
        {
            id: 2,
            image: '/drill.png',
            title: 'מגר 21 מחר',
            price: 90,
            rating: 5,
            location: 'ביצע פרת',
            distance: '2.3 km'
        },
        {
            id: 3,
            image: '/lawnmower.png',
            title: 'גינן מגוועד גינון',
            price: 150,
            rating: 4,
            location: 'הרחריח',
            distance: '1.8 km'
        },
        {
            id: 4,
            image: '/camera.png',
            title: 'מצלמת וידאו מקצועי',
            price: 200,
            rating: 5,
            location: 'תל אביב',
            distance: '3.2 km',
            badge: 'לפי שעה'
        },
        {
            id: 5,
            image: '/drill.png',
            title: 'מקדחה חשמלית חזק',
            price: 85,
            rating: 4,
            location: 'ירושלים',
            distance: '5.1 km'
        },
        {
            id: 6,
            image: '/lawnmower.png',
            title: 'מכסחת דשא רובוטית',
            price: 180,
            rating: 5,
            location: 'חיפה',
            distance: '2.7 km',
            badge: 'לפי יום'
        },
        {
            id: 7,
            image: '/camera.png',
            title: 'קונסול תאורה למאורעות',
            price: 250,
            rating: 5,
            location: 'רמת גן',
            distance: '1.5 km'
        },
        {
            id: 8,
            image: '/drill.png',
            title: 'משאבת מים תעשייתי',
            price: 110,
            rating: 4,
            location: 'פתח תקווה',
            distance: '4.3 km',
            badge: 'לפי שעה'
        },
        {
            id: 9,
            image: '/lawnmower.png',
            title: 'מנסור שרשרת מקצועי',
            price: 95,
            rating: 4,
            location: 'נתניה',
            distance: '3.8 km'
        },
        {
            id: 10,
            image: '/camera.png',
            title: 'מערכת הגברה ניידת',
            price: 175,
            rating: 5,
            location: 'באר שבע',
            distance: '2.1 km',
            badge: 'לפי יום'
        },
        {
            id: 11,
            image: '/drill.png',
            title: 'גנראטור חשמל 5000W',
            price: 220,
            rating: 5,
            location: 'אשדוד',
            distance: '6.2 km'
        },
        {
            id: 12,
            image: '/lawnmower.png',
            title: 'מכונת חיתוך דשא',
            price: 140,
            rating: 4,
            location: 'הרצליה',
            distance: '1.9 km',
            badge: 'לפי שעה'
        }
    ];

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
                            <span className="logo-icon">🏠</span>
                            <span>ProRent</span>
                        </Link>

                        <nav className="nav">
                            <a href="#categories">קטגוריות</a>
                            <a href="#about">אודות</a>
                            <a href="#contact">הדפסת</a>
                            <Link to="/">בית</Link>
                        </nav>

                        <div className="header-actions">
                            <button className="btn-login">
                                כניסה או הצטרפות
                            </button>
                            <div className="user-avatar">
                                <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="User" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Page Header */}
            <section className="all-products-header">
                <div className="container">
                    <h1>כל המוצרים</h1>
                    <p>דפדף בכל הציוד הזמין להשכרה</p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="products all-products-section">
                <div className="container">
                    <div className="products-grid">
                        {products.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                    {product.badge && <span className="badge">{product.badge}</span>}
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title">{product.title}</h3>
                                    <div className="rating">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={{ opacity: i < product.rating ? 1 : 0.3 }}>⭐</span>
                                        ))}
                                    </div>
                                    <div className="product-meta">
                                        <div className="price">
                                            ₪{product.price}
                                            <span className="price-period">/שעה</span>
                                        </div>
                                        <div className="product-details">
                                            📍 {product.location} {product.distance && `${product.distance}`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <span className="logo-icon">🏠</span>
                                <span>ProRent</span>
                            </div>
                            <div className="footer-contact">
                                <p>📞 +972 51-128-6667</p>
                                <p>✉️ support@prorent.com</p>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h4>לקוחות</h4>
                            <ul>
                                <li><a href="#support">תמיכה</a></li>
                                <li><a href="#faq">שאלות</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>קטגוריות</h4>
                            <ul>
                                <li><a href="#photo">צילום</a></li>
                                <li><a href="#build">בנייה</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>חברת</h4>
                            <ul>
                                <li><a href="#about">אודות</a></li>
                                <li><a href="#careers">קריירה</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <div className="social-links">
                                <div className="social-icon">
                                    <FaFacebookF />
                                </div>
                                <div className="social-icon social-color">
                                    <FaTwitter />
                                </div>
                                <div className="social-icon social-color">
                                    <FaYoutube />
                                </div>
                            </div>
                            <div className="newsletter">
                                <div className="newsletter-input">
                                    <input type="email" placeholder="הכנסו את אימייל שלו" />
                                    <button className="btn-newsletter">הסגר</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default AllProducts;
