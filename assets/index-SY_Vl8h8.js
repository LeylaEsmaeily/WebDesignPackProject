import a from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function l(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=l(r);fetch(r.href,i)}})();const c=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).brands.map(e=>`<div class="swiper-slide border border-gray-50">
                      <div class="w-full h-full pt-[5px] box-border">
                        <img
                          class="custom-img-size-favarite-bransd mx-[5px] my-[10px] "
                          src=${e.image}
                          alt=${e.alt}                          
                        />     
                      </div>   
                      </div>   
                    `),document.querySelector(".brands").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},n=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).category.map(e=>{let r="",i="";return e.id==10?r=`<div class="w-[82px] h-full pt-[20px] box-border">
                  <div
                     class="w-[52px] h-[52px] bg-[#F0F0F1] rounded-[50%] m-0 mb-[5px] flex text-center items-center justify-center gap-[2px]"
                  >
                       <div class="w-[6px] h-[6px] rounded-[50%] bg-[#A1A3A8]"></div>
                       <div class="w-[6px] h-[6px] rounded-[50%] bg-[#A1A3A8]"></div>
                       <div class="w-[6px] h-[6px] rounded-[50%] bg-[#A1A3A8]"></div>
                </div>
            <p
              class="font-custom1 text-[12px] w-[80%] m-0 line-clamp-2 text-center"
            >
              ${e.title}
            </p>
          </div>`:i=`<div class="w-[82px] pt-[10px] box-border">
            <img
              class="w-[52px] h-[52px] block m-[10px]"
              src=${e.image}
            />
            <p
              class="font-custom1 text-[12px] w-[80%] m-0 line-clamp-2 text-center"
            >
              ${e.title}
            </p>
          </div>     `,` 
               ${i}         
               ${r} 
                      `}),document.querySelector(".category").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},d=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).category2.map(e=>`<div class="swiper-slide">
                <div class="w-full h-full flex flex-col gap-2 justify-center items-center">
                   <img class="custom-img-size-4 lg:custom-img-size" src=${e.image} />
                  <p class="font-custom1 text-[16px] pt-6 text-[#5A5B78]">${e.title}</p>
                </div>             
              </div> 
                    `),document.querySelector(".category2").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},p=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).category4.map(e=>{let r="";e.id==1?r="block":e.id==2?r="sm:block hidden":e.id==3?r="md:block hidden":e.id==4&&(r="lg:block hidden");let i="";return e.id!=4&&(i=`<div class="${r} border-l border-gray-300 h-full mx-2"></div> `),`<div class="${r} w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full box-border flex flex-col pt-3">
                <div class="w-full h-[50px] mb-[1px] pb-10">
                    <h3 class="font-custom1 text-[18px] mb-2">${e.title}</h3>
                    <h5 class="font-custom1 text-[12px] font-normal text-gray-400">${e.subtitle}</h5>
                </div>
                <div class="w-full h-[140px] flex flex-row justify-center items-center">
                    <img class="w-[100px] h-[100px]" src=${e.images1[0].image} />
                    <img class="w-[100px] h-[100px]" src=${e.images1[1].image} />
                </div>
                <div class="w-full h-[140px] flex flex-row justify-center items-center">
                    <img class="w-[100px] h-[100px]" src=${e.images2[0].image} />
                    <img class="w-[100px] h-[100px]" src=${e.images2[1].image} />
                </div>
                <div class="w-full flex flex-row justify-center">
                    <a class="mt-2 mb-3 text-[14px] font-bold text-[#19BFD6] block text-center font-custom1 no-underline" href="#">مشاهده</a>
                </div>
            </div>
            ${i}
            `}),document.querySelector(".category4").insertAdjacentHTML("beforeend",s.join(" ")),console.log("HTML inserted successfully.")}catch(t){console.log("Error occurred:",t.message)}},u=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).category5.map(e=>{let r="";e.id==1?r="block":e.id==2?r="sm:block hidden":e.id==3?r="md:block hidden":e.id==4&&(r="lg:block hidden");let i="";return e.id!=4&&(i=`<div class="${r}border-l border-gray-300 h-full mx-2"></div> `),`<div class="${r} w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full box-border flex flex-col pt-3">
                  <div class="w-full h-[50px] mb-[1px] pb-10">
                      <h3 class="font-custom1 text-[18px] mb-2">${e.title}</h3>
                      <h5 class="font-custom1 text-[12px] font-normal text-gray-400">${e.subtitle}</h5>
                  </div>
                  <div class="w-full h-[140px] flex flex-row justify-center items-center">
                      <img class="w-[100px] h-[100px]" src=${e.images1[0].image} />
                      <img class="w-[100px] h-[100px]" src=${e.images1[1].image} />
                  </div>
                  <div class="w-full h-[140px] flex flex-row justify-center items-center">
                      <img class="w-[100px] h-[100px]" src=${e.images2[0].image} />
                      <img class="w-[100px] h-[100px]" src=${e.images2[1].image} />
                  </div>
                  <div class="w-full flex flex-row justify-center">
                      <a class="mt-2 mb-3 text-[14px] font-bold text-[#19BFD6] block text-center font-custom1 no-underline" href="#">مشاهده</a>
                  </div>
              </div>
              ${i}
              `}),document.querySelector(".category5").insertAdjacentHTML("beforeend",s.join(" ")),console.log("HTML inserted successfully.")}catch(t){console.log("Error occurred:",t.message)}},f=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).footer1.map(e=>`<div
                class="flex py-3 flex-col items-center justify-between text-center grow"
              >
                <div style="width: 56px; height: 56px; line-height: 0">
                  <img
                    class="w-[56px] h-[56px] inline-block"
                    src=${e.image}
                    alt=${e.alt} 
                  />
                </div>
                <p
                  class="text-caption text-[#404040] font-custom1 text-[12px] whitespace-nowrap"
                >
                 ${e.title}
                </p>
              </div>         
                `),document.querySelector(".footer1").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log("Error occurred:",t.message)}},x=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).footer2.map(e=>`<div
                  class="cursor-pointer p-2 lg:p-4 flex items-center justify-center border border-gray-200 rounded mr-2"
                >
                  <div style="width: 75px; height: 75px; line-height: 0">
                    <img
                      class="w-full h-[75px] inline-block"
                      src=${e.image}
                      style="object-fit: contain"
                      alt=${e.alt} 
                    />
                  </div>
                </div>
                  `),document.querySelector(".footer2").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log("Error occurred:",t.message)}},g=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).footer3.map(e=>{let r=150;return e.id>=9&&(r=200),`<div
                   class="w-[${r}px] h-[80px] border-r border-b border-gray-200 px-5 grow flex flex-col items-center justify-center"
                >
                  <div style="height: 20px; line-height: 0">
                    <img
                      class="w-[107px] h-[20px]"
                      class="w-full inline-block"
                      src=${e.image}
                      style="object-fit: contain"
                      alt=${e.alt} 
                    />
                </div>
              </div>
                  `}),document.querySelector(".footer3").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log("Error occurred:",t.message)}},w=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).hottestLastFewHours.map(e=>`<div class="swiper-slide">
                <div class="w-full h-full flex flex-row gap-2">
                  <img
                    class="custom-img-size-4"
                    src=${e.image}
                  />
                  <span class="font-bold text-[#19BFD3] pt-4">${e.number}</span>
                  <p
                    class="font-custom1 text-[16px] pt-6 text-[#5A5B78] line-clamp-2"
                  >
                    ${e.title}
                  </p>
                </div>
              </div>
                      `),document.querySelector(".hottestLastFewHours").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},m=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).incredibles.map(e=>`<div class="swiper-slide">
                <div
                  class="pt-[10px] box-border w-full h-full flex flex-col justify-center items-center py-0 px-2.5"
                >
                  <img
                    class="block m-0"
                    style="width: 132px !important; height: 132px !important"
                    src=${e.image}
                    alt=${e.alt}
                  />
                  <p
                    class="line-clamp-2 overflow-hidden text-[11px] font-normal w-[80%] m-[5px] text-center text-gray-500 font-custom1"
                    style="
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      box-orient: vertical;
                      line-height: 20px;
                    "
                  >
                     ${e.title}
                  </p>
                  <div
                    class="w-full h-[30px] flex flex-row-reverse flex-wrap justify-between"
                  >
                    <h4
                      class="font-custom2 flex flex-row-reverse flex-wrap items-center text-[14px] text-gray-500"
                    >
                      <img
                        style="
                          width: 13.71px !important;
                          height: 13.71px !important;
                        "
                        src="./src/images/incredibles/price.svg"
                      />
                      ${e.price2}
                    </h4>
                    <h4
                      class="font-custom2 text-[12px] pt-0 pb-0 pl-2 pr-2 bg-red-500 text-white box-border rounded-[8px] flex items-center h-[20px] mt-[5px]"
                    >
                      ${e.takhfif}
                    </h4>
                  </div>
                  <p
                    class="font-custom2 text-[14px] text-gray-300 text-left line-through pl-[10px] font-bold"
                  >
                   ${e.price1}
                  </p>
                </div>
              </div>
                      `),document.querySelector(".incredibles").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},b=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).incredibles2.map(e=>`<a
                  class="relative bg-white rounded-full flex items-center justify-center p-2 ml-2 lg:mb-4"
                  href=${e.link}
                  >
                  <div class="overflow-hidden rounded-full">
                    <div style="width: 45px; height: 45px; line-height: 0">
                      <img
                        class="object-contain w-full inline-block"
                        src=${e.image}
                        alt=${e.alt}
                      />
                    </div>
                  </div>
                  <div
                    class="h-[20px] text-[12px] font-bold px-1 text-white flex items-center justify-center bg-[#D32F2F] rounded-[16px] absolute right-0 bottom-0 z-1"
                  >
                    <span>${e.takhfif}</span>
                  </div></a
                >
                          `),document.querySelector(".incredibles2").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},h=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).khandaniha.map(e=>`<div
              class="mb-1 border border-gray-300 rounded-medium flex flex-col h-full overflow-hidden"       
              >
              <div style="line-height: 0">
                <img
                  class="w-full  inline-block"
                  src=${e.image}
                   alt=${e.alt} 
                  style="object-fit: cover"
                />
              </div>
              <div
                class="mt-2 mb-3 px-4 ellipsis-2 text-body-2 text-neutral-900 w-full text-right font-custom1 text-[11px]"
              >
               ${e.title}
              </div></div
            >
                          `),document.querySelector(".khandaniha").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},y=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).mainSlider.map(e=>`<div class="swiper-slide">
                 <img src=${e.image} />
              </div>       
                      `),document.querySelector(".mainSlider").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},v=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).menu.map(e=>{let r="",i="";return e.icon&&(r=`<img class="w-[18px] h-[18px] ml-1" src="${e.icon}" />`),e.id==5&&(i=' <span class="hidden lg:visible lg:inline-block w-[2px] h-[20px] text-[#E0E0E2] pt-2">|</span>'),`<div class="hidden lg:visible group w-auto h-[inherit] lg:flex flex-row items-center justify-between">
                    <a
                      class="relative pt-0 pb-0 pr-10px pl-10px h-[inherit] flex items-center justify-center font-custom1 text-[12px] no-underline"
                      href=${e.link}
                    >
                      ${r}
                      ${e.name}
                      <span class="absolute left-0 right-0 bottom-0 h-1 bg-[#ED1944] scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </a>
                  </div>
                 ${i}               
                  `}),document.querySelector(".menu-item").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},j=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).moreSales.map(e=>`<div class="swiper-slide">
                  <div class="w-full h-full flex flex-row gap-2 ">
                    <img class="custom-img-size-4" src=${e.image} />
                    <span class="font-bold text-[#19BFD3] pt-4">${e.number}</span>
                    <p class="font-custom1 text-[16px] pt-6 text-[#5A5B78]">${e.title}</p>
                </div>             
            </div> 
                      `),document.querySelector(".moreSales").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},P=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).overview1.map(e=>`<div>
            <img
              class="rounded-[16px]"
              src=${e.image}
              alt=${e.alt} 
            />
          </div>`),document.querySelector(".overview1").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},$=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).overview2.map(e=>`<div>
                 <img
                  class="rounded-[16px]"
                  src=${e.image}
                  alt=${e.alt} 
                 />
          </div> 
                          `),document.querySelector(".overview2").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},k=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).quickAccess.map(e=>{let r="";return r=`<div class="w-[300px]">
                  <p class="text-[#404040] font-bold mb-2 block font-custom1">
                   ${e.title}
                  </p>`,e.subtitles&&e.subtitles.length>0&&e.subtitles.forEach(i=>{r+=`<a
                        class="font-custom1 text-[#737373] text-[14px] font-normal mb-2 block"
                        href="#"
                        >
                        ${i}
                       </a>`}),r+="</div>",r}),document.querySelector(".quickAccess").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log("Error occurred:",t.message)}},A=async()=>{let s=[];try{let l=await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json().quickAccess2;if(l&&l.length>0&&l[0].images){const e=l[0].images;let r=`
          <div class="w-[300px]">
            <div class="text-[#404040] font-bold mb-2 block font-custom1">
              <h4 class="mb-3 text-h5 text-[#404040] font-custom1 whitespace-nowrap">
                همراه ما باشید!
              </h4>
              <div class="flex flex-row items-center">`;e.forEach(i=>{r+=`<a class="ml-6" href="#">
            <img class="w-[30px] h-[30px]" src=${i.image} alt="${i.alt}" /> 
          </a>`}),r+=`</div>
            </div>
            <div class="w-full flex flex-col items-start mt-4 pt-3">
              <h4 class="text-[13px] font-bold text-[#404040] mb-3 font-custom1 whitespace-nowrap">
                با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
              </h4>
              <div class="w-full flex items-center">
                <form class="w-full flex">
                  <label class="w-[203px] h-[40px]">
                    <div class="w-[203px] h-[40px] px-2 flex items-center bg-[#f5f5f5] rounded-[8px] font-custom1">
                      <div class="grow">
                        <input class="font-custom1 px-2 w-full placeholder:text[11px] placeholder:font-custom1 placeholder:text-gray-300" type="email" name="email" placeholder="ایمیل شما" value="" />
                      </div>
                    </div>
                  </label>
                  <button class="w-[51px] h-[40px] font-custom1 relative flex items-center rounded-[8px] bg-[#E0E0E2] text-white justify-center px-3 py-1 border border-gray-200 mr-2" type="submit">
                    ثبت
                  </button>
                </form>
              </div>
            </div>
          </div>
        `,s.push(r)}document.querySelector(".quickAccess2").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log("Error occurred:",t.message)}},S=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).selectedProducts.map(e=>`<a
                  class="block cursor-pointer relative bg-white overflow-hidden grow py-3 px-4 lg:px-2 h-full"
                  href="#"
                  >
                  <div class="h-full">
                    <div
                      class="overflow-hidden flex flex-col items-stretch justify-start h-full"
                    >
                      <div class="flex grow relative flex-col">
                        <div class="">
                          <div class="flex items-stretch flex-col relative mb-1">
                            <div class="flex items-start mx-auto">
                              <div>
                                <div
                                  class="flex items-center justify-start gap-1 flex-wrap absolute top-0 right-0 z-1"
                                >
                                  <br /><br />
                                </div>
                                <div class="w-[150px] h-[150px]"
                                  style="line-height: 0"
                                >
                                <img
                                class="w-full rounded-medium inline-block"
                                src=${e.image}
                               alt=${e.alt}
                            />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="grow flex flex-col items-stretch justify-start">
                          <div
                            class="pt-1 flex flex-col items-stretch justify-between"
                          >
                            <div class="flex items-center justify-between">
                              <div
                                class="px-1 text-white rounded-large flex items-center justify-center"
                              >
                      <h4
                      class="font-custom2 text-[12px] pt-0 pb-0 pl-2 pr-2 bg-red-500 text-white box-border rounded-[8px] flex items-center h-[20px] mt-[5px]"
                    >
                      ${e.takhfif}
                    </h4>
                              </div>
                              <div
                                class="flex items-center justify-end gap-1 text-neutral-700 text-h5 grow"
                              >
                                <span class="font-custom2">${e.price2}</span>
                                   <img src="./src/images/incredibles/price.svg" />
                              </div>
                            </div>
                            <div class="flex items-center justify-between pl-5">
                              <div
                                class="text-neutral-300 line-through self-end mr-auto font-custom2"
                              >
                                ${e.price1}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></a
                >
                      `),document.querySelector(".selectedProducts").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}},E=async()=>{let s=[];try{s=(await(await fetch("https://leylaesmaeily.github.io/API-WebDesignPackProject/db.json")).json()).story.map(e=>{let r="";return e.live!=0&&(r=` <div class="hidden lg:visible lg:flex absolute top-[60px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FDECF5] text-[#E03E97] text-[10px] px-1 py-[5px] rounded shadow-md"> ${e.live}</div>`),console.log(e.image),` <div class="swiper-slide">
                  <div class="w-full h-full pt-[5px] box-border">
                     <img  class="custom-img-size-4 xl:custom-img-size rounded-full mx-[5px] my-[10px] outline-2 outline-purple-600 outline-offset-[3px]"
                           src=${e.image}
                     />
  
                          ${r} 
                          <p
                              class="font-custom1 text-[12px] w-[80%] m-0"
                              style="
                              line-height: 20px;
                              display: -webkit-box;
                             -webkit-box-orient: vertical;
                              box-orient: vertical;
                             -webkit-line-clamp: 2;
                             line-clamp: 2;
                             overflow: hidden;
                             " 
                             >
                            ${e.title}
                          </p>
                     </div>
                     </div>         
                    `}),document.querySelector(".story").insertAdjacentHTML("beforeend",s.join(" "))}catch(t){console.log(t.message)}};function L(){new a(".mySwiperStory",{slidesPerView:2,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:4,spaceBetween:12},768:{slidesPerView:6,spaceBetween:15},1024:{slidesPerView:9,spaceBetween:17},1280:{slidesPerView:12.5,spaceBetween:17}}})}function M(){new a(".mySlider",{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0})}function H(){new a(".myIncredibles",{slidesPerView:2,spaceBetween:8,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:6},1280:{slidesPerView:8.2}}})}function V(){new a(".myFavariteBrands",{slidesPerView:2,spaceBetween:15,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:3,spaceBetween:8},768:{slidesPerView:4,spaceBetween:8},1024:{slidesPerView:6},1280:{slidesPerView:8.2}}})}function q(){new a(".myMoreSales",{slidesPerView:2,grid:{rows:3},spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,grid:{rows:2}},640:{slidesPerView:2,grid:{rows:2}},1024:{slidesPerView:3,grid:{rows:3}},1280:{slidesPerView:3,grid:{rows:3}}}})}function D(){new a(".HottestLastFewHours",{slidesPerView:2,grid:{rows:3},spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,grid:{rows:2}},640:{slidesPerView:2,grid:{rows:2}},1024:{slidesPerView:3,grid:{rows:3}},1280:{slidesPerView:3,grid:{rows:3}}}})}function I(){new a(".category2Swiper",{slidesPerView:2,grid:{rows:2},spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1,grid:{rows:1}},640:{slidesPerView:2,grid:{rows:2}},1024:{slidesPerView:5,grid:{rows:2}},1280:{slidesPerView:7.5,grid:{rows:2}}}})}async function T(){await v(),await E(),L(),await y(),M(),n(),await m(),H(),P(),b(),await d(),I(),$(),await c(),V(),p(),u(),await j(),q(),S(),await w(),D(),h(),f(),k(),A(),x(),g()}T();
