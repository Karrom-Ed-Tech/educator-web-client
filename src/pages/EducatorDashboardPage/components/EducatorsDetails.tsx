import DetailItem from "../../ProfilePage/components/DetailItem"

const EducatorDetailsData = [
    {
        title:"Name",
        content: "Anshu Joshi"
    },
    {
        title:"Qualification",
        content: "Btech CSE"
    },
    {
        title: "Affiliation proof",
        content: "View",
        view : true
    },
    {
        title: "Experience",
        content : "6",
    },
    {
        title: "Awards & Accolades",
        content: "ABC , XYZ etc"
    },
    {
        title:"Activities",
        tags :[
            "Classical Dance",
            "Western Dance"
        ]
    },
    {
        title: "Schedule",
        content : "",
        schedule : [
            {
                day : "Monday",
                startTime : "10:00 AM",
                endTime : "12:00 PM"
            },
            {
                day : "Tuesday",
                startTime : "10:00 AM",
                endTime : "12:00 PM"
            },
            {
                day : "Wednesday",
                startTime : "10:00 AM",
                endTime : "12:00 PM"
            },
            {
                day : "Thursday",
                startTime : "10:00 AM",
                endTime : "12:00 PM"
            }
        ]
    }
]

export default function EducatorDetails(){
    return(
            <div>
            <div className="bg-gray-500 bg-opacity-10 px-10 py-5 rounded-xl mt-5">
                <div>
                    <span className="text-2xl font-medium bg-primary text-white px-3 py-0.5 rounded-full">1</span>
                </div>
            {
                EducatorDetailsData.map((item , index)=>{
                    return(
                        <DetailItem content={item.content} title={item.title} tags={item.tags} view={item.view} techerDetails={true} schedule={item.schedule}/>
                        )
                    })
                }
                </div>
            </div>
    )
}