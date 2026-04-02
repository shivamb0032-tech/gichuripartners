import './globals.css'
import { config } from "@fortawesome/fontawesome-svg-core";  
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export const metadata = {
  title: 'Best Accounting Services in Kenya | Gichuri & Partners',
  description: "Top accounting services in Kenya , reliable bookkeeping, financial reporting, tax compliance, payroll, and advisory support for businesses of all sizes.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       
        <main>{children}</main>
       
      </body>
    </html>
  )
}


