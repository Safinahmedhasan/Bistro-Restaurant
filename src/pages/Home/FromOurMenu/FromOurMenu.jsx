import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import './FromOurMenu.css'

const FromOurMenu = () => {
    return (
        <div className="mb-20">
            <div className="fromMenuBg text-white">
                <div className=""></div>
                <div className='pt-10'>
                    <SectionTitle
                        subHeading={"Check it out"}
                        heading={"FROM OUR MENU"}
                    >
                    </SectionTitle>
                </div>

                <div className='pb-20 container mx-auto md:flex justify-center items-center space-x-8'>
                    <img className='w-60 md:w-96 ml-10 mb-5' src="https://i.ibb.co/ChwDyXj/featured.jpg" alt="" />
                    <div className='space-y-3'>
                        <p>March 20, 2023</p>
                        <h2>WHERE CAN I GET SOME?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        </p>
                        <button className='btn-ex px-5 py-3'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;