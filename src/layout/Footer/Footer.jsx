import "./Footer.module.css"
export const Footer = ({ footerText }) => {
  return (
    <footer>
      <div className="line"></div>
      <p className="text">{ footerText}</p>
    </footer>
  );
};
