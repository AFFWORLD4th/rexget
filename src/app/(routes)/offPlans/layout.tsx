import { metadata as offPlansMetadata } from './metadata'

export const metadata = offPlansMetadata

export default function OffPlansLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

