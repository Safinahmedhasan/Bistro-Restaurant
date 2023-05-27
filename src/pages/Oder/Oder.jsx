import './Oder.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Oder = () => {
    return (
        <div>
            {/* -------------------Heading Sections ------------------*/}
            <div className="hero min-h-screen -mt-24 md:mb-20 ex-oder-food">
                <div className=""></div>
                <div className="hero-content rounded-lg m-10 bg-black opacity-80  text-center">
                    <div className="max-w-5xl py-10 md:p-20">
                        <h1 className="mb-5 text-white font-Cinzel md:text-5xl font-bold">oder food</h1>
                        <p className="mb-5 md:text-base text-xs uppercase text-white md:px-72 px-20">would you to try dish?</p>
                    </div>
                </div>
            </div>





            {/* category Tabs */}
            <Tabs>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Oder;