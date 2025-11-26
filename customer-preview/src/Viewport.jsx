import { useEffect, useState } from "react";
import Cards from "./Cards";
import { BsChevronDown } from "react-icons/bs";


function Viewport() {
    const [topCount, setTopCount]=useState(0);

    function onTopSelect(e){
        setTopCount(e.target.value);
    }
    return (
        <>
            <div className="Content p-5 text-slate-200">
                <h2 className="mb-4">Top Customers - Preview (demo)</h2>
                <form action="" className="flex flex-row items-center gap-2 mb-4">
                    <label htmlFor="top">Top</label>
                    <div className="dropdown-1 relative">
                        <div className="bg-blue-500 p-1 rounded cursor-pointer flex flex-row items-center gap-1">0 <BsChevronDown className="text-xs" /></div>
                        <div className="absolute top-[30px] hidden">
                            <ul className="text-center">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                            </ul>
                        </div>
                    </div>
                    <label htmlFor="min-orders">Minimum Orders</label>
                    <div className="dropdown-2 relative">
                        <div className="bg-blue-500 p-1 rounded cursor-pointer flex flex-row items-center gap-1">0 <BsChevronDown className="text-xs" /></div>
                        <div className="absolute top-[30px] hidden">
                            <ul className="text-center">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                                <li>7</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" className="border border-slate-500 rounded px-2 p-1 w-[300px] focus:ring:border-slate-600" placeholder="Filter by name (debounced)"></input>
                    <button className="bg-blue-500 px-2 p-1 rounded cursor-pointer">Regenerate</button>
                    <button className="bg-blue-500 px-2 p-1 rounded cursor-pointer">Run</button>
                </form>
                <Cards />
            </div>
        </>
    );
}

export default Viewport;