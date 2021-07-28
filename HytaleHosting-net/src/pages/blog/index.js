import Layout from "../../components/Layout";
import Section from "../../components/Section";

import BlogNav from '../../components/BlogNav';
import BlogCard from '../../components/BlogCard';
import Markdown from "../../components/Markdown";
import { strapiDate } from "../../utils/strapiDate";

const Blog = (props) => {
    return (
        <Layout>
            <Section name="section--overlay-large blog" margin={true} blur={true} image="/hytale-portal.jpg">
                <div className="heading-container">
                    <h2 className="heading-primary u-color-primary">Blog</h2>
                    <p className="heading-primary__sub">Hytale News, Network Updates, & More</p>
                </div>
                <div className="blog__container">
                    <div className="blog__side">
                        <BlogNav articles={props.articles} categories={props.categories} />
                    </div>
                    <div className="blog__main">
                        <ul className="blog__list">
                            {props.articles.map(cur => (
                                <BlogCard
                                title={cur.title}
                                tags={cur.tags}
                                image={process.env.NEXT_PUBLIC_BLOG_API + cur.image.url}
                                date={strapiDate(cur.created_at, false)}
                                link={`/blog/${cur.slug}`}
                                teaser={<Markdown>{cur.lead_paragraph}</Markdown>} />
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}

export default Blog;

export const getStaticProps = async (context) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/blogs/hytalehosting`).then(res => res.json());

    let categories = [];

    response.forEach(blog => {
        blog.tags.forEach(tag => {
            if(categories.findIndex(cur => tag.slug === cur.slug) === -1) {
                categories.push({
                    name: tag.name,
                    slug: tag.slug
                });
            }
        })
    })

    return {
        props: {
            categories,
            articles: response
        },
        revalidate: 10
    }
}