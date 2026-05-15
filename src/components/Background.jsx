export default function Background() {
  return (
    <div className="bg-mesh">
      {/* Blobs */}
      <div
        className="blob animate-blob"
        style={{
          width: "600px", height: "600px",
          background: "#6c63ff",
          top: "-10%", left: "-10%",
          animationDelay: "0s",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: "500px", height: "500px",
          background: "#00d4ff",
          top: "40%", right: "-10%",
          animationDelay: "3s",
        }}
      />
      <div
        className="blob animate-blob"
        style={{
          width: "400px", height: "400px",
          background: "#ff6b9d",
          bottom: "10%", left: "30%",
          animationDelay: "5s",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
