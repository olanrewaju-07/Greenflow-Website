export default function Product () {
    return (
        <div className="flex relative mt-5 flex-col gap-3">
            <p className="bg-green-500 px-7 py-2 text-white w-full text-[15px]">
            Tomatoes | Bell Peppers | Cucumbers | Zucchini | Strawberries | Raspberries | Blackberries | Blueberries | Peaches | Apricots | Plums | Cherries | Apples.
            </p>
            <p className="bg-green-500 px-7 py-2 text-white w-full text-[15px] mobile:hidden">
            Tomatoes | Bell Peppers | Cucumbers | Zucchini | Strawberries | Raspberries | Blackberries | Blueberries | Peaches | Apricots | Plums | Cherries | Apples.
            </p>
        </div>
    )
}