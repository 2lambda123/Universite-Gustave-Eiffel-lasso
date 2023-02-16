import { FC } from "react";
import { useT } from "@transifex/react";

import { config } from "../config";
import { useAppContext } from "../hooks/useAppContext";
import { Layout } from "./layout/index";
import { ProjectCard } from "../components/project/ProjectCard";
import { Projects } from "../components/projects";
import { Markdown } from "../components/Markdown";

export const HomePage: FC = () => {
  const t = useT();
  const [{ data }] = useAppContext();
  const higlightedProject = data.projects.slice(0, config.nbHiglightedProject);

  return (
    <Layout heading={t("Soundscape Mapping")}>
      <div className="row">
        <div className="col-12">
          <Markdown content={t("<center><br>Welcome to the LASSO platform. <br><br> This platform aims to highlight datasets related to the perception of sound environments and contrast them with standardized noise maps. <br> The datasets were collected in several projects described below.<br> <br> Enjoy your visit!</center>")} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>{t("Higlighted Projects")}</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4 pb-4 justify-content-center">
            {higlightedProject.map((project) => (
              <div className="col" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h2>{t("Find a project on the map")}</h2>
          <Projects />
        </div>
      </div>
    </Layout>
  );
};
