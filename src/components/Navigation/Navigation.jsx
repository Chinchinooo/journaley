import React from 'react';
import calendar from './calendar.png';

const Navigation = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css"/>
      <div class="flex flex-wrap -mx-3 mb-5">
        <div class="px-3 mx-auto w-full bg-white rounded-xl">
            <div class="sm:flex items-stretch justify-between grow lg:mb-0  py-5 px-5">
          <div class="flex flex-col flex-wrap justify-center mb-5 mr-3 lg:mb-0">
          <span class="my-0 flex text-dark font-semibold text-[1.35rem]/[1.2] flex-col justify-center">
              Profile
          </span>
          </div>
          <div class="flex items-center lg:shrink-0 lg:flex-nowrap">
          <div class="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
              <span class="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
              </svg>
              </span>
              <input class="block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-white border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-stone-500 border-stone-200 bg-clip-padding rounded-2xl" placeholder="Search..." type="text"/>
              <span onclick="(() => { this.previousElementSibling.value=''})()" class="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              </span>
          </div>
          <div class="relative lg:hidden flex items-center sm:ml-2 ml-auto">
              <a href="javascript:void(0)" class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary" onclick="(function(){document.querySelector('.group\\/sidebar').classList.toggle('-translate-x-full');})();">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
              </a>
          </div>
          <div class="relative flex items-center ml-2 lg:ml-4">
              <a href="javascript:void(0)" class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300">
              <img src={calendar} alt='calendar' class="w-6 h-6"/>
              </a>
          </div>
          <div class="relative flex items-center ml-2 lg:ml-4">
              <a href="javascript:void(0)" class="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:bg-gray-300 active:bg-gray-300 focus:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"></path>
              </svg>
              </a>
          </div>
          <div class="relative flex items-center ml-2 lg:ml-4">
              <a href="javascript:void(0)" class="flex items-center justify-center w-12 h-12 text-base font-semibold leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark ">
              <span class="text-[1.15rem]">6</span>
              </a>
          </div>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;