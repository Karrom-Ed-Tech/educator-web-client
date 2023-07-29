import DetailItem from "../../ProfilePage/components/DetailItem"

const data = [
    {
        title : "Contact number of the owner",
        content : "9885647XXX"
    },
    {
        title : "Contact number of the center",
        content : "9755537XXX"
    },
    {
        title : "Any alternate contact number",
        content : "9463282XXX"
    }
]

export default function ContactDetails(){
    return(
        <div className="mt-5">
           {
            data.map((item , index)=>{
                return(
                    <DetailItem key={index} title={item.title} content={item.content}/>
                )
            })
           }
        </div>
    )
}