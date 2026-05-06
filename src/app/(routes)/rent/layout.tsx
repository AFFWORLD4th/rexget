import { metadata as rentMetadata } from './metadata'

export const metadata = rentMetadata

export default function RentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

