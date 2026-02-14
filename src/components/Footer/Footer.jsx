import './Footer.css'

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Marvyn Harryson. {t.footer.rights}</p>
          <div className="footer-links">
            <a href="https://github.com/marvynharry" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/marvynharry/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {/* <a href="https://twitter.com/marvynharry" target="_blank" rel="noopener noreferrer">Twitter</a> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
