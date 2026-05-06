import { metadata as buyMetadata } from './metadata'

export const metadata = buyMetadata

export default function BuyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

