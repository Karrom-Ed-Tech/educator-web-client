import navItems from "../assets/data"
import MaterialIcon from "./MaterialIcon"

function Navbar() {
  return (
    <div className=' flex justify-between py-5 mx-20 items-center bg-white shadow-black-500/100 mobileSmall:mx-5' >
        <div className='text-3xl font-bold'>
            <span className='text-primary '>Edu</span>Tech
        </div>
        {/* <div >
            <ul className='flex decoration-none'>
                {
                    navItems.map((item : String , index : number) => {
                        return <li className='mx-3' key={index}>{item}</li>
                    })
                }
            </ul>
        </div> */}
        {/* <div>
          <MaterialIcon codepoint="e5d2"/>
        </div> */}
        <div>
            <button className='py-2 px-3 bg-primary rounded-md text-white'>Log In</button>
            <button className='py-2 px-3 border-2 border-black rounded-md ml-3'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar