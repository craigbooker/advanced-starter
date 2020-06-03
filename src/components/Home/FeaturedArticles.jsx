import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import BlogCard from '../Blog/BlogCard';
import Title from '../Title';
import config from '../../../data/SiteConfig';
import styles from '../../css/blog.module.css';
import '../../css/listing.css';

class FeaturedArticles extends React.Component {
	render() {
		const { data } = this.props;
		//const { edges: posts } = data.posts;
		return (
			<section className={styles.blog}>
				<Title title='latest' subtitle='articles' />
				<div className={styles.center}>
					{data.posts.edges.map(({ node }) => {
						return <BlogCard key={node.id} blog={node} />;
					})}
				</div>
			</section>
		);
	}
}

/* eslint no-undef: "off" */
export default () => (
	<StaticQuery
		query={graphql`
			query FeaturedArticlesQuery {
				posts: allMdx(
					sort: { order: DESC, fields: [frontmatter___date] }
					limit: 3
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
		`}
		render={(data, count) => <FeaturedArticles data={data} count={count} />}
	/>
);
