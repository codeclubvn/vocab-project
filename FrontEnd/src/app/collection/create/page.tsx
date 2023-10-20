'use client'

import CollectionHeader from '@/components/collection/create/CollectionHeader'
import CollectionDnd from '@/components/collection/create/CollectionDnd'

export default function Page() {
  return (
    <div className='container'>
      <CollectionHeader />
      <CollectionDnd />
    </div>
  )
}
