import React from "react";
import { graphql } from "gatsby";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Layout from "components/Layout/layout";
import Input from "components/Input";
import Button from "components/Button";
import Accordion from "components/Accordion";
import Card1 from "components/Card1";
import Card2 from "components/Card2";
import Card3 from "components/Card3";
import Card4 from "components/Card4";
import Card5 from "components/Card5";
import Card6 from "components/Card6";
import NewsLetter from "components/NewsLetter";
import Bar from "components/Bar";
import Footer from "components/Footer";
import Breadcrumb from "components/Breadcrumb";
import CustomArrow from "components/CustomArrow";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const IndexPage = ({ data }: any) => {
  return (
    <Layout
      pageTitle="Booking.com | Oficjalna strona | Najlepsze hotele i nie tylko"
      nav={true}
    >
      <Accordion
        title="Koronawirus (COVID-19) - wsparcie"
        link={{
          to: "https://www.gov.pl/web/koronawirus",
          text: "Dowiedz się więcej",
        }}
      >
        <>
          Sprawdź ograniczenia dotyczące podróżowania. Podróżowanie może być
          dozwolone tylko w określonych celach, a podróżowanie zwłaszcza w
          celach turystycznych może nie być dozwolone.
        </>
      </Accordion>

      <div className="input-area">
        <div className="input-area__container">
          <h2 className="input-area__header">
            Znajdź oferty hoteli, domów i wielu innych obiektów...
          </h2>
          <p className="input-area__sub-header">
            Od przytulnych domków wiejskich po modne apartamenty w mieście
          </p>

          <div className="input-area__area">
            <Input />
            <Input />
            <Input />
            <Button />
          </div>

          <div className="input-area__check">
            <input id="trip" name="trip" type="checkbox" />
            <label htmlFor="trip">Podróżuję służbowo </label>
          </div>
        </div>
      </div>

      <div className="layout__container">
        <h3 className="section-header">Szukaj według rodzaju obiektu</h3>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          keyBoardControl={true}
          containerClass="card-area"
          customRightArrow={<CustomArrow type="right" />}
          customLeftArrow={<CustomArrow type="left" />}
        >
          {data.allMarkdownRemark.edges.map((post: any) => (
            <Card2
              key={post.node.id}
              title={post.node.frontmatter.title}
              number={post.node.frontmatter.number}
              rest={post.node.frontmatter.rest}
              imgUrl={post.node.frontmatter.imgUrl}
            />
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query CardObjectKind {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            type
            path
            imgUrl
            subtitle
            number
            rest
          }
        }
      }
    }
  }
`;

export default IndexPage;
