import { useState, useEffect } from 'react'
import API from '../config/axios';
const useProjects = (page, limit) => {
    const [projects, setProjects] = useState({
        data: [],
        meta: {},
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true)
            setError(null)

            try {
                const { data } = await API.get(`/public/projects?page=${page}&limit=${limit}`)

                setProjects(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [page, limit])

    return { projects, loading, error }
}

export default useProjects