const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "rgba(0,0,0,0)",
        color: "white",
        right: "0px", // Adjust the position of the arrow as needed
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        zIndex: "1",
        display: "block",
        color: "white",
        background: "rgba(0,0,0,0)",
        left: "0px", // Adjust the position of the arrow as needed
      }}
      onClick={onClick}
    />
  );
};

export { CustomNextArrow, CustomPrevArrow };
