import { metadata as contactUsMetadata } from './metadata'

export const metadata = contactUsMetadata

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

