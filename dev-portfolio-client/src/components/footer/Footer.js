import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer-container">
            <p>© 2025 Iti Donat
                <span className="separator">|</span>
                <a href="https://github.com/etwert" className="github-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>&nbsp; | &nbsp;
                <a href="mailto:etdonat@gmail.com" className="email-link">Email</a>&nbsp; | &nbsp;
                <a href="tel:+972534190375" className="phone-link">Phone</a>
            </p>
        </footer>
    )
}

export default Footer
