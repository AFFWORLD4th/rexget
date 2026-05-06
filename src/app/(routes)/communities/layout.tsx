import { metadata as communitiesMetadata } from './metadata'

export const metadata = communitiesMetadata

export default function CommunitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

