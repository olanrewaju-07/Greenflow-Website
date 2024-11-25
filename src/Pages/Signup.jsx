
import BuyerSignup from "../Component/BuyerSignup";

export default function Signup() {


    return (
        <div className="flex flex-row gap-40 tablet:bg-green-950 mobile:h-fit">
            <img
                src="/assets/images/GreenLeaf.svg"
                alt="signup image"
                className="hidden lg:block w-1/2 h-screen object-cover rounded-l-2xl"
            />
                <div className="mt-5">
                    <h2 className="font-bold text-[17px] tablet:text-white tablet:text-[20px] text-center">Get Started Now</h2>
                    <p className="text-[15px] text-green-900 tablet:text-white tablet:text-[17px] text-center">
                        Reach your customers faster with us
                    </p>
                    <BuyerSignup />
                </div>
            </div>
    );
}
