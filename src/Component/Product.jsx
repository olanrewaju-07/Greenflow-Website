export default function Product () {
    return (
        <div className="product flex relative mt-5 flex-col gap-3">
            <div className="overflow-hidden w-full bg-yellow-500">
            <p className="px-7 py-2 text-[#263238] font-semibold w-full text-[15px] scroll-right">
            Tomatoes | Bell Peppers | Cucumbers | Zucchini | Strawberries | Raspberries | Blackberries | Blueberries | Peaches | Apricots | Plums | Cherries | Apples.
            </p>
            </div>
            <div className="overflow-hidden w-full bg-yellow-500">
            <p className="px-7 py-2 text-[#263238] font-semibold w-full text-[15px]  scroll-left">
            Tomatoes | Bell Peppers | Cucumbers | Zucchini | Strawberries | Raspberries | Blackberries | Blueberries | Peaches | Apricots | Plums | Cherries | Apples.
            </p>
            </div>
        </div>
    )
}