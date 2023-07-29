import DetailItem from "../../ProfilePage/components/DetailItem";

const data = [
    {
        title:"Brand name of your academy",
        content: "A-Z classes"
    },
    {
        title:"Registered name of your academy",
        content: "A-Z classes Private Limited"
    },
    {
        title:"Academy owner name",
        content: "Anshu Joshi"
    },
    {
        title:"Owner Id",
        content: "0933"
    },
    {
        title:"GSTIN",
        content: "123456789"
    },
    {
        title:"Name of the bank of your academy ",
        content: "HDFC"
    },
    {
        title:"Account number",
        content: "123456789XXXX"
    },
    {
        title:"Establishment status of your academy",
        content : "SP"
    }
]
export default function CompanyDetails(){
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