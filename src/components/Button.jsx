function Button({ children, onclick }) {
  return (
    <button type="submit" className="button" onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
