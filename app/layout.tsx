import "./globals.css"
import "./css-reset.css"
import { Inter, Dancing_Script, Baloo_2 } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--dancing-script" })
const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--baloo-2" })

export const metadata = {
    title: "Michael König",
    description: "Personal portfolio of Michael König",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${dancingScript.variable} ${baloo2.variable} dotted-bg`}>{children}</body>
        </html>
    )
}
