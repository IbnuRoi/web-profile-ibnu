import { useState, useEffect } from "react";
import API from "@/lib/axios";

const useProjectDetail = (projectId) => {
  const [project, setProject] = useState({ data: null, meta: null, message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!projectId) return;

    const fetchDetailProject = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await API.get(`/public/projects/${projectId}`);
        setProject(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailProject();
  }, [projectId]);

  return { project, loading, error };
};

export default useProjectDetail;
