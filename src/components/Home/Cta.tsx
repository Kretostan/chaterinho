import PrimaryButton from "@/components/Home/PrimaryButton";
import OutlineButton from "@/components/Home/OutlineButton";

const Cta = () => {
  return <div className="flex justify-center bg-accent w-full">
    <div className="flex flex-col max-w-[800px] w-full text-center gap-10 py-16 text-white">
      <p className="mx-2 text-3xl/11 sm:text-4xl/14 md:text-5xl/17 font-bold">Ready to transform you team communication?</p>
      <p className="mx-6 sm:mx-10 text-lg md:text-xl">Join thousands of teams already using Chaterinho to collaborate better and achieve more together.</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mx-8 pb-20">
        <PrimaryButton>Get Started Free</PrimaryButton>
        <OutlineButton>Schedule a Demo</OutlineButton>
      </div>
    </div>
  </div>;
};

export default Cta;
