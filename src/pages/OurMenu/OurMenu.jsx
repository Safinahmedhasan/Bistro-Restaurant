import { useEffect, useState } from 'react';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import './OurMenu.css'
import OurMenuItem from './OurMenuItem/OurMenuItem';
import Dessert from './OurMenuItem/Dessert/Dessert';
import Pizza from './Pizza/Pizza';
import Salad from './Salad/salad';
import Soups from './Soups/Soups';

const OurMenu = () => {


    const [menu, setMenu] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [pizza, setPizza] = useState([]);
    const [salad, setSalad] = useState([]);
    const [soups, setSoups] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "offered")
                const dessert = data.filter(item => item.category === "dessert")
                const pizza = data.filter(item => item.category === "pizza")
                const salad = data.filter(item => item.category === "salad")
                const soups = data.filter(item => item.category === "salad")
                setMenu(popularItem);
                setDessert(dessert);
                setPizza(pizza);
                setSalad(salad);
                setSoups(soups);
            })
    }, [])




    return (
        <div>
            <div className="">
                {/* -------------------Heading Sections ------------------*/}
                <div className="hero min-h-screen -mt-24 md:mb-20 ex-back">
                    <div className=""></div>
                    <div className="hero-content rounded-lg m-10 bg-black opacity-80  text-center">
                        <div className="max-w-5xl py-10 md:p-20">
                            <h1 className="mb-5 text-white font-Cinzel md:text-5xl font-bold">OUR MENU</h1>
                            <p className="mb-5 md:text-base text-xs uppercase text-white md:px-72 px-20">would you to try dish?</p>
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



            {/* -----------------DESSERTS---------------- */}
            <div className="hero min-h-screen md:mb-20 ex-back-desserts mt-20">
                <div className=""></div>
                <div className="hero-content rounded-lg m-10 bg-black opacity-80  text-center">
                    <div className="max-w-5xl py-10 md:p-20">
                        <h1 className="mb-5 text-white font-Cinzel md:text-5xl font-bold">DESSERTS</h1>
                        <p className="mb-5 md:text-base text-xs uppercase text-white px-20">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 container mx-auto p-10">
                {
                    dessert.map(items => <Dessert
                        key={items._id}
                        items={items}
                    ></Dessert>)
                }
            </div>
            <div className="flex justify-center py-10 ">
                <button className='btn-ex-ORDER px-5 py-3'>ORDER YOUR FAVOURITE FOOD</button>
            </div>


            {/*-------------------- PIZZA --------------*/}
            <div className="hero min-h-screen md:mb-20 ex-back-desserts mt-20">
                <div className=""></div>
                <div className="hero-content rounded-lg m-10 bg-black opacity-80  text-center">
                    <div className="max-w-5xl py-10 md:p-20">
                        <h1 className="mb-5 text-white font-Cinzel md:text-5xl font-bold">PIZZA</h1>
                        <p className="mb-5 md:text-base text-xs uppercase text-white px-20">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 container mx-auto p-10">
                {
                    pizza.map(items => <Pizza
                        key={items._id}
                        items={items}
                    ></Pizza>)
                }
            </div>
            <div className="flex justify-center py-10 ">
                <button className='btn-ex-ORDER px-5 py-3'>ORDER YOUR FAVOURITE FOOD</button>
            </div>




            {/*-------------------- SALADS--------------*/}
            <div className="hero min-h-screen md:mb-20 ex-back-desserts mt-20">
                <div className=""></div>
                <div className="hero-content rounded-lg m-10 bg-black opacity-80  text-center">
                    <div className="max-w-5xl py-10 md:p-20">
                        <h1 className="mb-5 text-white font-Cinzel md:text-5xl font-bold">Sadad</h1>
                        <p className="mb-5 md:text-base text-xs uppercase text-white px-20">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 container mx-auto p-10">
                {
                    salad.map(items => <Salad
                        key={items._id}
                        items={items}
                    ></Salad>)
                }
            </div>
            <div className="flex justify-center py-10 ">
                <button className='btn-ex-ORDER px-5 py-3'>ORDER YOUR FAVOURITE FOOD</button>
            </div>




            {/*-------------------- Soups--------------*/}
            <div className="hero min-h-screen md:mb-20 ex-back-desserts mt-20">
                <div className=""></div>
                <div className="hero-content rounded-lg m-10 bg-black opacity-80  text-center">
                    <div className="max-w-5xl py-10 md:p-20">
                        <h1 className="mb-5 text-white font-Cinzel md:text-5xl font-bold">Soups</h1>
                        <p className="mb-5 md:text-base text-xs uppercase text-white px-20">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10 container mx-auto p-10">
                {
                    soups.map(items => <Soups
                        key={items._id}
                        items={items}
                    ></Soups>)
                }
            </div>
            <div className="flex justify-center py-10 ">
                <button className='btn-ex-ORDER px-5 py-3'>ORDER YOUR FAVOURITE FOOD</button>
            </div>

        </div>

    );
};

export default OurMenu;