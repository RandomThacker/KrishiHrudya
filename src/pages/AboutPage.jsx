import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
;

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src='https://i.ibb.co/56jR8yk/32daac2b-b2b1-4a80-9c32-d799d920c5d9.jpg' alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Welcome to our online furniture store! We are a team of dedicated
            individuals who are committed to providing our customers with
            high-quality, stylish furniture at affordable prices. We believe
            that everyone deserves to have a comfortable and beautiful home,
            which is why we offer a wide range of furniture pieces to suit all
            styles and budgets. Our team carefully selects each item in our
            store to ensure that it meets our high standards for quality,
            durability, and design. We pride ourselves on our excellent customer
            service and offer free shipping and easy returns to ensure that our
            customers are completely satisfied with their purchase. Thank you
            for choosing our online furniture store, and we look forward to
            helping you create the home of your dreams!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
