/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { iconUrlFromCode } from "../services/weatherService";

export default function Forecast({title, items}) {
  return (
    <div>
        <div className="flex items-center justify-start my-6 ">
            <p className="text-white font-medium uppercase">{ title }</p>
        </div>

        <hr className="mt-2"/>

        <div className="flex flex-row items-center justify-between text-white">
            {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center mt-2">
                <p className="font-light text-sm">{item.title}</p>
                <img src={iconUrlFromCode(item.icon)} alt="" className="w-12 my-1"/>
                <p className="font-medium ">{`${item.temp.toFixed()}°`}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
