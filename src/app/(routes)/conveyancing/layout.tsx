import { metadata as conveyancingMetadata } from './metadata'

export const metadata = conveyancingMetadata

export default function ConveyancingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

