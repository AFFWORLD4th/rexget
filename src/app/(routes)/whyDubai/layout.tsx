import { metadata as whyDubaiMetadata } from './metadata'

export const metadata = whyDubaiMetadata

export default function WhyDubaiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

