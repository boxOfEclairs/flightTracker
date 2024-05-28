import './App.css'

function App() {

  return (
    <div class="bg-back font-fira grid grid-rows-2 w-screen">
            <div class="grid grid-rows-5 h-[27.38rem]">
                <div class="h-[4.25rem]"></div>
                <div class="grid h-[3.9375rem] justify-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="239" height="71" viewBox="0 0 239 71" fill="none">
                        <g filter="url(#filter0_d_42_68)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2944 0.413024C9.93911 0.63598 9.67329 1.25666 9.67329 1.86281C9.67329 2.44563 12.1552 11.3218 15.1886 21.5873C18.222 31.8529 20.6049 40.3589 20.4839 40.4889C20.3632 40.6193 16.7573 40.8124 12.4707 40.9184C4.13811 41.1245 4.01247 41.157 4.00004 43.1101C3.99188 44.3935 5.1102 44.9343 10.6653 46.3339L15.7383 47.6124L16.7875 49.6144C17.3642 50.7154 17.8362 51.8558 17.8362 52.1488C17.8362 52.4417 18.036 52.8605 18.2806 53.0788C18.5247 53.2972 22.5576 54.4254 27.2421 55.5857C38.3898 58.3468 47.8208 59.6444 53.6822 59.2241C57.5312 58.948 58.5419 59.0528 71.4277 61.0643C85.0708 63.1945 85.0985 63.1968 89.5281 62.7922C91.9681 62.5692 120.157 60.6395 152.17 58.504L210.375 54.6212L216.585 52.109C222.538 49.7008 232.831 44.1289 234.492 42.4156C235.048 41.8415 235.118 41.5023 234.846 40.687C234.587 39.9065 233.077 38.7848 228.298 35.8233C222.268 32.0858 221.911 31.9221 216.054 30.2104L210.02 28.447L172.43 30.3281L134.841 32.2089L133.452 30.6368C132.689 29.7721 131.856 29.0646 131.602 29.0646C130.789 29.0646 130.331 30.0516 130.563 31.3045C130.728 32.1883 130.657 32.5034 130.298 32.495C130.03 32.4889 115.342 33.2021 97.6587 34.0805L65.5071 35.6779L56.7493 33.2315L47.9915 30.7855L33.7312 15.3928L19.4709 0L15.1932 0.0114724C12.8405 0.0179737 10.6362 0.198481 10.2944 0.413024Z" fill="#F7FBFA"/>
                        </g>
                        <defs>
                          <filter id="filter0_d_42_68" x="0" y="0" width="239" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.968627 0 0 0 0 0.984314 0 0 0 0 0.980392 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_42_68"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_42_68" result="shape"/>
                          </filter>
                        </defs>
                    </svg>
                </div>
                <div class="grid justify-items-center font-fira text-[3.125rem] text-white right-[.75rem] py-[1.75rem]">
                    Wings 
                </div>
                <div class="flex h-[3rem] justify-items-center">
                </div>
                <div class="h-[5.25rem]">
                    <form class="max-w-md  md:max-w-lg lg:max-w-xl mx-auto">   
                        <label for="default-search" class="mb-2 text-header text-gray font-fira sr-only">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(35,35,47,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-header text-gray font-fira rounded-xl bg-white focus:ring-button focus:border-button shadow-button" placeholder="Enter Flight ID" required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-button hover:bg-buttonPressed focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-2">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="bg-front rounded-xl">
                <div class="flex mx-auto h-[16rem] max-w-[91.875rem] p-[1rem]">
                    <img src="imgs/map.svg" width="100%" height="100%" />
                </div>
                <div class="flex px-[1rem]">
                    <div class="relative flex-1 mr-[.5rem]">
                        <div class="flex flex-row absolute -top-1 border border-white bg-white shadow-dark w-auto sm:w-[10.1875rem] h-[1.5rem] rounded-xl pl-[.5rem] z-40 align-items-center font-chivo text-back text-[.975rem] font-[500]">
                            <p class="mr-[.5rem]">Departure</p>
                            <svg class="w-5 h-5 ml-auto mr-[.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(35,35,47,1)"><path d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"></path></svg>
                        </div>
                        <div class="relative border border-white bg-white shadow-red pt-[1.5rem] pb-[1rem] pr-[1rem] pl-[.5rem] rounded-xl flex flex-col h-[7.6875rem] z-5">
                            <div class="text-title text-back font-tommybold h-[1.75rem] z-5">EWR</div>
                            <div class="text-subtext text-gray font-fira">Newark, NJ</div>
                            <div class="text-title text-back font-tommy justify-self-start align-self-end h-[1.75rem]">
                                10:41 AM
                            </div>
                            <div class="text-subtext text-gray font-fira">
                                Scheduled 10:45 AM
                            </div>
                        </div>
                    </div>
                    <div class="relative flex-1 ml-[.5rem]">
                        <div class="flex flex-row absolute -top-1 border border-white bg-white shadow-dark w-auto sm:w-[10.1875rem] h-[1.5rem] rounded-xl pl-[.5rem] z-40 align-items-center font-chivo text-back text-[.975rem] font-[500]">
                            <p class="mr-[.5rem]">Arrival</p>
                            <svg class="w-5 h-5 ml-auto mr-[.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(35,35,47,1)"><path d="M20.949 14.8882C20.7346 15.6884 19.9121 16.1633 19.1119 15.9489L3.44528 11.751C3.00205 11.6323 2.69653 11.2271 2.70424 10.7683L2.79514 5.36515L4.24403 5.75338L5.15891 9.10435L10.2542 10.4696L9.88479 2.08844L11.8166 2.60608L14.6269 11.6413L19.8883 13.0511C20.6885 13.2655 21.1634 14.088 20.949 14.8882ZM4.00008 19H20.0001V21H4.00008V19Z"></path></svg>
                        </div>
                        <div class="relative border border-white bg-white shadow-red pt-[1.5rem] pb-[1rem] pr-[1rem] pl-[.5rem] rounded-xl flex flex-col h-[7.6875rem] z-5">
                            <div class="text-title text-back font-tommybold h-[1.75rem] z-5">ORD</div>
                                
                            <div class="text-subtext text-gray font-fira">Chicago, IL</div>
                            <div class="text-title text-back font-tommy justify-self-start align-self-end h-[1.75rem]">
                                1:41 PM
                            </div>
                            <div class="text-subtext text-gray font-fira">
                                Scheduled 1:45 PM
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex px-[1rem]">
                    test
                </div>
        </div>
                
    </div>
  )
}

export default App
