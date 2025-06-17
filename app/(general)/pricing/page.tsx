import { Metadata } from "next";


export const metadata:Metadata = {
    title: "Pricing Title",
    description: "Esta es la pagina de precios de mi servicio",
};


export default function AboutPage(){
    return (
        <>
            <span className="text-5xl">Pricing</span>
        </>
    )
}