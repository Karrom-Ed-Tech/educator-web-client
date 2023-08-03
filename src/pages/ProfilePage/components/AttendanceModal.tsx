const names: string[] = [
    "Nguyen Van A",
    "Nguyen Van B",
    "Nguyen Van C",
    "Nguyen Van D",
    "Nguyen Van E",
    "Nguyen Van F",
    "Nguyen Van G",
    "Nguyen Van H",
    "Nguyen Van I",
    "Nguyen Van J",
    "Nguyen Van K",
    "Nguyen Van L",
    "Nguyen Van M",
    "Nguyen Van N",
    "Nguyen Van O",
    "Nguyen Van P",
]

interface propTypes {
    day: string;
    time: string;
    closeModal : () => void;
}

export default function AttendanceModal(props:propTypes) {
    return (
        <div className="absolute z-10 w-112 bg-gray-300 py-10 px-16 rounded-lg overflow-y-scroll animate-fade">
            <h2 className="font-bold">Mark Attendance</h2>
            <div className="flex flex-col text-gray-500 text-sm mb-10">
            <p>Date: 15-03-2023</p>
            <p>Day: Monday</p>
            <p>Time: 15:00-16:00</p>
            </div>
            <div className="flex mb-10 font-bold">
                <div className="basis-1/2">Students</div>
                <div className="basis-1/2">Attendance</div>
            </div>
            <div className=" max-h-60 overflow-y-scroll  mb-10">
           {
               names?.map((item , index)=>{
                return (
                    <div className="flex item-center justify-between mb-5">
                    <div className="basis-1/2">
                        {index+1}.{" "}{item}
                    </div>
                    <input  className="basis-1/2" type="checkbox"/>
                    </div>
                )
            })
        }
        </div>
           <div className="flex items-center justify-between">
            <button className="py-2 px-5 bg-green bg-black text-white rounded-lg" onClick={props.closeModal}>
                Ok
            </button>
            <button className="py-2 px-5 bg-red-600 text-white rounded-lg" onClick={props.closeModal}>
                Close
            </button>
           </div>
        </div>
    )
}