import React from 'react';
import styles from '../../css/blog-card.module.css';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogCard = ({ blog }) => {
	const { title, cover, published } = blog;
	const slug = blog.fields.slug;
	console.log('SLUG: ' + slug);

	return (
		<article className={styles.blog}>
			<div className={styles.imgContainer}>
				{/* <Image fluid={cover.fluid} className={styles.img} alt='single post' /> */}
				<AniLink fade className={styles.link} to={`/blog/${slug}`}>
					read more
				</AniLink>
				<h6 className={styles.date}>{published}</h6>
			</div>
			<div className={styles.footer}>
				<h4>{title}</h4>
			</div>
		</article>
	);
};

export default BlogCard;
