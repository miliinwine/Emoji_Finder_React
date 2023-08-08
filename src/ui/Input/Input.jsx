import "./Input.module.css";

export const Input = ({ type, placeholder, handler }) => {
  return (
    <input
      onChange={handler}
      className="input"
      type={type}
      placeholder={placeholder}
    />
  );
};