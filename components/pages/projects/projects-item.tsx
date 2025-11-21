import Image from "next/image";
import Form from "next/form";

import projectPlaceholder from "@/public/project-placeholder.svg";

import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";


export default function ProjectsItem() {
  return (
    <li className="space-y-4">
      <Card className="p-0">
        <Image
          src={projectPlaceholder}
          alt="imagem genética para o projetos"
        />
      </Card>
      <Form action="/projects" className="relative">
        <Input
          id="project-title"
          className="peer text-xs"
          placeholder="Título do Projeto"
        />
        <Label
          htmlFor="project-title"
          className="peer-placeholder-shown:sr-only peer-focus:not-sr-only peer-focus:absolute absolute -top-2 left-2 text-xs bg-background px-1"
        >
          Título do Projeto
        </Label>
      </Form>
    </li>
  );
} 