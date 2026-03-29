export default function FloatingHearts() {
  const hearts = Array.from({ length: 10 });

  return (
    <div className="hearts-container">
      {hearts.map((_, i) => (
        <div
          key={i}
          className="heart-float"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 6 + Math.random() * 4 + "s",
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}