import Link from "next/link";

const Hero = () => {
    return (
        
              <section className="relative h-[450px] bg-cover bg-center bg-[url('/slider1.jpg')]">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative py-20 md:py-24">
            <div className="relative">
                <h1 className="text-[35px] text-purple-700 font-extrabold tracking-tight sm:text-5xl">
                    Welcome to Store
                </h1>
                <p className="mt-6 text-xl max-w-3xl text-white font-bold md:text-sky-400">
                    Discover our range of products and enjoy 
                    <br />
                    a seamless shopping experience.
                </p>
                <div className="mt-8">
                    <Link
                        href="/products"
                        className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-md font-medium hover:bg-yellow-600"
                    >
                        Shop Now
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>

    );
};

export default Hero;