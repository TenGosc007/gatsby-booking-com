import React from "react";
import { Link, graphql } from "gatsby";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Layout from "components/Layout/layout";
import Input from "components/Input";
import InputDate from "components/InputDate";
import InputPeople from "components/InputPeople";
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
import Breadcrumb from "components/Breadcrumb";
import CustomArrow from "components/CustomArrow";
import Checkbox from "components/Checkbox";
import { responsive, responsiveSmall } from "utils/caruselConfig";

const IndexPage = ({ data }: any) => {
  return (
    <Layout
      pageTitle="Booking.com | Oficjalna strona | Najlepsze hotele i nie tylko"
      nav={true}
      number={1}
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
            <InputDate />
            <InputPeople />
            <Button toPage="/searchresults">Szukaj</Button>
          </div>

          <div className="input-area__check">
            <Checkbox>Podróżuję służbowo</Checkbox>
          </div>
        </div>
      </div>

      <div className="layout__container">
        <h3 className="section-header">Szukaj według rodzaju obiektu</h3>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          containerClass="card-area"
          customRightArrow={<CustomArrow type="right" />}
          customLeftArrow={<CustomArrow type="left" />}
        >
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "object-kind")
            .map((post: any) => (
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

      <div className="layout__container">
        <div className="card-area">
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "cites1")
            .map((post: any) => (
              <Card1
                key={post.node.id}
                title={post.node.frontmatter.title}
                number={post.node.frontmatter.number}
                rest={post.node.frontmatter.rest}
                imgUrl={post.node.frontmatter.imgUrl}
                subtitle={post.node.frontmatter.subtitle}
              />
            ))}
        </div>
        <div className="card-area">
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "cites")
            .map((post: any) => (
              <Card1
                key={post.node.id}
                title={post.node.frontmatter.title}
                number={post.node.frontmatter.number}
                rest={post.node.frontmatter.rest}
                imgUrl={post.node.frontmatter.imgUrl}
                subtitle={post.node.frontmatter.subtitle}
              />
            ))}
        </div>
      </div>

      <div className="layout__container">
        <h3 className="section-header section-header--second">
          Polska – odkryj to miejsce
        </h3>
        <p className="section-sub-header">
          Te popularne miejsca mają wiele do zaoferowania
        </p>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          containerClass="card-area"
          customRightArrow={<CustomArrow type="right" />}
          customLeftArrow={<CustomArrow type="left" />}
        >
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "discover")
            .map((post: any) => (
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

      <div className="layout__container">
        <h3 className="section-header">Domy, które goście kochają </h3>
        <Carousel
          responsive={responsiveSmall}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          containerClass="card-area"
          customRightArrow={<CustomArrow type="right" />}
          customLeftArrow={<CustomArrow type="left" />}
        >
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "houses")
            .map((post: any) => (
              <Card3
                key={post.node.id}
                title={post.node.frontmatter.title}
                number={post.node.frontmatter.number}
                rest={post.node.frontmatter.rest}
                imgUrl={post.node.frontmatter.imgUrl}
                extra={post.node.frontmatter.extra}
                subtitle={post.node.frontmatter.subtitle}
              />
            ))}
        </Carousel>
      </div>

      <div className="layout__container">
        <h3 className="section-header">
          Poszukaj inspiracji na kolejną podróż
        </h3>

        <div className="card-area">
          {data.allMarkdownRemark.edges
            .filter(
              (post: any) => post.node.frontmatter.type === "inspirations"
            )
            .map((post: any) => (
              <Link to={post.node.frontmatter.path} key={post.node.id}>
                <Card4
                  title={post.node.frontmatter.title}
                  imgUrl={post.node.frontmatter.imgUrl}
                  subtitle={post.node.frontmatter.subtitle}
                />
              </Link>
            ))}
        </div>
        <div className="card-area">
          {data.allMarkdownRemark.edges
            .filter(
              (post: any) => post.node.frontmatter.type === "inspirations1"
            )
            .map((post: any) => (
              <Link to={post.node.frontmatter.path} key={post.node.id}>
                <Card4
                  title={post.node.frontmatter.title}
                  imgUrl={post.node.frontmatter.imgUrl}
                  subtitle={post.node.frontmatter.subtitle}
                />
              </Link>
            ))}
        </div>
      </div>

      <div className="layout__container">
        <h3 className="section-header">
          Nawiąż kontakt z innymi podróżującymi
        </h3>

        <div className="card-area">
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "contact")
            .map((post: any) => (
              <Card2
                key={post.node.id}
                title={post.node.frontmatter.title}
                imgUrl={post.node.frontmatter.imgUrl}
                subtitle={post.node.frontmatter.rest}
                rest={post.node.frontmatter.subtitle}
                number={""}
                big={true}
              />
            ))}
        </div>
      </div>

      <div className="layout__container">
        <Carousel
          responsive={responsiveSmall}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          containerClass="card-area"
          customRightArrow={<CustomArrow type="right" />}
          customLeftArrow={<CustomArrow type="left" />}
        >
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "regions")
            .map((post: any) => (
              <Card5
                key={post.node.id}
                title={post.node.frontmatter.title}
                imgUrl={post.node.frontmatter.imgUrl}
                subtitle={post.node.frontmatter.subtitle}
                extra={post.node.frontmatter.extra}
              />
            ))}
        </Carousel>
      </div>

      <Breadcrumb />

      <div className="layout__container">
        <div className="card-area">
          {data.allMarkdownRemark.edges
            .filter((post: any) => post.node.frontmatter.type === "more")
            .map((post: any) => (
              <Card6
                key={post.node.id}
                title={post.node.frontmatter.title}
                imgUrl={post.node.frontmatter.imgUrl}
                subtitle={post.node.frontmatter.subtitle}
              />
            ))}
        </div>
      </div>

      <NewsLetter />
      <Bar />
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
            extra
          }
        }
      }
    }
  }
`;

export default IndexPage;
