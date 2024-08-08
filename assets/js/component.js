import {queryParams} from "./helper.js";

export const menuComponent = () => {
  const uiNavbar = document.querySelector("#navbar");
  const category = queryParams('category');

  const template = (data) => {
    let className = "px-[15px] inline-flex items-center h-[50px] relative";
    if (category === data.slug) {
      className +=
        " bg-[#2F9FF81A] rounded-r-[37px] after:absolute after:bg-[#2F9FF8] after:rounded after:size-[6px]";
    }
    return `
            <a 
                href="#search?category=${data.slug}"
                    class="${className}">
                        <img class="size-[24px] mr-[22px] ml-[18px]" src="./assets/img/home.svg" alt="">
                    <span class="font-bold text-[15px] text-[#072D4B]">${data.name}</span>
            </a>
        
        `;
  };

  const fetchData = async () => {
    const api = await fetch("https://all-api.bitcode.az/api/news/category");
    const categories = await api.json();
    uiNavbar.innerHTML = "";
    categories.forEach((category) => {
      uiNavbar.innerHTML += template(category);
    });
  };

  fetchData();
};
