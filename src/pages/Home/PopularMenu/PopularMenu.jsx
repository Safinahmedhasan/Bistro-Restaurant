import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PopularMenuItem from "../PopularMenuItem/PopularMenuItem";



const popularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === "popular")
                setMenu(popularItem);
            })
    }, [])


    return (
        <div className="container mx-auto p-5">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(items => <PopularMenuItem
                        key={items._id}
                        items={items}
                    ></PopularMenuItem>)
                }
            </div>
            <div className="flex justify-center py-10 ">
            <button className="btn btn-outline border-b-4">View Full  Menu</button>
            </div>


        </div>
    );
};

export default popularMenu;