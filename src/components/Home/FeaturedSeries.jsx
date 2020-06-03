import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import SeriesCard from '../Series/SeriesCard';
import Title from '../Title';
import config from '../../../data/SiteConfig';
import styles from '../../css/blog.module.css';
import '../../css/listing.css';

class FeaturedSeries extends React.Component {
	render() {
		const { data } = this.props;

		return (
			<section className={styles.blog}>
				<Title title='article' subtitle='series' />
				<div className={styles.center}>
					{data.series.edges.map(({ node }) => {
						return <SeriesCard key={node.id} series={node} />;
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
			query FeaturedSeriesQuery {
				series: allMdx(
					filter: { fileAbsolutePath: { regex: "/series/" } }
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
		render={(data, count) => <FeaturedSeries data={data} count={count} />}
	/>
);
