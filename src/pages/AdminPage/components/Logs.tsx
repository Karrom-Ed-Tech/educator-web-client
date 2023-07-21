import { Link } from "react-router-dom";

interface tableDataProps{
    name:string,
    id:string,
    timestamp:string,
    context:string
}

const tableHeader:string[] = [
    "Name",
    "id",
    "Timestamp",
    "Context"
]
const tableData : Array<tableDataProps> = [
    {
        name:"John Doe",
        id:"1234",
        timestamp:"12:00 PM",
        context:"Lorem ipsum dolor sit amet, consect"
    },
    {
        name:"John Doe",
        id:"1234",
        timestamp:"12:00PM",
        context:"Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consect"
    }
]

export default function Logs() {
    return (
      <div className="flex text-center justify-start items-start basis-3/4 w-full flex-col">
       <div className="mb-5">
          <Link
            to="/admin"
            className="p-2 px-3 border text-sm font-medium rounded-lg border-front duration-300 hover:bg-front hover:text-back mobile:mr-5"
          >
            Download logs
          </Link>
        {/* <div className="border-b w-full my-5 h-0.5 bg-secondary"></div> */}
        </div>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHeader.map((head, index) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <div className="font-normal leading-none opacity-70">
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
  
          <tbody>
            {tableData.map((data, index) => {
              const classes = "p-4 border-b border-blue-gray-50";
  
              return (
                <tr key={index}>
                  <td className={classes}>
                    <div className="font-normal">
                      {data.name}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal">
                      {data.id}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal">
                      {data.timestamp}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="font-normal max-w-2xl">
                      {data.context}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

