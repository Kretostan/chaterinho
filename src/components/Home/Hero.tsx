import PrimaryButton from "@/components/Home/PrimaryButton";
import OutlineButton from "@/components/Home/OutlineButton";

const Hero = () => {
  return <header className="flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-12 mt-20 px-4 pt-20 pb-18 min-h-screen w-full bg-accent text-center">
    <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 px-2 md:px-0">
      <h1 className="font-bold text-white text-3xl sm:text-4xl/12 md:text-6xl/20">Connect. Collaborate. Communicate.</h1>
      <p className="max-w-[400px] sm:max-w-[550px] text-white text-lg md:text-xl">Experience seamless team communication with our modern, intuitive chat platform designed for the future of work.</p>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-0 w-full md:w-auto">
      <PrimaryButton>Start Free Trial</PrimaryButton>
      <OutlineButton>Watch Demo</OutlineButton>
    </div>
    <div className="bg-elevated mx-4 mt-6 p-5 md:px-12 md:py-10 rounded-2xl max-w-[900px] w-full">
      <div className="flex flex-col bg-main p-5 gap-4 rounded-xl">
        <div className="flex bg-elevated p-4 gap-4 border-1 border-border rounded-lg">
          <div className="flex items-center justify-center w-10 h-10 bg-accent font-semibold text-white rounded-full">JD</div>
          <div className="flex flex-col items-start">
            <p>John Doe</p>
            <p className="text-secondary text-sm">Online</p>
          </div>
        </div>
        <div className="flex justify-start">
          <p className="p-3 bg-elevated max-w-2/3 md:max-w-1/2 rounded-t-2xl rounded-br-2xl text-sm">Hey team! How&apos;s the project coming along?</p>
        </div>
        <div className="flex justify-end">
          <p className="p-3 bg-green-800 max-w-2/3 md:max-w-1/2 rounded-t-2xl rounded-bl-2xl text-sm">Great progress! We&apos;re on track for the deadline.</p>
        </div>
        <div className="hidden sm:flex justify-start">
          <p className="p-3 bg-elevated max-w-2/3 md:max-w-1/2 rounded-t-2xl rounded-br-2xl text-sm">Perfect! Let&apos;s schedule a quick sync tomorrow.</p>
        </div>
        <div className="hidden md:flex justify-end">
          <p className="p-3 bg-green-800 max-w-2/3 md:max-w-1/2 rounded-t-2xl rounded-bl-2xl text-sm">Sounds good! I&apos;ll send out a calendar invite.</p>
        </div>
        <div className="hidden md:flex justify-start">
          <p className="p-3 bg-elevated max-w-2/3 md:max-w-1/2 rounded-t-2xl rounded-br-2xl text-sm">Thanks! Looking forward to it. 🚀</p>
        </div>
      </div>
    </div>
  </header>;
};

export default Hero;
