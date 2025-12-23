import Link from 'next/link';
import data from '../data/data.json';

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.id}>
            <Link href={`/blog/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { posts: data } };
}
