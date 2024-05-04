import React, { useState } from "react";
import xButton from "./x-button.png"

const CreateNewCard = ({handleCreateCardNotVisible, handleSaveDiary}) => {
  const [title, setTitle] = useState("");
  const [emotion, setEmotion] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const day = today.getDate();
        const paddedDay = String(day).padStart(2, '0');
        const paddedMonth = String(month).padStart(2, '0');

    return `${paddedDay}-${paddedMonth}-${year}`;
    }

  const currentDate = getDate();

  const handleInput = () => {
      const newDiary = {
        title,
        emotion,
        location,
        date,
        content,
      };
      handleSaveDiary(newDiary);

      setTitle('');
      setEmotion('');
      setLocation('');
      setDate('');
      setContent('');
  };


    return(
   <div className="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 bg-no-repeat bg-center bg-cover">
  <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
  <div className="relative flex flex-col items-center justify-center p-5 w-full min-h-screen lg:w-8/12 xl:w-6/12 2xl:w-4/12 2xl:min-h-full"> 
    <div className="flex flex-col">
      <button
            className="relative flex justify-end pb-3"
            onClick={handleCreateCardNotVisible}>
            <img src={xButton} alt="Close" className="h-3 w-3" />
      </button>
      <div className="relative bg-white shadow-md rounded-3xl p-4 w-full h-auto 2xl:p-8 2xl:w-full 2xl:h-auto">
        <div className="flex-none lg:flex">
          <div className="h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
            <img
              src="https://images.unsplash.com/photo-1585399000684-d2f72660f092"
              alt="Just a flower"
              className="w-full object-cover lg:h-48 lg:w-48 rounded-2xl"
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap">
              <div className="w-full flex-none text-xs text-blue-700 font-medium">
                <div className="flex-auto text-lg font-medium">
                <input
                type="text" 
                placeholder="How are you feeling?"
                className="text-center text-sm text-blue-700"
                value={emotion}
                onChange={(e) => setEmotion(e.target.value)}/>
              </div>
              <div className="m-2"></div>
              </div>
              <div className="flex-auto text-lg font-medium">
                <input
                type="text" 
                placeholder="Title for your Diary"
                className="text-center whitespace-nowrap"
                style={{ maxWidth: "200px" }}
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="flex py-4 text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                        </path>
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z">
                        </path>
                </svg>
                <input
                type="text" 
                placeholder="location"
                className=" text-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="inline-flex items-end pl-1">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5 mr-2 text-gray-400" 
                    fill="none"
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                </svg>
                <p
                value={date}
                onChange={(e) => setDate(e.target.value)}
                >{currentDate}</p>
              </div>
            </div>
            <div className="flex p-4 border-t border-gray-200"></div>
            <div className=" text-sm font-medium">
              <button
                className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                onClick={handleInput}
                >Save Diary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default CreateNewCard;