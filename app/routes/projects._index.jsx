import React from "react";
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import ProjectShowcase from "~/components/ProjectShowcase/ProjectShowcase";
import { Footer } from '~/components/footer';
export const meta = () => {
  return baseMeta({
    title: 'Projects',
    description: `Project portfolio of ${config.name} — showcasing web development and design work.`,
  });
};

export default function Projects() {
  return (
    <div style={{ height: "100%"}}>
      <ProjectShowcase />
      <Footer />
    </div>
  );
}