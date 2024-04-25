import React from "react";

const Entry = ({selectedDiary, handleToggleEdit, isEditable}) => {
    const buttonEditSave = isEditable ? "Save" : "Edit Diary";
    const backgroundColor = isEditable ? "lightgray" : "white";

    return(
        <div>

        <div class="bg-white h-screen shadow-md mb-3 rounded-3xl p-14">
                <div class="flex-none lg:flex">
                    <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"/>
                    </div>
                    <div class="flex-auto ml-3 justify-evenly py-2">
                        <div class="flex flex-wrap ">
                            <div 
                            class="w-full flex-none text-s text-blue-700 font-medium -mt-2 mb-2 rounded-3xl "
                            contentEditable={isEditable}
                            style={{backgroundColor}}
                            >{selectedDiary.emotion}
                            </div>
                            <h2 
                            class="flex-auto text-2xl font-medium rounded-3xl"
                            contentEditable={isEditable}
                             style={{backgroundColor}}
                             >{selectedDiary.title}
                             </h2>
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
                                <p class="">{selectedDiary.location}</p>
                            </div>
                            <div class="flex-1 inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <p class="">{selectedDiary.time}</p>
                            </div>
                        </div>
                        <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                        <div class="flex text-sm font-medium">
                            <div class="flex-auto flex">
                                
                                <button
                                class="mb-2 ml-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button"
                                aria-label="like"
                                onClick={handleToggleEdit}
                                >{buttonEditSave}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <p 
                contentEditable={isEditable} 
                class="flex-auto text-lg text-justify mt-8 pt-5 pr-8 pb-5 pl-8 rounded-3xl"
                style={{backgroundColor}}>
                    {selectedDiary.content}
                </p>
            </div>
    </div>


    )
}

export default Entry;