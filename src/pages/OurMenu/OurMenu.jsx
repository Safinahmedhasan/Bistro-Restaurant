import { useEffect, useState } from 'react';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import './OurMenu.css'
import OurMenuItem from './OurMenuItem/OurMenuItem';

const OurMenu = () => {


    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "offered")
                setMenu(popularItem);
            })
    }, [])




    return (
        <div className=''>
            <div className="">
                <div className="hero min-h-screen -mt-24 md:mb-20 ex-back">
                    <div className=""></div>
                    <div className="hero-content rounded-lg m-10 bg-black opacity-80  text-center">
                        <div className="max-w-5xl py-10 md:p-20">
                            <h1 className="mb-5 text-white font-Cinzel md:text-5xl font-bold">OUR MENU</h1>
                            <p className="mb-5 md:text-base text-xs uppercase text-white px-72">would you to try dish?</p>
                        </div>
                    </div>
                </div>
            </div>


            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            >
            </SectionTitle>


            <div className="grid md:grid-cols-2 gap-10 container mx-auto p-10">
                {
                    menu.map(items => <OurMenuItem
                        key={items._id}
                        items={items}
                    ></OurMenuItem>)
                }
            </div>
            <div className="flex justify-center py-10 ">
                <button className='btn-ex-ORDER px-5 py-3'>ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>

    );
};

export default OurMenu;