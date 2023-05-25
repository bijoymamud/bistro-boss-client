

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-center md:mt-20 my-8">
      <p className="text-yellow-600 mb-2 font-semibold">---{subHeading}---</p>
      <h2 className="text-3xl uppercase text-white border-y-4 py-4 border-slate-400">{heading}</h2>
    </div>
  );
};

export default SectionTitle;