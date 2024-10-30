export default function Blog () {
    return (
        <div className="bg-green-700 flex flex-col items-center gap-2 mt-20">
            <h2 className="text-white font-semibold text-3xl mt-8 mobile:text-xl">Subscribed to Our Newsletter</h2>
            <span className="text-white text-[17px] mobile:text-center mobile:text-[16px]">Get weekly update about our product on your email, no spam guaranteed we promise ✌️</span>
            <div className="flex flex-row items-center mb-10">
                <input type="email" placeholder="youremail@gmail.com" className="border-none ring-offset-0 rounded-l-lg p-2 w-64" />
                <button className="bg-green-950 p-2 rounded-r-lg text-white">Subscribed</button>
            </div>
        </div>
    )
}