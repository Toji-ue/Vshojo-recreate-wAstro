
const styles = {
    wrapper:"relative flex flex-col font-mont pt-[2.5rem] min-h-[100vh] min-w-[20rem]",

    margin: "grow-0	shrink basis-[5rem]",
    padding: "grow-0 shrink basis-[3.875rem]",
    spacer: "flex-grow shrink basis-0",

    langSelectdrop: "origin-top scale-y-0 transition-transform duration-100 ease-in-out",
    lgShowsmHidden:"hidden sm:block",

    dropdownBtn: "ml-[3px] mr-[3px] inline-block text-[1.125rem] font-bold drop-shadow-custom z-50 group-active:hover:drop-shadow-custom-x1 group-active:hover:ml-0 group-active:hover:mr-0",
    dropdownBtndiv: "inline-block overflow-hidden rounded-[.25rem] border border-solid border-black bg-[#F50F75]",
    dropdownBtnSvgC: "grid h-[3rem] w-[3rem] place-items-center",
    dropdownItems: "px-[2rem] py-[1rem] text-center",
    dropdownItemslink:"mr-[8px] mb-[8px] block font-mont font-bold text-[1.125rem] drop-shadow-custom-x4 group-active:hover:drop-shadow-custom-x2 group-active:hover:mt-[--drop-button-click] group-active:hover:ml-[--drop-button-click] group-active:hover:mb-[--drop-button-animation] group-active:hover:mr-[--drop-button-animation]",
    dropdownItemslinkchild:"bg-white overflow-hidden py-[2rem] px-[1.5rem] border-[2px] border-solid border-black rounded-[.5rem]",
    dropdownlangSelectdiv: "flex-shrink-0 flex-grow basis-0 mr-[1rem] uppercase font-mont font-bold group",
    dropdownlangSelectlink: "mr-[8px] mb-[8px] block font-mont font-bold text-[1.125rem] drop-shadow-custom-x4 group-active:hover:drop-shadow-custom-x2 gr group-active:hover:mt-[--drop-button-click] group-active:hover:ml-[--drop-button-click] group-active:hover:mb-[--drop-button-animation] group-active:hover:mr-[--drop-button-animation]",
    dropdownlangSelectlinkchild: "block overflow-hidden py-[2rem] px-[1.5rem] border-[2px] border-solid border-black rounded-[.5rem] bg-white",

    meetBtn:"inline-block text-[1.125rem] font-bold m-[0_var(--drop-button-depth-4)_var(--drop-button-depth-4)_0] drop-shadow-custom-x4 hover:cursor-pointer hover:m-[var(--meet-btn-hover)_calc(var(--drop-button-depth-4)-var(--meet-btn-hover))_calc(var(--drop-button-depth-4)-var(--meet-btn-hover))_var(--meet-btn-hover)] hover:drop-shadow-custom-x2",

    titleA:"text-[1.125rem] font-bold m-[0_var(--drop-button-depth-4)_var(--drop-button-depth-4)_0] drop-shadow-custom-x4",
    titlePadding:"py-[.75rem] px-[1.25rem]",
    title:"block overflow-hidden border-[2px] border-solid border border-black",

    bgFounder: "aspect-[4/3] bg-cover bg-center",

    socialBtn: "inline-block text-[1.125rem] font-bold m-[0_var(--drop-button-depth-3)_var(--drop-button-depth-3)_0] drop-shadow-custom hover:cursor-pointer hover:m-[var(--social-btn-hover)_calc(var(--drop-button-depth-3)-var(--social-btn-hover))_calc(var(--drop-button-depth-3)-var(--social-btn-hover))_var(--social-btn-hover)] hover:drop-shadow-socialBtnHover",
    socialBtnin: "inline-block overflow-hidden p-[.4rem] bg-Vpink rounded-[50%] border-[2px] border-solid border-black",
    FaqBtn:"block text-[1.125rem] font-bold m-[0_var(--drop-button-depth-4)_var(--drop-button-depth-4)_0] drop-shadow-custom-x4 hover:cursor-pointer group-hover:m-[var(--meet-btn-hover)_calc(var(--drop-button-depth-4)-var(--meet-btn-hover))_calc(var(--drop-button-depth-4)-var(--meet-btn-hover))_var(--meet-btn-hover)] group-hover:drop-shadow-faqBtnHover",
    marginHover:"m-[var(--meet-btn-hover)_calc(var(--drop-button-depth-4) - var(--meet-btn-hover))_calc(var(--drop-button-depth-4) - var(--drop-button-hover))_var(--drop-button-hover)]",

    contactBtn: "inline-block text-[1.125rem] font-bold m-[0_var(--drop-button-depth-4)_var(--drop-button-depth-4)_0] drop-shadow-custom-x4 hover:drop-shadow-faqBtnHover hover:m-[var(--meet-btn-hover)_calc(var(--drop-button-depth-4)-var(--meet-btn-hover))_calc(var(--drop-button-depth-4)-var(--meet-btn-hover))_var(--meet-btn-hover)]",

    talentsocialBtn: "inline-block text-[1.125rem] font-bold m-[0_var(--drop-button-depth-3)_var(--drop-button-depth-3)_0] drop-shadow-custom group-hover:cursor-pointer group-hover:m-[var(--social-btn-hover)_calc(var(--drop-button-depth-3)-var(--social-btn-hover))_calc(var(--drop-button-depth-3)-var(--social-btn-hover))_var(--social-btn-hover)] group-hover:drop-shadow-socialBtnHover",
    talentsocialBtnchild: "inline-block overflow-hidden p-[.4rem] bg-[var(--drop-button-background)] border-solid border border-black rounded-[50%]"
}

export default styles;