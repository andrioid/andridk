import React from "react";
import { graphql } from "gatsby";
import { Nav } from "../components/nav";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Layout } from "./layout";
import { SEO } from "../components/seo";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  if (!data) {
    return null;
  }
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  const { frontmatter } = post;
  const { cover } = frontmatter;
  return (
    <Layout slug={data.markdownRemark.fields.slug}>
      <SEO frontmatter={post.frontmatter} postData={post} />
      <Nav />
      <div className="pt-4 bg-gray-200 py-2 md:py-10 md:px-10 min-h-screen md:flex justify-center">
        <div className="bg-white max-w-4xl py-10 shadow px-5 lg:px-10 min-w-half-screen">
          {cover && <GatsbyImage image={getImage(cover.childImageSharp)} />}

          <div>
            <h1 className="text-gray-900 font-semibold text-xl md:text-3xl">
              {post.fields.title}
            </h1>
            <div className="text-sm text-gray-600 flex justify-start mb-4">
              <p>{post.fields.date}</p>
            </div>
            <div className="mb-4 ">
              {post.fields.tags &&
                post.fields.tags.map((t) => (
                  <span key={t} className="andri-tag text-xs">
                    {t}
                  </span>
                ))}
            </div>
          </div>

          <div className="mb-6"></div>

          <div
            className="markdown text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        title
        date
        tags
        slug
        socialcard
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(transformOptions: { fit: COVER })
          }
        }
      }
    }
  }
`;
