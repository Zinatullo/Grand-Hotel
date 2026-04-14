

"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
export default function CustomLink({
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
      className={
        "px-3 py-2 rounded-xl transition-all duration-200 text-sm whitespace-nowrap " +
        (isActive
          ? "bg-amber-100 text-amber-800 font-normal"
          : "text-gray-800 hover:bg-gray-100") +
        " " +
        (className ?? "")
      }
    >
      {children}
    </Link>
  )
}