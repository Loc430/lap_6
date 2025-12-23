import data from '../../data/data.json';

export default function BlogPost({ post }) {
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = data.map(p => ({ params: { id: p.id } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = data.find(p => p.id === params.id) || null;
  return { props: { post } };
}
