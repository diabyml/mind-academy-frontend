import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../../generated/graphql";

interface Props {}

const Footer: React.FC<Props> = () => {
  const { data } = useMeQuery();
  return (
    <div className="footer | bg-primary-light color-white padding-y-lg">
      <div className="container max-width-md">
        <div className="grid gap-md">
          <div className="col-6@sm">
            <div>
              <div className="margin-bottom-xs">
                <span className="font-bold color-white text-md">
                  MindAcademy
                </span>
              </div>
              <div className="flex items-center flow-vertical">
                <div>
                  <SocialIcon variant="youtube" />
                </div>
                <div>
                  <SocialIcon variant="facebook" />
                </div>
                <div>
                  <SocialIcon variant="twitter" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6@sm">
            <div className="">
              <nav className={`nav`} role={"navigation"}>
                <h3 className="color-white">Liens utiles</h3>
                <ul role="list" className="nav-list">
                  <li>
                    <NextLink href="/cours">Cours</NextLink>
                  </li>
                  <li>
                    <NextLink href="/blog">Blog</NextLink>
                  </li>
                  <li>
                    <NextLink href="/a-propos">A propos</NextLink>
                  </li>
                  <li>
                    <NextLink href="/nous-contacter">Nous contacter</NextLink>
                  </li>
                  {!data?.me && (
                    <>
                      <li>
                        <NextLink href="/inscription">{`S'inscrire`}</NextLink>
                      </li>
                      <li>
                        <NextLink href="/connexion">{`Se Connecter`}</NextLink>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center margin-top-lg">
          <span className="text-xs">Copyright © 2022. Created by Diabyml.</span>
        </div>
      </div>
    </div>
  );
};

interface SocialIconProps {
  variant: "facebook" | "twitter" | "youtube";
}

export const SocialIcon: React.FC<SocialIconProps> = ({ variant }) => {
  return (
    <>
      <svg width="0" height="0" className="hidden">
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21"
          id="twitter"
        >
          <path
            d="M10.3797 21C15.9795 21 20.5191 16.299 20.5191 10.5C20.5191 4.70101 15.9795 0 10.3797 0C4.77981 0 0.240234 4.70101 0.240234 10.5C0.240234 16.299 4.77981 21 10.3797 21Z"
            fill="#1590D8"
          ></path>
          <path
            d="M15.0081 8.47195C15.0151 8.57278 15.0151 8.67363 15.0151 8.77446C15.0151 11.85 12.7546 15.3937 8.62316 15.3937C7.35034 15.3937 6.16795 15.0119 5.17334 14.3493C5.35418 14.3709 5.52805 14.3781 5.71585 14.3781C6.76608 14.3781 7.73288 14.0108 8.50492 13.3842C7.51727 13.3625 6.68959 12.6927 6.40442 11.7708C6.54353 11.7923 6.68263 11.8068 6.8287 11.8068C7.0304 11.8068 7.23212 11.7779 7.4199 11.7275C6.39052 11.5114 5.61846 10.5751 5.61846 9.4443V9.4155C5.91753 9.58837 6.26532 9.69641 6.63392 9.7108C6.02881 9.29303 5.63238 8.57998 5.63238 7.77328C5.63238 7.34113 5.74364 6.94499 5.9384 6.59926C7.0443 8.01097 8.70662 8.93289 10.5706 9.03375C10.5358 8.86088 10.515 8.68084 10.515 8.50077C10.515 7.21869 11.5165 6.17432 12.7615 6.17432C13.4084 6.17432 13.9926 6.45522 14.403 6.90898C14.9107 6.80815 15.3976 6.61367 15.8288 6.34718C15.6619 6.88739 15.3072 7.34116 14.8412 7.62924C15.2933 7.57885 15.7314 7.44917 16.1348 7.26912C15.8289 7.73007 15.4463 8.14061 15.0081 8.47195Z"
            fill="white"
          ></path>
          <mask
            id="mask0_3_317"
            maskUnits="userSpaceOnUse"
            x="5"
            y="6"
            width="12"
            height="10"
          >
            <path
              d="M15.0081 8.47195C15.0151 8.57278 15.0151 8.67363 15.0151 8.77446C15.0151 11.85 12.7546 15.3937 8.62316 15.3937C7.35034 15.3937 6.16795 15.0119 5.17334 14.3493C5.35418 14.3709 5.52805 14.3781 5.71585 14.3781C6.76608 14.3781 7.73288 14.0108 8.50492 13.3842C7.51727 13.3625 6.68959 12.6927 6.40442 11.7708C6.54353 11.7923 6.68263 11.8068 6.8287 11.8068C7.0304 11.8068 7.23212 11.7779 7.4199 11.7275C6.39052 11.5114 5.61846 10.5751 5.61846 9.4443V9.4155C5.91753 9.58837 6.26532 9.69641 6.63392 9.7108C6.02881 9.29303 5.63238 8.57998 5.63238 7.77328C5.63238 7.34113 5.74364 6.94499 5.9384 6.59926C7.0443 8.01097 8.70662 8.93289 10.5706 9.03375C10.5358 8.86088 10.515 8.68084 10.515 8.50077C10.515 7.21869 11.5165 6.17432 12.7615 6.17432C13.4084 6.17432 13.9926 6.45522 14.403 6.90898C14.9107 6.80815 15.3976 6.61367 15.8288 6.34718C15.6619 6.88739 15.3072 7.34116 14.8412 7.62924C15.2933 7.57885 15.7314 7.44917 16.1348 7.26912C15.8289 7.73007 15.4463 8.14061 15.0081 8.47195Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0_3_317)"></g>
        </symbol>
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21"
          id="youtube"
        >
          <path
            d="M10.6199 21C16.2197 21 20.7593 16.299 20.7593 10.5C20.7593 4.70101 16.2197 0 10.6199 0C5.02005 0 0.480469 4.70101 0.480469 10.5C0.480469 16.299 5.02005 21 10.6199 21Z"
            fill="#D0021B"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.4066 7.18182C14.8537 7.30795 15.2059 7.6796 15.3254 8.15151C15.5426 9.00685 15.5426 10.7915 15.5426 10.7915C15.5426 10.7915 15.5426 12.5761 15.3254 13.4314C15.2059 13.9033 14.8537 14.2595 14.4066 14.3856C13.596 14.6148 10.346 14.6148 10.346 14.6148C10.346 14.6148 7.09598 14.6148 6.28546 14.3856C5.8383 14.2595 5.48612 13.9033 5.36659 13.4314C5.14941 12.5761 5.14941 10.7915 5.14941 10.7915C5.14941 10.7915 5.14941 9.00685 5.36659 8.15151C5.48612 7.6796 5.8383 7.30797 6.28546 7.18182C7.09598 6.95264 10.346 6.95264 10.346 6.95264C10.346 6.95264 13.5961 6.95264 14.4066 7.18182ZM9.28278 9.17105V12.4116L11.9992 10.7914L9.28278 9.17105Z"
            fill="white"
          ></path>
          <mask
            id="mask0_3_322"
            maskUnits="userSpaceOnUse"
            x="5"
            y="6"
            width="11"
            height="9"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4066 7.18182C14.8537 7.30795 15.2059 7.6796 15.3254 8.15151C15.5426 9.00685 15.5426 10.7915 15.5426 10.7915C15.5426 10.7915 15.5426 12.5761 15.3254 13.4314C15.2059 13.9033 14.8537 14.2595 14.4066 14.3856C13.596 14.6148 10.346 14.6148 10.346 14.6148C10.346 14.6148 7.09598 14.6148 6.28546 14.3856C5.8383 14.2595 5.48612 13.9033 5.36659 13.4314C5.14941 12.5761 5.14941 10.7915 5.14941 10.7915C5.14941 10.7915 5.14941 9.00685 5.36659 8.15151C5.48612 7.6796 5.8383 7.30797 6.28546 7.18182C7.09598 6.95264 10.346 6.95264 10.346 6.95264C10.346 6.95264 13.5961 6.95264 14.4066 7.18182ZM9.28278 9.17105V12.4116L11.9992 10.7914L9.28278 9.17105Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0_3_322)"></g>
        </symbol>
        <symbol
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21"
          id="facebook"
        >
          <path
            d="M10.1394 21C15.7393 21 20.2788 16.299 20.2788 10.5C20.2788 4.70101 15.7393 0 10.1394 0C4.53957 0 0 4.70101 0 10.5C0 16.299 4.53957 21 10.1394 21Z"
            fill="#272EAE"
          ></path>
          <path
            d="M9.15049 16.4593V11.3822H7.39893V9.36467H9.15049V7.77503C9.15049 6.04794 10.2375 5.10791 11.8246 5.10791C12.5851 5.10791 13.2382 5.16334 13.4278 5.18772V6.99241H12.3271C11.4638 6.99241 11.2971 7.39148 11.2971 7.97457V9.36467H13.2451L12.9779 11.3822H11.2971V16.4593"
            fill="white"
          ></path>
          <mask
            id="mask0_3_312"
            maskUnits="userSpaceOnUse"
            x="7"
            y="5"
            width="7"
            height="12"
          >
            <path
              d="M9.15049 16.4593V11.3822H7.39893V9.36467H9.15049V7.77503C9.15049 6.04794 10.2375 5.10791 11.8246 5.10791C12.5851 5.10791 13.2382 5.16334 13.4278 5.18772V6.99241H12.3271C11.4638 6.99241 11.2971 7.39148 11.2971 7.97457V9.36467H13.2451L12.9779 11.3822H11.2971V16.4593"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0_3_312)"></g>
        </symbol>
      </svg>
      <NextLink href="#">
        <svg
          className="social-icon cursor-pointer"
          style={{ width: "20px", height: "20px" }}
        >
          <use xlinkHref={`#${variant}`}></use>
        </svg>
      </NextLink>
    </>
  );
};

export default Footer;
