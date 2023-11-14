import React from 'react';
import { Card } from '../../../shared/layout/Card';
import { Title } from '../../../shared/typography/Title';

const Greetings = () => {
  return (
    <Card style={{ marginTop: 20, padding: '20px 50px' }}>
      <Title variant="title">Welcome to my blog!</Title>
      <Title variant="text">
        <span>
          Dear Visitors,
          <br />
          <br />
          Welcome to my digital haven! I&apos;m thrilled to have you exploring my portfolio-blog. Here, you&apos;ll find
          a collection of my passions, creations, and endeavors. Feel free to wander through the virtual corridors and
          discover the stories and projects that make up my creative journey.
          <br />
          <br />
          Whether you&apos;re here out of curiosity or with a specific purpose, thank you for taking the time to delve
          into my world. I hope you find inspiration, information, or simply a moment of enjoyment within these pages.
          <br />
          <br />
          Your presence is genuinely appreciated. If you have any thoughts to share or questions to ask, I&apos;m all
          ears! Here&apos;s to a shared exploration of ideas and a celebration of creativity.
          <br />
          <br />
          Happy browsing!
          <br />
          Warm regards, Ibragim Ibragimov
        </span>
      </Title>
    </Card>
  );
};

export default Greetings;