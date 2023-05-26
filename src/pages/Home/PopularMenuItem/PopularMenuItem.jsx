import './PopularMenuItem.css'

const PopularMenuItem = ({ items }) => {

    const { name, image, recipe, price } = items;

    return (
        <div>
            <div className="flex justify-center items-center ">
                <img className="w-32 mr-5  ex-radius " src={image} alt="" />
                <div>
                    <h2 className='font-Cinzel text-xl'>{name} ------------------</h2>
                    <p className='font-Inter'>{recipe}</p>
                </div>
                <p className="text-[#BB8506] font-Inter">{price}</p>
            </div>

        </div>
    );
};

export default PopularMenuItem;