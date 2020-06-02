import React from 'react';
import styles from '../../css/blog-card.module.css';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogCard = ({ blog }) => {
	const { title, date, author, slug } = blog.frontmatter;
	//const slug = blog.fields.slug;
	const img = blog.frontmatter.cover.childImageSharp.fluid;
	console.log('SLUG: ' + slug);

	return (
		<article className={styles.blog}>
			<div className={styles.imgContainer}>
				<Image fluid={img} className={styles.img} alt='single post' />
				<AniLink fade className={styles.link} to={`/blog/${slug}`}>
					read more
				</AniLink>
				<h6 className={styles.date}>{date}</h6>
			</div>
			<div className={styles.footer}>
				<h4>{title}</h4>
				<h4>{author}</h4>
				<h4>{blog.excerpt}</h4>
			</div>
		</article>
	);
};

export default BlogCard;
