import { Link } from "react-router-dom";
import MaterialIcon from "../../../common/MaterialIcon";

interface tableDataProps {
    name: string,
    joinDate: string
}

const tableHead : string[] = [
    "Name",
    "Join Date",
    "View Details",
    "Edit Details"
]

const tableData : Array<tableDataProps> = [
    {
        name: "John Doe",
        joinDate: "12/12/2023",
    },
    {
        name: "Katty P",
        joinDate: "24/01/2022",
    },
    {
        name: "Anshu Joshi",
        joinDate: "12/04/2021",
    },
    {
        name: "Spandan Bharve",
        joinDate: "12/08/2020",
    }
]

export default function ViewEducators() {
  return (
    <div className="flex text-center justify-start align-center basis-3/4 w-full">
    <table className="w-full min-w-max table-auto text-left">
     <thead>
       <tr>
         {tableHead.map((head:string , index:Number) => (
           <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
             <div
               className="font-normal leading-none opacity-70"
             >
               {head}
             </div>
           </th>
         ))}
       </tr>
     </thead>

     <tbody>
       {tableData.map((data : tableDataProps, index) => {
         const isLast = index === tableData.length - 1;
         const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

         return (
           <tr>
             <td className={classes}>
               <div className="font-normal">
                 {data.name}
               </div>
             </td>
             <td className={classes}>
               <div className="font-normal">
                 {data.joinDate}
               </div>
             </td>
             <td className={classes}>
                 <Link to='/admin/view' target="_blank">
               <div className="font-medium flex flex-x-2">
                 View{" "}<MaterialIcon codepoint="e941" className="text-primary -rotate-45"/>
               </div>
                 </Link>
             </td>
             <td className={classes}>
                 <Link to='/admin/edit' target="_blank">
               <div className="font-medium flex flex-x-2">
                 Edit{" "}<MaterialIcon codepoint="e941" className="text-primary -rotate-45"/>
               </div>
                 </Link>
             </td>
           </tr>
         );
       })}
     </tbody>
     </table>
 </div>
  )
}
