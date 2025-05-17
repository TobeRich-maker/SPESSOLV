import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Software Solutions", href: "#" },
        { name: "Mobile Apps", href: "#" },
        { name: "Web Development", href: "#" },
        { name: "Cloud Services", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "#contact" },
        { name: "Documentation", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
        { name: "Cookies", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container-apple">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link href="#home" className="text-2xl font-semibold inline-block mb-6">
              SPELSOLVE
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Innovative software solutions for businesses of all sizes. Transforming ideas into reality.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            Copyright © {currentYear} SPELSOLVE. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
