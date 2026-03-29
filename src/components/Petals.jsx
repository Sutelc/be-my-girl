import "./petals.css";

export default function Petals() {
  const petals = Array.from({ length: 25 });

  return (
    <div className="petal-container">
      {petals.map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 6 + Math.random() * 6 + "s",
            width: 8 + Math.random() * 8 + "px",
            height: 8 + Math.random() * 8 + "px"
          }}
        />
      ))}
    </div>
  );
}