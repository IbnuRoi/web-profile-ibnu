import {useState, useEffect} from 'react'
import API from '../config/axios';

const useProjectDetail = (projectId) => {
    const [project, setProject] = useState({data: {}, message: ""})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchDetailProject = async() => {
        setLoading(true)
        setError(null)

        try {
            const {data} = await API.get(`/public/projects/${projectId}`)
            setProject(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
      }
      fetchDetailProject()
    }, [projectId])
    
    return { project, loading, error}
}

export default useProjectDetail