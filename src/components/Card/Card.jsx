import "./Card.module.css";

export const Card = ({el}) => {
  const { title, symbol, keywords } = el;
  return (
    <div className="card">
          <p className="card_symbol">{symbol}</p>
          <p className="card_title">{title}</p>
          <p className="card_keywords">{keywords}</p>
        </div>
  );
};
