
export default function AuthHeader () {
    return (
    <div className="flex items-center justify-center mobile:pt-5">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
            src="./assets/icons/GreenFlow-Logo-removebg-preview.png"
            className="h-56 block mobile:hidden tablet:hidden"
            alt="GreenFlow Logo" />
            <img 
            src="/assets/icons/Greenflow-White- Logo.png" 
            className="h-40 md:h-20 hidden mobile:block tablet:block"
            alt="GreenFlow MobilLogo" />
        </a>
    </div>
    )
}