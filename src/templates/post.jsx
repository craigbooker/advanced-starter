import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import styles from '../css/postTemplate.module.css';
import Image from 'gatsby-image';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default class PostTemplate extends React.Component {
	render() {
		const { data, pageContext } = this.props;
		const { slug } = pageContext;
		const postNode = data.blog;
		const { body } = postNode;
		const post = postNode.frontmatter;
		if (!post.id) {
			post.id = slug;
		}

		return (
			<Layout>
				<div>
					<Helmet>
						<title>{`${post.title} | ${config.siteTitle}`}</title>
					</Helmet>
					<SEO postPath={slug} postNode={postNode} postSEO />
					<div>
						<h1>{post.title}</h1>
						<div className={styles.content}>
							<MDXRenderer>{body}</MDXRenderer>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		blog: mdx(fields: { slug: { eq: $slug } }) {
			id
			body
			excerpt
			frontmatter {
				title
				slug
				date(formatString: "MMMM Do, YYYY")
				author
				cover {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				category
				tags
			}
			fields {
				slug
				date
			}
		}
	}
`;
