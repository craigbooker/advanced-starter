import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import styled from 'styled-components';

import Helmet from 'react-helmet';

import PageTitle from '../elements/PageTitle';
import config from '../../data/SiteConfig';

import Layout from '../layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';

const AboutPage = ({ data }) => {
	return (
		<Layout title='About'>
			<StyledHero>
				<Banner title='about' info='' />
			</StyledHero>
		</Layout>
	);
};

export default AboutPage;

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "images/defaultBcg.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
