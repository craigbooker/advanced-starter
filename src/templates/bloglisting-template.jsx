import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/Title';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import styles from '../css/blog.module.css';
import './listing.css';

class BlogListingTemplate extends React.Component {
	renderPaging() {
		const { currentPageNum, pageCount } = this.props.pageContext;
		const prevPage =
			currentPageNum - 1 === 1 ? '/blog' : `/blog/page/${currentPageNum - 1}/`;
		const nextPage = `/blog/page/${currentPageNum + 1}/`;
		const isFirstPage = currentPageNum === 1;
		const isLastPage = currentPageNum === pageCount;

		return (
			<div className='paging-container'>
				{!isFirstPage && <Link to={prevPage}>Previous</Link>}
				{[...Array(pageCount)].map((_val, index) => {
					const pageNum = index + 1;
					return (
						<Link
							key={`listing-page-${pageNum}`}
							to={pageNum === 1 ? '/blog' : `/blog/page/${pageNum}/`}
						>
							{pageNum}
						</Link>
					);
				})}
				{!isLastPage && <Link to={nextPage}>Next</Link>}
			</div>
		);
	}

	render() {
		//const postEdges = this.props.data.allMarkdownRemark.edges;
		const { data } = this.props;
		return (
			<Layout>
				<Helmet title={config.siteTitle} />
				<SEO />
				<section className={styles.blog}>
					<Title title='Blog' subtitle='' />
					<div className={styles.center}>
						{data.posts.edges.map(({ node }) => {
							return <BlogCard key={node.id} blog={node} />;
						})}
					</div>
					<section>{this.renderPaging()}</section>
				</section>
			</Layout>
		);
	}
}

export default BlogListingTemplate;

/* eslint no-undef: "off" */
export const blogListingQuery = graphql`
	query BlogListingQuery($skip: Int!, $limit: Int!) {
		posts: allMdx(
			filter: { fileAbsolutePath: { regex: "/posts/" } }
			sort: { fields: [fields___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					fields {
						slug
						date
					}
					excerpt
					timeToRead
					frontmatter {
						title
						tags
						date
						cover {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	}
`;
