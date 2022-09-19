import Link from "next/link";
import Image from 'next/image';

import { useRouter } from "next/router";

export default function Post({ products }) {
  const router = useRouter({});

  if(router.isFallback) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>

      <h1 className="block text-9xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-800 bg-clip-text text-transparent">
        {products.name}
      </h1>
      <img
        src={products.avatar}
        alt="Picture of the author"
        width={200}
        height={200}
      />
    </div>
  );
}

// STEP 1: tell next.js how many pages to generate
export async function getStaticPaths() {
  const res = await fetch("https://6321206282f8687273ad17ab.mockapi.io/test/products");
  const products = await res.json();
  return {
    paths: products.map((product) => ({
      params: { slug: product.id },
    })),
    fallback: "blocking", // or false // See the "fallback" section below
  };
}

// STEP 2: tell next.js what content to get for a single page
export async function getStaticProps({ params }) {
  const res = await fetch(`https://6321206282f8687273ad17ab.mockapi.io/test/products/${params.slug}`);
  const products = await res.json();
  return {
    props: { products },
    revalidate: 1
  };
} 
