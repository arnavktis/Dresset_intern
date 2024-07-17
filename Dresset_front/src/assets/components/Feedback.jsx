import React from "react";
import styled from "styled-components";
import graph from "../Img/graph.png";
import comment from "../Img/comment.png";

const styles = {
  heading: {
    size: "small",
    display: "flex",
    textAlign: "center",
    fontSize: "40px",
    justifyContent: "center",
  },
};

const FeedbackWeb = styled.div`
  isplay: flex;
  background-color: #f9f9f9;
  top: 380vh;
  // position: absolute;
  width: 100%;
  flex-direction: column;
`;

const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: 432px 359px;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  justify-content: space-evenly;
`;

const Feedback = () => {
  return (
    <FeedbackWeb>
      <p>What our customers are saying</p>
      <h1 style={styles.heading}>Our Customer Feedback</h1>
      <FeedbackContainer>
        <img
          src={graph}
          style={{ width: "auto 678.83px", height: "320px" }}
          alt="Graph"
        />
        <img
          src={comment}
          style={{ width: "auto 500px", height: "354px" }}
          alt="Comment"
        />
      </FeedbackContainer>
    </FeedbackWeb>
  );
};

export default Feedback;
