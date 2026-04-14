

"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function CustomLinkFooter({
  href,
  className,
  children,
  onClick
}: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const currentPath = usePathname()
  const isActive = currentPath === href

  return (
    <Link
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}