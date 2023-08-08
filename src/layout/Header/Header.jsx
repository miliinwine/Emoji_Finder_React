import "./Header.module.css"
export const Header = ({ titleText, paragraphText }) => {
  return (
    <header>
      <div className="header">
        <div>
          <h1>{titleText}</h1>
          <p className="title">{paragraphText}</p>
        </div>
      </div>
    </header>
  );
};
