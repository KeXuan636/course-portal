import { useParams } from "react-router-dom";
import { getModuleDetails } from "../api";

export default function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();

  const { name, description, speaker } = getModuleDetails({diplomaId, moduleId});

  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title}
      </span>
    </>
  );
}
