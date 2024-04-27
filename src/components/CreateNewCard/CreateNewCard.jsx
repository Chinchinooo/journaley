import React, {useState} from "react";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate();
  const paddedDay = String(day).padStart(2, '0');
  const paddedMonth = String(month).padStart(2, '0');

  return `${paddedDay}-${paddedMonth}-${year}`;
}


function CreateNewCard() {
    const [currentDate, setCurrentDate] = useState(getDate());
    return(
         <div>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        <div class="bg-white shadow-md mb-2 rounded-3xl p-4">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                                <input type="text" placeholder="How are you feeling?">
                                </input>
                            </div>
                            <div class="flex-auto text-lg font-medium">
                                <input type="text" placeholder="Title"></input>
                            </div>
                            
                        </div>
                        <p class="mt-3"></p>
                        <div class="flex py-4  text-sm text-gray-500">
                            <div class="flex-1 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <input type="text" placeholder="location"></input>
                            </div>
                            <div class="flex-1 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p class="">{currentDate}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CreateNewCard;