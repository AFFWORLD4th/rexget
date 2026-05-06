"use client"

import React from 'react'
import { getAllBuyProperties } from '@/src/api/buy'
import { BuyCard } from '@/src/view/buy/buyCard'
import PropertyCardSkeleton from '@/src/components/common/property-card-skeleton'

function BuyPreview() {
  const [properties, setProperties] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  const fetchProperties = async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({
        sort_by: 'total_count',
        sort_order: 'desc',
        page: '1',
        size: '6',
        status: 'ACTIVE',
        listing_type: 'SELL',
      })
      const res = await getAllBuyProperties(params.toString())
      setProperties(res?.properties || [])
    } catch (e) {
      setError('Failed to load properties')
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchProperties()
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-blue-900 mb-6">Featured Properties</h2>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <PropertyCardSkeleton key={i} />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {properties.slice(0, 6).map((item: any, index: number) => (
              <BuyCard key={item.id ?? index} data={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BuyPreview


