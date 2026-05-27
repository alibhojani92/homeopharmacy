"use client";

export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Admin Panel
        </h1>

        <button
          onClick={() => alert("WORKING")}
          style={{
            width: "100%",
            background: "red",
            color: "white",
            padding: "25px",
            border: "none",
            borderRadius: "20px",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          CLICK TEST
        </button>
      </div>
    </main>
  );
}
