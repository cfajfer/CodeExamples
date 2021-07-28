import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Comments from '../../components/Comments';

import Twitter from '../../assets/socials/twitter.svg';
import Discord from '../../assets/socials/discord.svg';
import Facebook from '../../assets/socials/facebook.svg';
import Markdown from '../../components/Markdown';

import { strapiDate } from '../../utils/strapiDate';

const BlogPage = (props) => {
    let scale_image = props.article.image.width / 1000;

    console.log(props);
    return (
        <Layout>
            <Section name="section--overlay-large article" margin={true} blur={true} image="/borea.jpg">
                <div className="article__back-container">
                    <Link href="/blog">
                        <a className="article__back"><span>&#171;</span> Back to Blog</a>
                    </Link>
                </div>
                <div className="article__image-container">
                    <Image className="article__image" src={process.env.NEXT_PUBLIC_BLOG_API + props.article.image.url} width={1300} height={(props.article.image.width / scale_image) * .5} />
                </div>
                <div className="article__body">
                    <div className="article__socials">
                        <h5 className="article__socials-title">Share</h5>
                        <ul className="article__social-list">
                            <li className="article__social-item">
                                <a className="article__social-link" href="#">
                                    <Twitter />
                                </a>
                            </li>
                            <li className="article__social-item">
                                <a className="article__social-link" href="#">
                                    <Facebook />
                                </a>
                            </li>
                            <li className="article__social-item">
                                <a className="article__social-link" href="#">
                                    <Discord />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="article__main">
                        <div className="article__header">
                            <span className="article__author">
                                Written by {props.article.author.username}
                            </span>
                            <span className="article__date">{strapiDate(props.article.created_at, false)}</span>
                        </div>
                        <h1 className="article__title">{props.article.title}</h1>
                        <div className="article__content">
                            <Markdown>{props.article.body}</Markdown>
                        </div>
                    </div>
                </div>
                <Comments
                    comments={props.article.comments}
                    articleSlug={props.article.slug}
                    articleID={props.article.id} />
            </Section>
        </Layout>
    );
}
 
export default BlogPage;

export const getStaticProps = async (context) => {

    let response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/blogs/hytalehosting/${context.params.slug}`).then(res => res.json());

    return {
        props: {
            article: response
        },
        revalidate: 3
    }
}

export const getStaticPaths = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API}/blogs/hytalehosting`).then(res => res.json());

    let paths = response.map(cur => ({
        params: {
            slug: cur.slug
        }
    }));

    return {
        paths,
        fallback: false
    }
}