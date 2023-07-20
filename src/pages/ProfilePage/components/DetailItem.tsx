import MaterialIcon from "../../../common/MaterialIcon";

interface DetailItemProps {
    title: string;
    content: string;
    view?: boolean;
}
export default function DetailItem({ title, content , view }:DetailItemProps) {
  const commonTextStyle = "text-md opacity-70 w-full basis-1/2";
  const commonFlexContainerStyle = "flex mt-10 items-start";

  return (
    <div className={commonFlexContainerStyle}>
      <div className="text-gray-400 text-md basis-1/2">{title}</div>
      <div className={`${commonTextStyle} flex items-center hover:text-secondary hover:cursor-pointer`}>
        {content}
        {
            view &&
            <MaterialIcon codepoint="e5d8" className="text-primary rotate-45" />
        }
      </div>
    </div>
  );
}