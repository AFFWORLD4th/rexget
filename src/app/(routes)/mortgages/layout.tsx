import { metadata as mortgagesMetadata } from './metadata'

export const metadata = mortgagesMetadata

export default function MortgagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

