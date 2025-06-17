import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "SEO Title",
    description: "SEO Description",
    keywords: ['About Page', 'Rafael', 'información','...'],
};

export default function AboutPage(){
    return (    
        <span className="text-5xl">About</span>
    )
}