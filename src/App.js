import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome CSS 추가

function App() {

  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const appName = 'Kims App'

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <div style={ isMobile ? styles.mobileApp : styles.app}>
        {isMobile ? (
            <header style={styles.mobileSidebar}>
              <div style={styles.menu}>
                <h2 style={{ margin: 0, color: '#212121' }}>{appName}</h2>
                <span style={styles.icon} onClick={() => {
                  // 여기서 밑으로 확장하는 메뉴를 만들면 될것 같다.
                  const section = document.getElementById('sections');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
              <i className="fa fa-bars fa-2x" style={{ color: '#7153ED', margin: '0 40px 0 0' }} /> {/* Font Awesome 아이콘 */}
            </span>
              </div>
            </header>
        ) : (
            <aside style={styles.sidebar}>
              <img src="path/to/logo.png" alt="Logo" style={styles.logo} /> {/* 로고 추가 */}
              <h2 style={{ color: '#212121' }}>{appName}</h2>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><a href="#section1" style={{ color: '#7153ED', textDecoration: 'none' }}>Section 1</a></li>
                <li><a href="#section2" style={{ color: '#7153ED', textDecoration: 'none' }}>Section 2</a></li>
                <li><a href="#section3" style={{ color: '#7153ED', textDecoration: 'none' }}>Section 3</a></li>
              </ul>
            </aside>
        )}
        <main style={styles.content}>
          <header style={styles.header}>
            <h1>Welcome to My App</h1>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                style={{ color: '#61dafb', textDecoration: 'none' }}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <section id="sections" style={{ padding: '20px', backgroundColor: '#e0e0e0', margin: '20px 0' }}>
            <h2>Sections</h2>
            <section id="section1" style={{ padding: '20px', backgroundColor: '#d0d0d0', margin: '20px 0' }}>
              <h3>Section 1</h3>
              <p>Content for Section 1.</p>
            </section>
            <section id="section2" style={{ padding: '20px', backgroundColor: '#c0c0c0', margin: '20px 0' }}>
              <h3>Section 2</h3>
              <p>Content for Section 2.</p>
            </section>
            <section id="section3" style={{ padding: '20px', backgroundColor: '#b0b0b0', margin: '20px 0' }}>
              <h3>Section 3</h3>
              <p>Content for Section 3.</p>
            </section>
          </section>
        </main>
      </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  mobileApp: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  sidebar: {
    backgroundColor: '#EBEEF6',
    color: 'white',
    padding: '20px',
    width: '200px',
  },
  mobileSidebar: {
    backgroundColor: '#EBEEF6',
    color: 'white',
    padding: '20px',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: '#f0f0f0',
  },
  header: {
    textAlign: 'center',
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBEEF6',
    color: 'white',
  },
  icon: {
    cursor: 'pointer',
    color: '#61dafb',
  },
  logo: {
    height: '50px', // 로고 높이 조정
    marginRight: '20px', // 로고와 제목 사이의 간격
  },
};

export default App;
