import React from "react"


function HobbyWarsDisplay(){
    return(
    <section>
  
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">

            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940836e6cf8d_Group%2047854%20(2).svg" alt="" className="inline-block h-full w-full max-w-[640px] object-cover" />
            
            <div className="sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9406b0e6cf62_placeholder-logo.svg" alt="" className="mb-4 inline-block" />
                <p className="mb-6 max-w-md text-[#636262] md:mb-10 lg:mb-12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.
                <br />
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.”
                </p>
                <p className="font-bold">John Robert</p>
                <p className="text-sm text-[#636262]">Senior Webflow Developer</p>
            </div>
            </div>
        </div>
    </section>
    )
}

export default HobbyWarsDisplay

