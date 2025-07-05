import "./globals.css"
import "./css-reset.css"
import { Baloo_2, Akaya_Kanadaka } from "next/font/google"
import { ThemeProvider } from "./lib/theme-provider"

const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--baloo-2" })
const akaya = Akaya_Kanadaka({
  subsets: ["latin"],
  variable: "--heading-font",
  weight: "400",
})

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${akaya.variable} ${baloo2.variable} dotted-bg bg-background text-foreground transition-colors`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
