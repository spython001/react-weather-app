/* eslint-disable react/prop-types */

export default function Forecast({title}) {
  return (
    <div>
        <div className="flex items-center justify-start my-6 ">
            <p className="text-white font-medium uppercase">{ title }</p>
        </div>

        <hr className="mt-2"/>

        <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30 PM</p>
                <img src="" alt="put image" className="w-12 my-1"/>
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30 PM</p>
                <img src="" alt="put image" className="w-12 my-1"/>
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30 PM</p>
                <img src="" alt="put image" className="w-12 my-1"/>
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30 PM</p>
                <img src="" alt="put image" className="w-12 my-1"/>
                <p className="font-medium">22°</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">4:30 PM</p>
                <img src="" alt="put image" className="w-12 my-1"/>
                <p className="font-medium">22°</p>
            </div>
        </div>
    </div>
  )
}
