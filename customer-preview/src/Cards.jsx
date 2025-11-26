import data from './assets/sample.json';
import {useEffect} from "react";

function Cards() {
    let accumulated_data;
    useEffect(() => {
        accumulated_data=data.map((item)=>{
            return (data.filter((customer)=>(customer.customerId==item.customerId)));
        })
        const result=new Set(...accumulated_data);
        console.log('accumulated_data==>',result);
    }, []);

    return (
        <>
            <div className="grid grid-cols-6 gap-2">
                {data.map(item => (
                    <div className="min-w-[200px] card p-4 bg-linear-to-bl from-slate-800 to-slate-900 rounded pt-6 border border-slate-600" key={item.orderId}>
                        <h2 className="font-bold mb-4">{item.customerName}</h2>
                        <div className="flex flex-col">
                            <h6 className="text-xs text-slate-400">ID: {item.orderId}</h6>
                            <h1 className="font-bold text-lg">₹ {item.amount}</h1>
                            <h6 className="text-xs text-slate-400">10 Orders</h6>
                        </div>
                    </div>
                ))}


            </div>
        </>
    )
}

export default Cards;