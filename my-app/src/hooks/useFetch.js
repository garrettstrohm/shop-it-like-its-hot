import { useState, useEffect } from 'react'

function useFetch(api) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [content, setContent] = useState([])

    useEffect(() => {
        setIsLoaded(false);
        fetch(api)
            .then((r) => r.json())
            .then(data => {
                setContent(data)
                setIsLoaded(true)
            });
    }, []);
    return {
        content:content,
        isLoaded:isLoaded
    }
}

export default useFetch;