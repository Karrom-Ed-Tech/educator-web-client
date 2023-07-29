import MaterialIcon from "../../../common/MaterialIcon";

interface scheduleProps {
  day: string;
  startTime: string;
  endTime: string;
}
interface DetailItemProps {
  title: string;
  content?: string;
  view?: boolean;
  tags?: string[];
  video?: string;
  techerDetails?: Boolean;
  schedule?: scheduleProps;
  images?: string[];
}

export default function DetailItem({
  title,
  content,
  view,
  tags,
  video,
  techerDetails,
  schedule,
  images,
}: DetailItemProps) {
  const commonTextStyle = "text-md opacity-70 w-full basis-1/2";
  const commonFlexContainerStyle = `flex mt-10 items-start ${
    techerDetails && "mt-4"
  }`;

  return (
    <div className={commonFlexContainerStyle}>
      <div className="text-gray-400 text-md basis-1/2">{title}</div>
      <div
        className={`${commonTextStyle} flex items-center hover:text-secondary hover:cursor-pointer`}
      >
        {images && (
          <div className="grid grid-cols-2 gap-5">
            {images.map((item, index) => (
              <div key={index}>
                <img
                  src={item}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}
        {schedule && (
          <div className="flex flex-col gap-y-3">
            <div>
              <div className="text-sm text-gray-600">MONDAY</div>
              <div>18:00-19:00</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">MONDAY</div>
              <div>18:00-19:00</div>
            </div>
          </div>
        )}
        {video ? (
          <iframe
            title={title}
            width="100%"
            height="315"
            src={video.replace("watch?v=", "embed/")}
            allowFullScreen
          />
        ) : (
          <>
            {tags
              ? tags.map((tag, index) => (
                  <div
                    key={index}
                    className="mr-2 bg-gray-200 px-2 py-1 rounded"
                  >
                    {tag}
                  </div>
                ))
              : content}
            {view && (
              <MaterialIcon
                codepoint="e5d8"
                className="text-primary rotate-45"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
