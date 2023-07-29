import MaterialIcon from "../../../common/MaterialIcon";
import DetailItem from "../../ProfilePage/components/DetailItem";

export default function Hero() {
  return (
    <div className="flex mt-10 item-start justify-start">
      <div className="">
        <img
          src="/images/dance-teach.jpg"
          className="w-128 border-b-4 border-r-4 border-primary"
        />
      </div>
      <div className="w-full ml-40 flex flex-col justify-between">
        <div className="tracking-widest text-xs text-gray-400">ABOUT</div>
        <div className="flex items-center mt-3 justify-start">
          <div className="text-xl opacity-70 basis-1/4">Okeanas Technologies</div>
          <div className="text-xs flex items-center ml-32 text-gray-400 gap-x-3 ">
            <MaterialIcon codepoint="e0c8" className="text-primary" />
            Gwalior , Madhya Pradesh
          </div>
        </div>
        <div className="text-xs text-gray-500">Okeanas private limited</div>
        <div className="tracking-widest text-xs text-gray-400 mt-5">
          Website
        </div>
        <div className="flex items-center mt-3">
          <div className="text-md opacity-70 basis-1/4">
            Website link
          </div>
          <div className="text-xs flex items-center ml-32 text-gray-400 gap-x-3 hover:text-secondary  hover:cursor-pointer">
            <MaterialIcon codepoint="e894" className="text-primary " />
            Visit here!
          </div>
        </div>
        <div className="tracking-widest text-xs mt-5 text-gray-400">RATINGS</div>
          <div className="flex items-center mt-3">
            <div className="text-l opacity-70 flex">
              {[1, 2, 3, 4, 5].map((item, idx) => {
                return (
                  <MaterialIcon codepoint="e838" className="text-primary" />
                );
              })}
              <div className="ml-2">
              5/5
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
