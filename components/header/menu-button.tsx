import React from "react";

interface Props {
  variant: "menu" | "close";
  handler?: () => void;
}

const MenuButton: React.FC<Props> = ({ variant, handler }) => {
  return (
    <>
      <svg width="0" height="0" className="hidden">
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="close"
        >
          <path
            d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
            fill="currentColor"
          ></path>
        </symbol>
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          id="menu"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
          ></path>
        </symbol>
      </svg>
      <button className="btn--menu" onClick={handler}>
        <svg className="icon">
          <use xlinkHref={`#${variant}`}></use>
        </svg>
      </button>
    </>
  );
};

export default MenuButton;
