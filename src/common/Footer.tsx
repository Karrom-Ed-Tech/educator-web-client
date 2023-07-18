import { Link } from "react-router-dom";
import MaterialIcon from "./MaterialIcon";

const socials = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/87/87390.png",
    title: "Instagram",
    link: "instagram.com",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553",
    title: "Twitter",
    link: "twitter.com",
  },
];

export default function Footer() {
  return (
    <section className="p-page flex py-12 overflow-hidden relative mt-5 widescreen:flex-col-reverse">
      {/* <div className="absolute top-0 left-0 w-[70%] bg-secondary -translate-x-[30%] rounded-full aspect-square -z-1" /> */}
      <div className="basis-1/2 flex flex-col gap-y-6 text-back">
        <Link to="/" className="text-3xl font-bold w-max">
          Karrom
        </Link>

        <p className="w-[60%] font-light text-back text-opacity-70">
          Karrom is the ultimate online platform that connects enthusiastic
          educators like you with students who are eager to learn and grow in
          various exciting activities.
        </p>

        <div className="font-medium flex flex-col gap-y-2 opacity-90">
          <p>support@karrom.edu</p>
          <p>+01 88888 88888</p>
        </div>
      </div>
      <div className="basis-1/2">
        <h2 className="text-front text-opacity-40 text-lg font-semibold">
          CONTACT
        </h2>
        <div className="flex gap-x-6 my-3">
          <Link
            to="wa.me/8888888888"
            className="flex items-center bg-[#15b346] text-white px-8 py-3 text-lg rounded-md"
          >
            <img
              src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png"
              alt="Whatsapp"
              className="w-[1em] mr-2 aspect-square brightness-0 invert"
            />
            Message Us
          </Link>
          <Link
            to="mailto:support@karrom.edu"
            className="flex items-center border-front border-2 border-opacity-20 duration-300 hover:border-opacity-100 px-8 py-3 text-lg rounded-md"
          >
            <MaterialIcon codepoint="e158" className="mr-2" />
            support@karrom.edu
          </Link>
        </div>

        <div className="flex mt-10 justify-between gap-x-28">
          <div className="">
            <h2 className="text-front text-opacity-40 text-lg font-semibold">
              SOCIALS
            </h2>
            <div className="flex flex-col gap-y-3 my-3">
              {socials.map((social, i) => (
                <Link key={i} to={social.link} className="flex items-center">
                  <img
                    className="w-[1em] aspect-square mr-2 brightness-0"
                    src={social.icon}
                    alt={social.title}
                  />{" "}
                  {social.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-front text-opacity-40 text-lg font-semibold">
              Learning Platform
            </h2>
            <div className="flex justify-between my-3">
              <img
                src="/images/get_it_on_google_play_store.png"
                alt="gps"
                className="w-[48%]"
              />
              <img
                src="/images/available_on_apple_app_store.png"
                alt="aas"
                className="w-[48%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
