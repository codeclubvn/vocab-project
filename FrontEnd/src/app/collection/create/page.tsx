'use client'

import CollectionHeader from '@/components/collection/create/CollectionHeader'
import CollectionDnd from '@/components/collection/create/CollectionDnd'
// import { VocabForm } from '@/types/Vocab'
// import { useFormik } from 'formik'

export default function Page() {
  return (
    <div className='container'>
      <CollectionHeader />
      <CollectionDnd />
    </div>
  )
}
