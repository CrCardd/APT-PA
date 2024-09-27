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
        ]
    }
};

export default nextConfig;