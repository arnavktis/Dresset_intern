import React from "react";
import styled from "styled-components";
import graph from "../Img/graph.png"; // Ensure this path is correct relative to your file
import comment from "../Img/comment.png";

const styles = {
    heading: {
        size: 'small',
        display: 'flex',
        textAlign: 'center',
        fontSize: '40px',
        justifyContent: 'center',
    },
};
const feedbackweb = styled.div`
  background-color: #f9f9f9;
  top: 89vh;
  position: relative;
`;
const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 50px;
  gap: 10px;
  padding: 10px;
//   background-color: #f9f9f9;
  border: 1px solid #ddd;2
  border-radius: 5px;
`;


const Feedback = () => {
  return (
    <feedbackweb>
        <p>Whats our customer saying</p>
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
      </feedbackweb>
  );
};

export default Feedback;
