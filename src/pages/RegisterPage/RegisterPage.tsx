import { useSearchParams } from "react-router-dom";

export default function RegisterPage() {
  const [query] = useSearchParams();

  return <div>{query.get("email")}</div>;
}
