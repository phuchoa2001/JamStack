import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


export default function Home({ products }) {
    const router = useRouter();

    const [data, setData] = useState({});
    const [isLoading, setIsLoaing] = useState(true);

    const { slug } = router.query;

    const fetchApi = async () => {
        setIsLoaing(true)
        const res = await fetch(`https://6321206282f8687273ad17ab.mockapi.io/test/products/${slug}`);
        const products = await res.json();
        setData(products);
        setIsLoaing(false);
    }
    useEffect(() => {
        if (slug) {
            fetchApi();
        }
    }, [slug])
    const Random = Math.random();
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <>
            <h1 className="mb-32 text-7xl font-extrabold text-black">
                No Seo
            </h1>
            <h3>Số ngẫu nhiên : {Random}</h3>
            <Link href="/">
                <a>Go Home</a>
            </Link>

            <h1 className="block text-9xl font-extrabold bg-gradient-to-br from-indigo-600 to-purple-800 bg-clip-text text-transparent">
                {data.name}
            </h1>
            <img
                src={data.avatar}
                alt="Picture of the author"
                width={200}
                height={200}
            />
        </>
    );
}

/**
 * Get all of the posts and pass it as the "posts" prop
 */
