import { Link } from "react-router-dom";
import MaterialIcon from "../../../common/MaterialIcon";
import DetailItem from "./DetailItem";

export default function AdditionalDetails() {
  return (
    <div className="p-page mt-10">
      <div className="flex items-center text-2xl gap-x-5">
        <MaterialIcon codepoint="f009" className="text-primary" />
        Additional Details
        <div className="w-3/5 h-0.5 bg-primary"></div>
      </div>

      <DetailItem
        title="Address"
        content="1025 McCullough Drive, West Sacramento, Mississippi, 25474-4179, 1-442-428-5096 x0914, 974-846-4531 x47842"
      />

      <DetailItem title="Phone No." content="7008513XXX" />

      <DetailItem title="Experience" content="7 years" />

      <DetailItem title="Qualification" content="Btech CSE" />

      <DetailItem title="Degree" content="View" view={true} />

      <DetailItem title="Affiliation Proof" content="View" view={true} />

      <DetailItem
        title="Activities"
        tags={["Classical Dance", "Western Dance"]}
      />
      <DetailItem
        title="Tour of the institute"
        video="https://www.youtube.com/watch?v=QdLLjDbi75A"
      />
      <div className="text-center my-20 flex items-center justify-center gap-x-5">
        <Link
          to="/register"
          className="p-3 px-5 border text-sm font-medium border-front duration-300 hover:bg-front hover:text-back flex items-center gap-x-3"
        >
          Approve <MaterialIcon codepoint="e876" />
        </Link>
        <Link
          to="/register"
          className="p-3 px-5 border text-sm font-medium border-front duration-300 hover:bg-front hover:text-back flex items-center gap-x-3"
        >
          Reject <MaterialIcon codepoint="e14c" />
        </Link>
      </div>
    </div>
  );
}
