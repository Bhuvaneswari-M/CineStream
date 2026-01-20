export default function Loader() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}

const styles = {
  container: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: "20px",
    height: "20px",
    border: "4px solid #ddd",
    borderTop: "4px solid #1e90ff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
