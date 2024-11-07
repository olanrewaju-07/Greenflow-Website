export default function Product () {
    return (
        <div className="flex relative mt-5 flex-col gap-3">
            <div className="overflow-hidden w-full">
            <p className="bg-green-500 px-7 py-2 text-black font-medium w-full text-[15px] scroll-right">
            Tomatoes | Bell Peppers | Cucumbers | Zucchini | Strawberries | Raspberries | Blackberries | Blueberries | Peaches | Apricots | Plums | Cherries | Apples.
            </p>
            </div>
            <div className="overflow-hidden w-full">
            <p className="bg-green-500 px-7 py-2 text-black font-medium w-full text-[15px]  scroll-left">
            Tomatoes | Bell Peppers | Cucumbers | Zucchini | Strawberries | Raspberries | Blackberries | Blueberries | Peaches | Apricots | Plums | Cherries | Apples.
            </p>
            </div>
        </div>
    )
}