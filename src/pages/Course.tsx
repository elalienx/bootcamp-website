// Project files
import Introduction from "./course/Introduction";
import MoreInformation from "./course/MoreInformation";
import Process from "./course/Process";
import Projects from "./course/Projects";
import Technologies from "./course/Technologies";
import { useParams } from "react-router-dom";
import Backend from "data/course-backend.json";
import Frontend from "data/course-frontend.json";

export default function Course() {
  // Global state
  // @ts-ignore
  const { id } = useParams();

  // Properties
  const selectedCourse = id === "frontend" ? Frontend : Backend;
  const process = selectedCourse.process;
  const technologies = selectedCourse.technologies;
  const projects = selectedCourse.projects;

  return (
    <div id="course" className="page">
      <Introduction />
      <Process data={process} />
      <Technologies data={technologies} />
      <Projects data={projects} />
      <MoreInformation />
    </div>
  );
}
