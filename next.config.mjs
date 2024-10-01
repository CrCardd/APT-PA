/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return[
            {
                source: "/",
                destination: "/home"
                
            },
            {
                source: "/maths",
                destination: "/maths"

            },
            {
                source: "/reused-function",
                destination: "/general_function"

            },
            {
                source: "/cats",
                destination: "/catsPage"

            },
        ]
    }
};

export default nextConfig;