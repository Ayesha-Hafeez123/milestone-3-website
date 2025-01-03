"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const ProductsPage = () => {
    const [data, setData] = useState<Product[] | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Fetching API For Products Data
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const viewSingleProduct = (productId: number) => {
        router.push(`/products/${productId}`); // Navigate to the single product page
    };

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
                {!data ? (
                    <div className="text-center">
                        <p className="text-3xl">Loading products....</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.map((product) => (
        <div
            key={product.id}
            className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 hover:scale-105 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform"
        >
            <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={1000}
                    height={1000}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-30"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h2>
            <p className="text-lg text-gray-700 mb-4">${product.price.toFixed(2)}</p>
            <button
                onClick={() => viewSingleProduct(product.id)}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all"
            >
                View Product
            </button>
        </div>
    ))}
</div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;