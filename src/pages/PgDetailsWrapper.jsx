import { useParams } from "react-router-dom";
import PgDetails from "./PgDetails";
import pgBoysData from "../Data/PgBoysData";

function PgDetailsWrapper() {
  const { id } = useParams();
  const pg = pgBoysData.find(pg => pg.id === id);
  return <PgDetails pg={pg} />;
}

export default PgDetailsWrapper;