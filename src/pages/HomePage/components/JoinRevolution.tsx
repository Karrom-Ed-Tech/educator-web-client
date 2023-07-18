export default function JoinRevolution() {
  return (
    <div className="flex flex-col items-start p-page py-20 bg-primary bg-opacity-10 mt-20 font-medium">
    <div>
        <div className="text-4xl leading-tight font-raleway">
            Want to be a part of the <span className="text-primary font-extrabold">REVOLUTION</span> ?
        </div>
    </div>
    <div className="flex flex-row-reverse items-center justify-between mt-16 w-full font-extralight widescreen:flex-col-reverse">
    <div className="basis-1/2  widescreen:mt-7">
    Karrom is an online learning platform for students 5-18. We produce on-demand teaching videos in various subject areas .<br/>
    We are building our team of talented teachers. If you have a passion for teaching and are ready for talent to reach thousands.

    <div className="my-10 font-bold text-secondary underline underline-offset-8 hover:text-primary hover:cursor-pointer">
        Apply to be one today
    </div>
    <button className="text-white text-base font-white bg-black px-5 py-2 rounded-lg font-bold">
    Join Now!
</button>

    </div>

    <div className="w-6/12 mr-10 widescreen:w-11/12 shadow-lg widescreen:mr-0">
  {/* <img src="/images/dance-teach.jpg" className=" border-secondary"/> */}
    <video className="w-full rounded-lg border-r-4 border-b-4 border-primary" autoPlay loop>
    <source src="/videos/Homevideo.mp4" className="rounded-lg" type="video/mp4"/>
    </video>
    </div>
  </div>
</div>
  )
}
