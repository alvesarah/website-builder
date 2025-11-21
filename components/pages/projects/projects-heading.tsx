import { Button } from "@/components/ui/button";

export default function ProjectsHeading() {
  return (
    <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl mb-4 font-semibold">Projetos</h1>
          <p>Gerencie todos os projetos da sua conta</p>
        </div>
        <Button>Criar novo projeto</Button>
      </div>
  );
}