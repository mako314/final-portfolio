import React, {useState, useContext} from "react";
import { ThemeContext } from './ThemeContext';

function Contact(){

    const [result, setResult] = useState("");
    const {theme} = useContext(ThemeContext);


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log("Testing Form Data:", formData.entries.length)
    if (formData.entries.length <= 0){
        setResult(" ⛔ Fields were empty! Please check your inputs and try again! ⛔ ")
        return
    }
    // This key is public btw
    // https://www.reddit.com/r/reactjs/comments/13gifz6/comment/jk3h5vu/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
    formData.append("access_key", "3aa2ea5f-b72f-47eb-a03f-ee104fce3575");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


    return(
        // 
        <section className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'}`}>
    <div className="container px-6 py-12 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6 flex flex-col items-center justify-center text-center">
                <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#34568B]'} capitalize lg:text-3xl`}>
                    Get in touch!
                </h1>

                <div className="mt-6 space-y-8 md:mt-8">

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 " fill="none" viewBox="0 0 24 24" stroke="#88BDBC" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span className={`mx-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'} truncate w-72`}>(772) 607-3239</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 " fill="none" viewBox="0 0 24 24" stroke="#88BDBC" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span className={`mx-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'} truncate w-72`}>bispo.swe@gmail.com</span>
                    </p>

                    <p className="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 " fill="none" viewBox="0 0 24 24" stroke="#88BDBC" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <span className={`mx-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'} truncate w-72 items`}>
                            Port Saint Lucie, Florida
                        </span>
                    </p>

                </div>

                <div className="mt-6 w-80 md:mt-8">
                    <h3 className={`${theme === 'dark' ? 'text-white' : 'text-gray-700'} `}>Or feel free to reach me below</h3>

                    <div className="flex flex-row justify-between mt-4 -mx-1.5 ">
                    <a href="https://github.com/mako314" target="_blank" rel="noreferrer" aria-label="Github" title="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={`${theme === 'dark' ? 'white' : '#181717'} `} className="bi bi-github ml-2" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                          </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/macolister/" target="_blank" rel="noreferrer" aria-label="LinkedIn"  title="LinkedIn"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0077B5" className="bi bi-linkedin ml-4" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                    </a>

                    <a href="https://www.discordapp.com/users/1108126068226916393" target="_blank" rel="noreferrer" aria-label="Discord"  title="Discord">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#5865F2" className="bi bi-discord ml-4" viewBox="0 0 16 16">
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                          </svg>
                    </a>

                    <a href="mailto:bispo.swe@gmail.com" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#88BDBC" className="bi bi-envelope-fill ml-4" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                          </svg>
                      </a>
                      
                      <a href="https://cal.com/macolister" target="_blank" rel="noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#88BDBC" className="bi bi-chat-dots" viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                        </svg>
                        </a>

                        
                    </div>
                </div>
            </div>

            {/* FORM COMPONENT */}

            <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-gray shadow-l lg:max-w-xl shadow-gray-500/50 border-2 border-[#88BDBC] rounded-xl">
                <h1 className={`text-lg font-medium text-center ${theme === 'dark' ? 'text-white ' : 'text-[#34568B]'}`}>Connect with me!</h1>

                    <form onSubmit={onSubmit} className="mt-6">
                        <div className="flex-1">
                        
                            <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-gray-800  border-gray-700 focus:border-blue-300' : 'text-gray-700'}`}>Full Name</label>
                            <input type="text" name="name" placeholder="Your Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-gray-800  border-gray-700 focus:border-blue-300' : 'text-gray-700'}`}>Email address</label>
                            <input type="email" name="email" placeholder="Your Email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-gray-800  border-gray-700 focus:border-blue-300' : 'text-gray-700'}`}>Subject</label>
                            <input type="text" name="subject" placeholder="Subject" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="w-full mt-6">
                            <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-white placeholder-gray-500 bg-gray-800  border-gray-700 focus:border-blue-300' : 'text-gray-700'}`}>Message</label>
                            <textarea name="message" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                        </div>

                        <button type="submit" className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#88BDBC]  rounded-md hover:bg-[#76a9a3] focus:outline-none focus:ring focus:bg-[#76a9a3] focus:ring-opacity-50">
                            Get in touch
                        </button>
                    </form>
                    <span className={`block mb-2 py-3 text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{result}</span>
                </div>
            </div>


        </div>
    </div>
</section>
    )
}

export default Contact