import React from 'react'

import CollectionPostman from '@/assets/collectionPostman.json'
import { Button } from '@ionext-ui/react'

const DownloadButtonCollectionPostman = () => {
  const downloadJson = () => {
    const jsonData = JSON.stringify(CollectionPostman)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'data.json'
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <Button variant="contained" onClick={downloadJson}>
      Baixar collection Postman
    </Button>
  )
}

export default DownloadButtonCollectionPostman
