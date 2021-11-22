import React, { useEffect } from 'react'
import { useSWRConfig } from 'swr'

const RenderCache = () => {
  const { cache } = useSWRConfig();

  useEffect(() => {
    console.info(cache);
  }, [cache])
  
  return (
    <div>
      Here's the cached data...
    </div>
  )
}

export default RenderCache
