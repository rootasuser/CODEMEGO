import React, { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [pageContent, setPageContent] = useState('home'); // Track page content

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
  };

  const loadPages = (page) => {
    const contentElement = document.getElementById('content');
    contentElement.classList.add('resizing'); // Add animation class
    setTimeout(() => contentElement.classList.remove('resizing'), 500); // Remove class after animation
    setPageContent(page); // Update state to switch content
  };

  const AboutPage = () => {
    const freelancerSince = 2022;
    const successfulClients = 20;
    const averageCompletionTime = 200;
    const priceStartAt = 150;

    return (
      <div className="about-content">
        <div className="circle-container">
          <div className="circle" style={{ '--i': 1 }}>
            <p>Freelancer Since {freelancerSince}</p>
          </div>
          <div className="circle" style={{ '--i': 2 }}>
            <p>Successful Clients {successfulClients}+ </p>
          </div>
          <div className="circle" style={{ '--i': 3 }}>
            <p>Average Completion Time {averageCompletionTime}hrs</p>
          </div>
          <div className="circle" style={{ '--i': 4 }}>
            <p>Price Starts At {priceStartAt} Pesos</p>
          </div>
        </div>
      </div>
    );
  };

  const renderPageContent = () => {
    switch (pageContent) {
      case 'home':
        return (
          <div className="home-content">
            <h2 className="title">{renderTitle()}</h2>
          </div>
        );
      case 'about':
        return <AboutPage />;
        case 'projects':
            return (
              <div className="container my-5">
                <h2 className="text-center mb-5">Welcome to Projects</h2>
                <div className="row">
                  {/* Card 1 */}
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src="../../../public/FMS.png" className="card-img-top" alt="Project" />
                      <div className="card-body">
                        <h5 className="card-title">File Management System</h5>
                        <p className="card-text">A system that helps you organize, store, and manage your files efficiently.</p>
                        <div className="d-flex justify-content-start">
                          <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-official.svg" alt="jQuery" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap5" className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src="../../../public/FMS.png" className="card-img-top" alt="Project" />
                      <div className="card-body">
                        <h5 className="card-title">File Management System</h5>
                        <p className="card-text">A system that helps you organize, store, and manage your files efficiently.</p>
                        <div className="d-flex justify-content-start">
                          <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-official.svg" alt="jQuery" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap5" className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src="../../../public/FMS.png" className="card-img-top" alt="Project" />
                      <div className="card-body">
                        <h5 className="card-title">File Management System</h5>
                        <p className="card-text">A system that helps you organize, store, and manage your files efficiently.</p>
                        <div className="d-flex justify-content-start">
                          <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-official.svg" alt="jQuery" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap5" className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src="../../../public/FMS.png" className="card-img-top" alt="Project" />
                      <div className="card-body">
                        <h5 className="card-title">File Management System</h5>
                        <p className="card-text">A system that helps you organize, store, and manage your files efficiently.</p>
                        <div className="d-flex justify-content-start">
                          <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-official.svg" alt="jQuery" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap5" className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src="../../../public/FMS.png" className="card-img-top" alt="Project" />
                      <div className="card-body">
                        <h5 className="card-title">File Management System</h5>
                        <p className="card-text">A system that helps you organize, store, and manage your files efficiently.</p>
                        <div className="d-flex justify-content-start">
                          <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-official.svg" alt="jQuery" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap5" className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src="../../../public/FMS.png" className="card-img-top" alt="Project" />
                      <div className="card-body">
                        <h5 className="card-title">File Management System</h5>
                        <p className="card-text">A system that helps you organize, store, and manage your files efficiently.</p>
                        <div className="d-flex justify-content-start">
                          <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JS" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-official.svg" alt="jQuery" className="icon me-2" />
                          <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="MySQL" className="icon me-2" />
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap5" className="icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Add more cards here if needed */}
                </div>
              </div>
            );
          
            case 'feedbacks':
                return (
                  <div className="feedbacks-container">
                    <div className="feedback-card">
                      <img src="../../../public/transac1.png" alt="Feedback 1" className="card-img-top" />
                    </div>
                    <div className="feedback-card">
                      <img src="../../../public/transac1.png" alt="Feedback 1" className="card-img-top" />
                    </div>
                    <div className="feedback-card">
                      <img src="../../../public/transac1.png" alt="Feedback 1" className="card-img-top" />
                    </div>
                    <div className="feedback-card">
                      <img src="../../../public/transac1.png" alt="Feedback 1" className="card-img-top" />
                    </div>
                  </div>
                );
              
      default:
        return null;
    }
  };

  // Function to split the title and wrap each letter in a span for animation
  const renderTitle = () => {
    const title = "CODEMEGO";
    return title.split("").map((letter, index) => (
      <span key={index} className="letter" style={{ animationDelay: `${0.1 * index}s` }}>
        {letter}
      </span>
    ));
  };

  useEffect(() => {
    loadPages('home'); // Set the initial page on load
  }, []);

  return (
    <header className={`shadow-sm p-3 ${darkMode ? 'bg-dark' : 'bg-light'} ${darkMode ? 'gradient-bg' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <span className={`${darkMode ? 'text-light' : 'text-dark'}`}>Code</span>
            <span className="text-warning">Mego</span>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#home" onClick={() => loadPages('home')}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#about" onClick={() => loadPages('about')}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#projects" onClick={() => loadPages('projects')}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${darkMode ? 'text-light' : 'text-dark'}`} href="#feedbacks" onClick={() => loadPages('feedbacks')}>
                  Feedbacks
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="toggle-btn ms-3"
                  onClick={toggleDarkMode}
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="content">
        {/* Dynamically render page content */}
        {renderPageContent()}
      </div>
    </header>
  );
}

export default Header;
