const Footer = () => {
    return (
        <footer className="text-center bg-light pt-1">
            <span>Made with <i className="fa fa-heart" /> by </span>
            <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
                Team Epsilon
            </a>
        </footer>
    );
};

export default Footer;
