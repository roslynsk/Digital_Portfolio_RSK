// first draft
import './App.css'; 

export default function App() {
  return (
    <div className='page-container'> 

      <header>
        <nav className="navbar">
          <div className="logo-container">
            {/* <img src={viteLogo} alt="React Logo" className="logo react-logo"></img> */}
          </div>
          <ul className='nav-links'>
            <li><a href="#About Me">About Me</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <section id="About Me" className="about-me">
          <h1>Roslyn Shaw-Kelly</h1>
          <p>Product Designer | UX UI</p>
        </section>
      </main>

      <footer className="footer"> {/* Footer Section */}
        <p>&copy; {new Date().getFullYear()} Roslyn Shaw-Kelly. All Rights Reserved.</p> {/* Dynamic copyright year */  }
      </footer>
      
    
    </div>

  )
}
