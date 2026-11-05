import './Footer.css'

function Footer({ t }) {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Marvyn Harryson</p>
      <p>{t.footer.source}</p>
    </footer>
  )
}

export default Footer
