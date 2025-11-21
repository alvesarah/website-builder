import Container from "@/components/core/container";
import ProjectsHeading from "@/components/pages/projects/projects-heading";
import ProjectsList from "@/components/pages/projects/projects-list";

export default function ProjectsPage() {
  return (
    <Container className="space-y-16">
      <ProjectsHeading />
      <ProjectsList />
    </Container>
  );
}