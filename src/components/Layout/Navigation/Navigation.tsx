import Link from "next/link";
import OutlineButton from "@/components/Layout/Navigation/OutlineButton";
import PrimaryButton from "@/components/Layout/Navigation/PrimaryButton";
import List from "@/components/Layout/Navigation/List";

const Navigation = () => {

  return <div className="fixed top-0 flex justify-around items-center w-screen bg-section">
    <div className="flex justify-around items-center px-2 py-1 max-w-[1200px] w-full">
      <Link href="/" className="py-1 text-2xl text-accent font-bold cursor-pointer">Chaterinho</Link>
      <div className="block md:hidden">\/</div>
      <List />
      <div className="flex gap-2 md:gap-4 py-4">
        <OutlineButton>Login</OutlineButton>
        <PrimaryButton>Sign Up</PrimaryButton>
      </div>
    </div>
  </div>;
};

export default Navigation;
