import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import './ChefRecomended.css'


const ChefRecomended = () => {
    return (
        <div className="container mx-auto">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            >
            </SectionTitle>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-3 gap-10 pb-10">
                    <div className="card w-96 bg-base-100 shadow-xl px-5">
                        <figure>
                            <img src="https://i.ibb.co/kgSqfb2/photo-1546069901-ba9599a7e63c.jpg" alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="px-7 py-2 ex-btn">add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl px-5">
                        <figure>
                            <img src="https://i.ibb.co/kgSqfb2/photo-1546069901-ba9599a7e63c.jpg" alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="px-7 py-2 ex-btn">add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl px-5">
                        <figure>
                            <img src="https://i.ibb.co/kgSqfb2/photo-1546069901-ba9599a7e63c.jpg" alt="Shoes" className="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="px-7 py-2 ex-btn">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecomended;