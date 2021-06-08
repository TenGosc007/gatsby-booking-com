import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout/layout";
import NewsLetter from "components/NewsLetter";
import Bar from "components/Bar";

export default function Template({ data }: any) {
  const post = data.markdownRemark;

  return (
    <Layout number={0} pageTitle="blob booking.com">
      <div className="blog-post">
        <div
          className="blog-post__img"
          style={{ backgroundImage: `url("${post.frontmatter.imgUrl}")` }}
        ></div>

        <div className="blog-post__container">
          <div className="blog-post__path">
            <span>Artykuły</span> &#62; <span>Ciekawe miejsca</span> &#62;{" "}
            <span>{post.frontmatter.title}</span>
          </div>
          <span></span>
          <h1 className="blog-post__header">{post.frontmatter.title}</h1>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>

      <NewsLetter />
      <Bar />
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
`;
