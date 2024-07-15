import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const FAQItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const FAQHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${(props) => (props.isOpen ? "#ffaf4b" : "#f5f5f5")};
  cursor: pointer;
`;

const FAQNumber = styled.div`
  background-color: ${(props) => (props.isOpen ? "#ffaf4b" : "#f5f5f5")};
  color: ${(props) => (props.isOpen ? "#fff" : "#000")};
  padding: 5px;
  border-radius: 3px;
  margin-right: 10px;
`;

const FAQTitle = styled.div`
  flex: 1;
`;

const FAQToggle = styled.div`
  background-color: ${(props) => (props.isOpen ? "#007bff" : "#ffaf4b")};
  color: #fff;
  padding: 5px;
  border-radius: 3px;
`;

const FAQContent = styled.div`
  padding: 10px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: #fff;
`;

const Head = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      number: "01",
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
      content:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultricies. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam. Id placerat dui habitasse quisque nisl tincidunt facilisi mi id. Dictum et velit.",
    },
    {
      number: "02",
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    },
    {
      number: "03",
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    },
    {
      number: "04",
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    },
    {
      number: "05",
      title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
      content: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    },
  ];

  return (
    <FAQ>
      <Head>FREQUENTLY ASKED QUESTIONS</Head>
      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQHeader isOpen={openIndex === index} onClick={() => toggleFAQ(index)}>
              <FAQNumber isOpen={openIndex === index}>{faq.number}</FAQNumber>
              <FAQTitle>{faq.title}</FAQTitle>
              <FAQToggle isOpen={openIndex === index}>
                {openIndex === index ? "-" : "+"}
              </FAQToggle>
            </FAQHeader>
            <FAQContent isOpen={openIndex === index}>{faq.content}</FAQContent>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQ>
  );
};

export default FAQ;