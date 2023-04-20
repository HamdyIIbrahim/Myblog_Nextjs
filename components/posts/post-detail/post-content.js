import PostHeader from "./post-header";
const Dummy_Posts = [
  {
    title: "Post 1 Next js",
    image: "pexels-marlon-schmeiski-5704362.jpg",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack raect apps and site with server side rendering ",
    data: "2023-4-19",
    slug: "getting-started-with-nextjs",
  }
];

function PostContent() {
  const imagePath = `/images/posts/${Dummy_Posts.slug}/${Dummy_Posts.image}`;
  return (
    <article>
      <PostHeader title={Dummy_Posts.title} image={imagePath} />
      {Dummy_Posts.excerpt}
    </article>
  );
}

export default PostContent;
