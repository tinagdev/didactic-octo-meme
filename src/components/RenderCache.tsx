import React, { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

const RenderCache = () => {
  const [articles, setArticles] = useState([]);
  const { cache } = useSWRConfig();

  useEffect(() => {
    console.info("cache: ", cache);
    if (cache) {
      setArticles(cache);
    }
  }, [cache])
  
  return (
    <div>
      Here's the cached data...
      {articles.length && articles.map(a => (
        <li key={a.createdAt}>{a.title}</li>
      ))}
    </div>
  );
}

export default RenderCache
