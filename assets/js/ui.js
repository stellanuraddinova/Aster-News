

export const uiNewsItem = (item) => {
    return `
        <div class="relative h-[191px] p-[15px] rounded-[4px] bg-white">
            <a class= "absolute inset-0" href="#news/${item.slug}"></a>
            <div class="text-[#072D4B] flex items-center justify-between gap-x-[18px] mb-[8px]">
                <div class="">
                    <h3 class="mb-[9px] font-medium text-[17px]">
                        ${item.title}
                    </h3>
                    <p class="text-[14px] mb-[20px] opacity-60">
                        The reason behind their disappointment is that iPhone users have been..
                    </p>
                </div>
                <figure class="h-[134px] w-[132px] rounded-[4px] border shrink-0">
                    <img class="w-full h-full object-cover" src="${item.photo}" alt="">
                </figure>
            </div>
            <div class="flex gap-x-[34px]">
                <div class="text-[12px] inline-flex gap-x-[9px] items-center opacity-40">
                    <span>Sport Biz</span>
                    <div class="size-[2px] rounded-full bg-[#2F9FF8]"></div>
                    <span>42 mins ago</span>
                </div>
                <div class="flex gap-x-[25px]">
                    <div class="flex items-center gap-x-[8px]">
                        <figure>
                            <img src="./assets/img/share.svg" alt="">
                        </figure>
                        <p class="text-[#0768B5] text-[12px]">Share</p>
                    </div>
                    <div class="flex items-center gap-x-[8px]">
                        <figure>
                            <img src="./assets/img/pocket.svg" alt="">
                        </figure>
                        <p class="text-[#0768B5] text-[12px]">Read Later</p>
                    </div>
                </div>
            </div>
        </div>
    `
}