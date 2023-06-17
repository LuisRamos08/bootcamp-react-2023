import { useState, useRef, useEffect } from "react";

const styles = {
  container: {
    minWidth: "300px",
    padding: "20px",
    marginTop: "20px",
    background: "#111",
  },
  banner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
    background: "purple",
    width: "100%",
    height: "40px",
    color: "white",
    cursor: "pointer",
  },
  button: {
    background: "green",
  },
  collect: {
    marginTop: "40px",
    padding: "10px",
    background: "#333",
    lineHeight: "10px",
  },
};

const Analytics = () => {
  const [isShowPage, setIsShowPage] = useState(false);

  return (
    <div>
      <h2>Analytics</h2>
      <button onClick={() => setIsShowPage(!isShowPage)}>
        show / hide Page
      </button>
      {isShowPage && <AnyPage />}
    </div>
  );
};

export default Analytics;

function AnyPage() {
  const [counter, setCounter] = useState(0);

  const clicks = useRef({ topBanner: 0, bottomBanner: 0, counterButton: 0 });

  const handleCounterClick = () => {
    setCounter((prev) => prev + 1);
    handleCollect("counterButton");
  };

  const handleCollect = (clickedElement) => {
    clicks.current[clickedElement] = clicks.current[clickedElement] + 1;
    console.log(clicks.current);
  };

  const sendAnalytics = () => {
    console.log("ENVIO ANALITICAS:", clicks.current);
  };

  useEffect(()=>{
    return ()=>{ 
        sendAnalytics()
    }
  },[])

  return (
    <div style={styles["container"]}>
      <h2>Any Page</h2>

      <div style={styles["banner"]} onClick={() => handleCollect("topBanner")}>
        <h5>top banner</h5>
      </div>

      <div>
        <h3>{counter}</h3>
        <button style={styles["button"]} onClick={handleCounterClick}>
          Add
        </button>
      </div>

      <div
        style={styles["banner"]}
        onClick={() => handleCollect("bottomBanner")}
      >
        <h5>bottom banner</h5>
      </div>

      <div style={styles["collect"]}>
        <h4>Clicks to Analytics</h4>
        <p>topBanner = {clicks.current.topBanner}</p>
        <p>bottomBanner = {clicks.current.bottomBanner}</p>
        <p>counterButton = {clicks.current.counterButton}</p>
      </div>
    </div>
  );
}
