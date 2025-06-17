import { Metadata } from "next";


export const metadata:Metadata = {
    title: "Contact Title",
    description: "Esta es la pagina de contacto de la empresa",
};



export default function AboutPage(){
    return (
        <>
            <span className="text-5xl">Contact</span>
        </>
    )
}