import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './index.css';

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<>
				<Helmet>
					<meta name='description' content={config.siteDescription} />
					<html lang='en' />
				</Helmet>
				<Navbar />
				{children}
				<Footer />
			</>
		);
	}
}
