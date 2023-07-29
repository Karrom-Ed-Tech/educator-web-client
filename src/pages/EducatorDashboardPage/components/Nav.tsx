import { useState } from "react"
import MaterialIcon from "../../../common/MaterialIcon"
import CompanyDetails from "./CompanyDetails";
import Hero from "./Hero";
import ContactDetails from "./ContactDetails";
import EducatorDetails from "./EducatorsDetails";
import Gallery from "./Gallery";

const navItems = [
    {
        name: 'Company details',
        code : 'ea40',
        component : <CompanyDetails/>
    },
    {
        name:'Contact details',
        code : 'e0b0',
        component : <ContactDetails/>
    },
    {
        name: 'Educator Details',
        code : 'e7ef',
        component : <EducatorDetails/>
    },
    {
        name: 'Gallery',
        code: 'efa2',
        component : <Gallery/>
    }
]
export default function Nav(){
    const [selectedItem , setSelectedItem] = useState(0);
    return (
        <div className="my-10">
            <div className="flex gap-x-9">
                {navItems.map((item , index)=>{
                    return(
                        <div className={`flex items-center gap-x-2 text-l cursor-pointer text-gray-400 ${index==selectedItem && "text-primary"}`} onClick={()=>{
                            setSelectedItem(index);
                        }}>
                            <MaterialIcon codepoint={item.code}className=""/>
                            <div className={`${index==selectedItem && " underline underline-offset-8"}`}>{item.name}</div>
                        </div>
                    )
                }
                )}
            </div>
            <div className="mt-20">
            {
                navItems[selectedItem].component
            }
            </div>
        </div>
    )
}