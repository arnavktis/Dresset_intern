import React, { useState } from "react";

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
    <div style={{ width: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        FREQUENTLY ASKED QUESTIONS
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} style={{ border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: openIndex === index ? '#ffaf4b' : '#f5f5f5',
              cursor: 'pointer',
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              style={{
                backgroundColor: openIndex === index ? '#ffaf4b' : '#f5f5f5',
                color: openIndex === index ? '#fff' : '#000',
                padding: '5px',
                borderRadius: '3px',
                marginRight: '10px',
              }}
            >
              {faq.number}
            </div>
            <div style={{ flex: 1 }}>{faq.title}</div>
            <div
              style={{
                backgroundColor: openIndex === index ? '#007bff' : '#ffaf4b',
                color: '#fff',
                padding: '5px',
                borderRadius: '3px',
              }}
            >
              {openIndex === index ? '-' : '+'}
            </div>
          </div>
          <div
            style={{
              padding: '10px',
              display: openIndex === index ? 'block' : 'none',
              backgroundColor: '#fff',
            }}
          >
            {faq.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;