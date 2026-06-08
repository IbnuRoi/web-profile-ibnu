import { useState, useEffect } from 'react'

const getLimit = () => {
    if (typeof window === 'undefined') return 9
    if (window.innerWidth >= 1024) return 9
    if (window.innerWidth >= 768) return 6
    return 4
}

const useLimit = () => {

    const [limit, setLimit] = useState(getLimit())

    useEffect(() => {
        setLimit(getLimit())

        const handleResize = () => setLimit(getLimit())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return limit
}

export default useLimit