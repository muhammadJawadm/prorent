import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { FiSliders } from 'react-icons/fi';
import { BiCalendar } from 'react-icons/bi';

function Home() {
    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <span className="logo-icon">🏠</span>
                            <span>ProRent</span>
                        </div>
                        <nav className="nav">
                            <a href="#categories">קטגוריות</a>
                            <a href="#about">אודות</a>
                            <a href="#contact">הדפסת</a>
                            <a href="#home">בית</a>
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

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>ברוך, חומר</h1>
                            <p>המכירת ציוד מקצועי</p>

                            <div className="search-box">
                                <div className="search-input">
                                    <span><FiSearch size={30} /></span>
                                    <input type="text" placeholder="איזה ציוד היום?" />
                                    <div style={{ width: '2px', height: '20px', backgroundColor: '#ccc', margin: '0 10px' }}></div>
                                    <span><FiSliders size={20} /></span>
                                </div>

                                <div className="search-filters">
                                    <div className="filter-group">
                                        <button className="filter-btn">לפי יום</button>
                                        <button className="filter-btn active">לפי שעה🕐</button>
                                        <button className="filter-btn">לפי שעה</button>
                                        <button className="btn-search">
                                            <span><BiCalendar size={20} /></span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="categories">
                <div className="container">
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="category-icon">
                                <img src="/camera.png" alt="Camera" />
                            </div>
                            <h3>צלום</h3>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                🔧
                            </div>
                            <h3>בנייה</h3>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                🌿
                            </div>
                            <h3>גינון</h3>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                💡
                            </div>
                            <h3>תאורה</h3>
                        </div>

                        <div className="category-card">
                            <div className="category-icon">
                                <img src="/lawnmower.png" alt="Other" />
                            </div>
                            <h3>אחרו</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="products">
                <div className="container">
                    <div className="section-header">
                        <h2>דירין קרב אליך</h2>
                        <Link to="/all-products" className="link-all">
                            הצב הכל
                            <span>◀</span>
                        </Link>
                    </div>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image">
                                <img src="/camera.png" alt="DSLR Camera" />
                                <span className="badge">לפי שעה</span>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">המצלמה מצלמת DSLR</h3>
                                <div className="rating">
                                    ⭐⭐⭐⭐<span style={{ opacity: 0.3 }}>⭐</span>
                                </div>
                                <div className="product-meta">
                                    <div className="price">
                                        ₪120
                                        <span className="price-period">/שעה</span>
                                    </div>
                                    <div className="product-details">
                                        📍 מגר - שכר
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/drill.png" alt="Drill" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">מגר 21 מחר</h3>
                                <div className="rating">
                                    ⭐⭐⭐⭐⭐
                                </div>
                                <div className="product-meta">
                                    <div className="price">
                                        ₪90
                                        <span className="price-period">/שעה</span>
                                    </div>
                                    <div className="product-details">
                                        📍 ביצע פרת מגר 2.3 km
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image">
                                <img src="/lawnmower.png" alt="Garden Mower" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">גינן מגוועד גינון</h3>
                                <div className="rating">
                                    ⭐⭐⭐⭐<span style={{ opacity: 0.3 }}>⭐</span>
                                </div>
                                <div className="product-meta">
                                    <div className="price">
                                        ₪150
                                        <span className="price-period">/שעה</span>
                                    </div>
                                    <div className="product-details">
                                        📍 הרחריח מגר 1.8 km
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>יש לך ציוד קאו להשכרה?</h2>
                        <p>התחלת עד הידום את הציוד שלך למשמשים במהרה</p>
                        <button className="btn-cta">
                            סרסום ציוד משכרון
                            <span>→</span>
                        </button>
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

export default Home;
