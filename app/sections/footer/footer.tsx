import Link from "next/link";

export default function Footer() {
    return <footer className="w-full h-16 mb-4 flex justify-center items-center">
        <Link href="/imprint" className="mr-8 text-lg">Imprint</Link>
        <a href="mailto:mail@mkoe.io" className="text-lg">Contact me</a>
    </footer>
}