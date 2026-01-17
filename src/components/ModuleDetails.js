import { useParams } from "react-router-dom";
import { getModuleDetails } from "../api";

export default function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();

  const module = getModuleDetails(moduleId, diplomaId);

  if (!module) {
    return <p>Module not found.</p>;
  }

  const { name, description, speaker } = module;

  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>

      <h4>{speaker.name}</h4>
      <span>{speaker.title}</span>
    </>
  );
}
