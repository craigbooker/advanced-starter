import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Title from '../Title';
import styles from '../../css/about.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const getAboutImage = graphql`
	query aboutHeaderImage {
		aboutImage: file(relativePath: { eq: "defaultBcg.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const AboutHeader = () => {
	const { aboutImage } = useStaticQuery(getAboutImage);
	return (
		<section className={styles.about}>
			<Title title='featured' subtitle='articles' />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						{/* <img src={img} alt="about company" /> */}
						<Img
							fluid={aboutImage.childImageSharp.fluid}
							alt='awesome landscape'
						/>
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>explore the difference</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
						excepturi quas atque?
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
						excepturi quas atque?
					</p>

					<AniLink fade to='/about' className='btn-primary'>
						read more
					</AniLink>
				</article>
			</div>
		</section>
	);
};

export default AboutHeader;
