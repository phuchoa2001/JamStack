import Link from "next/link";

export default function Home({ products }) {
  const Random = Math.random();
  return (
    <>
      <h1 className="mb-32 text-7xl font-extrabold text-black">
        Xin chào đến với blog tĩnh
      </h1>
      <h3>Số ngẫu nhiên : {Random}</h3>

      <div className="space-y-16">
        {products.map(item => (
          <Link key={item.id} href={`/${item.id}`} >
            <a style={{ display: "block", color: "#000" }}>{item.name}</a>
          </Link>
        ))}
      </div>
      <h1 className="mb-32 text-7xl font-extrabold text-black">
        Xin chào đến với blog no Seo động
      </h1>
      <div className="space-y-16">
        {products.map(item => (
          <Link key={item.id} href={`/product/${item.id}`} >
            <a style={{ display: "block", color: "#000" }}>{item.name}</a>
          </Link>
        ))}
      </div>
    </>
  );
}

/**
 * Get all of the posts and pass it as the "posts" prop
 */
export async function getStaticProps() {
  const res = await fetch("https://6321206282f8687273ad17ab.mockapi.io/test/products");
  const products = await res.json();
  return { props: { products } };
}
