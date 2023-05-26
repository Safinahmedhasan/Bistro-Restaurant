

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mb-20 md:w-4/12 px-10 md:px-0 text-center mx-auto mt-10">
            <p className=" font-Inter text-[#D99904] italic mb-5">---{subHeading}---</p>
            <h3 className=" font-Inter text-[#151515] md:text-4xl text-xl border-y-4 py-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;