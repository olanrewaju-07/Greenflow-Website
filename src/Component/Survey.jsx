import { useState } from "react";
import { Surveydata } from "../../utils/Data";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Survey () {
    const [openAnswerId, setOpenAnswerId] = useState(null);

    const toggleAnswer = (id) => {
        setOpenAnswerId(openAnswerId === id ? null : id);
    }
    return (
        <div className="survey mt-10">
            <h2 className="text-center text-3xl font-semibold">Frequently Asked Questions (FAQs).</h2>

            <div className="p-10 w-[80%] mobile:w-[90%] mx-auto border-2 border-green-700 rounded-lg shadow-lg mt-10 mb-10">
      {Surveydata.map(({ id, question, answer }) => (
        <div key={id} className="border-b border-gray-300 py-4">
          <div className="flex justify-between mobile:gap-4 items-center cursor-pointer" onClick={() => toggleAnswer(id)}>
            <h3 className="text-lg font-semibold">{question}</h3>
            <span className="text-xl text-green-950">
              {openAnswerId === id ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {openAnswerId === id && (
            <p className="mt-2 text-green-600">{answer}</p>
          )}
        </div>
      ))}
    </div>
      </div>
    )
}