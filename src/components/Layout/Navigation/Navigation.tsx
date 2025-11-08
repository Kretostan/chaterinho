import Link from "next/link";
import OutlineButton from "@/components/Layout/Navigation/OutlineButton";
import PrimaryButton from "@/components/Layout/Navigation/PrimaryButton";
import List from "@/components/Layout/Navigation/List";

const Navigation = () => {

  return <div className="fixed top-0 flex justify-center items-center w-screen bg-section border-b-1 border-[#3a3a3a] shadow-[0_0_10px_2px_black]">
    <div className="flex justify-between items-center px-6 max-w-[1200px] w-full">
      <Link href="/" className="py-1 text-2xl text-accent font-bold cursor-pointer">Chaterinho</Link>
      <div className="block md:hidden text-2xl">☰</div>
      <List />
      <div className="flex gap-2 md:gap-4 py-4">
        <OutlineButton>Login</OutlineButton>
        <PrimaryButton>Sign Up</PrimaryButton>
      </div>
    </div>
  </div>;
};

export default Navigation;
