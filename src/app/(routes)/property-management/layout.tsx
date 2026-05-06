import { metadata as propertyManagementMetadata } from './metadata'

export const metadata = propertyManagementMetadata

export default function PropertyManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

