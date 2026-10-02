import ProjectDetail from "../index";

export async function generateMetadata({ params }) {
  const { projectId } = await params;
  return {
    title: `Project Details - ${projectId} | Ibnu Roihan`,
    description: "Explore project architecture, technical challenges, and live showcase.",
  };
}

export default async function ProjectDetailLayout({ params }) {
  const { projectId } = await params;
  return <ProjectDetail projectId={projectId} />;
}