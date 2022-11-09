import React, { HTMLAttributes } from "react";

// old icon maybe used on feature
export const IconOldCloud3 = React.memo(
  (p: { bg: string } & HTMLAttributes<HTMLOrSVGElement>) => {
    const { bg, ...other } = p;
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 45 45"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...other}
      >
        <rect width="45" height="45" rx="12" fill={bg} />
        <g clipPath="url(#clip0_1967_1562)">
          <path
            d="M34.665 32.2219H10.095C6.74698 32.2219 5.09998 29.6569 5.09998 27.2269C5.09998 23.2309 9.05998 21.9619 11.04 21.8269C11.796 16.6429 16.575 15.8869 18.87 16.1569C21.246 12.4849 24.72 11.6569 26.16 11.7019C32.316 11.8099 33.72 16.9669 34.395 19.1269C38.931 19.7749 40.155 23.8069 40.065 25.6069C40.065 29.6569 36.285 32.2219 34.665 32.2219Z"
            stroke="currentColor"
            fill="none"
            strokeWidth="2.1"
          />
          <path
            d="M28.8527 28.3238C28.3607 28.3444 27.9341 28.2757 27.573 28.1178C27.2201 27.9509 26.9653 27.7497 26.8084 27.5141L27.0658 27.1531C27.2532 27.2923 27.4744 27.4128 27.7294 27.5146C27.9927 27.6074 28.2841 27.6471 28.6035 27.6338C29.0437 27.6154 29.393 27.4885 29.6512 27.2529C29.9177 27.0083 30.0426 26.6831 30.0256 26.2774C30.0105 25.9148 29.8864 25.6346 29.6533 25.4368C29.4285 25.23 29.1251 25.1086 28.7431 25.0726C28.632 25.1032 28.5122 25.1341 28.3838 25.1654C28.264 25.1964 28.1484 25.2228 28.0369 25.2448L27.8729 24.7328C28.2153 24.6493 28.5176 24.5372 28.7798 24.3966C29.0506 24.2556 29.2598 24.0869 29.4073 23.8905C29.5547 23.6941 29.6229 23.4621 29.6117 23.1945C29.6009 22.9355 29.5015 22.7278 29.3134 22.5713C29.1335 22.4059 28.8796 22.33 28.5515 22.3437C28.2753 22.3552 28.019 22.4307 27.7827 22.5703C27.5547 22.7009 27.363 22.8732 27.2076 23.0872L26.8865 22.8541C26.9552 22.6351 27.0809 22.4353 27.2637 22.2547C27.446 22.0655 27.6732 21.9133 27.9451 21.7982C28.217 21.6831 28.5127 21.6189 28.8321 21.6056C29.3587 21.5836 29.7917 21.7039 30.1313 21.9665C30.4705 22.2204 30.6489 22.5589 30.6665 22.9819C30.6784 23.2668 30.6201 23.5286 30.4917 23.7675C30.3716 23.9973 30.2069 24.1944 29.9975 24.3588C29.7882 24.5232 29.5684 24.6448 29.3382 24.7235C29.6058 24.7124 29.876 24.7617 30.1486 24.8714C30.4209 24.9724 30.6527 25.14 30.8441 25.3742C31.0354 25.6083 31.1389 25.911 31.1543 26.2822C31.1705 26.6707 31.0768 27.0161 30.8733 27.3186C30.6783 27.6208 30.403 27.8614 30.0473 28.0406C29.6998 28.2107 29.3016 28.3051 28.8527 28.3238Z"
            fill="currentColor"
          />
          <path
            d="M27.573 28.1178L27.4126 28.4569L27.4227 28.4614L27.573 28.1178ZM26.8084 27.5141L26.5031 27.2964L26.3531 27.5068L26.4963 27.7219L26.8084 27.5141ZM27.0658 27.1531L27.2894 26.8521L26.9824 26.6241L26.7604 26.9354L27.0658 27.1531ZM27.7294 27.5146L27.5904 27.8629L27.5975 27.8657L27.6048 27.8683L27.7294 27.5146ZM29.6512 27.2529L29.904 27.5299L29.9048 27.5291L29.6512 27.2529ZM29.6533 25.4368L29.3994 25.7128L29.405 25.7179L29.4107 25.7227L29.6533 25.4368ZM28.7431 25.0726L28.7783 24.6993L28.7099 24.6928L28.6437 24.7111L28.7431 25.0726ZM28.3838 25.1654L28.295 24.8011L28.29 24.8024L28.3838 25.1654ZM28.0369 25.2448L27.6798 25.3592L27.7817 25.6772L28.1093 25.6127L28.0369 25.2448ZM27.8729 24.7328L27.7841 24.3684L27.3929 24.4638L27.5157 24.8472L27.8729 24.7328ZM28.7798 24.3966L28.6066 24.064L28.6026 24.0661L28.7798 24.3966ZM29.4073 23.8905L29.7071 24.1157L29.7071 24.1157L29.4073 23.8905ZM29.3134 22.5713L29.0595 22.8473L29.0664 22.8537L29.0736 22.8597L29.3134 22.5713ZM27.7827 22.5703L27.9691 22.8958L27.9734 22.8932L27.7827 22.5703ZM27.2076 23.0872L26.9873 23.3907L27.2907 23.611L27.511 23.3075L27.2076 23.0872ZM26.8865 22.8541L26.5287 22.7419L26.4481 22.9992L26.6662 23.1576L26.8865 22.8541ZM27.2637 22.2547L27.5273 22.5215L27.5337 22.5149L27.2637 22.2547ZM27.9451 21.7982L27.7989 21.4529L27.9451 21.7982ZM30.1313 21.9665L29.9018 22.2632L29.9065 22.2667L30.1313 21.9665ZM30.4917 23.7675L30.1614 23.5899L30.1594 23.5938L30.4917 23.7675ZM29.9975 24.3588L29.7659 24.0639L29.7659 24.0639L29.9975 24.3588ZM29.3382 24.7235L29.2168 24.3687L29.3539 25.0982L29.3382 24.7235ZM30.1486 24.8714L30.0086 25.2194L30.0181 25.2229L30.1486 24.8714ZM30.8733 27.3186L30.5621 27.1092L30.5582 27.1153L30.8733 27.3186ZM30.0473 28.0406L30.2122 28.3774L30.2159 28.3755L30.0473 28.0406ZM28.8371 27.9492C28.3881 27.9679 28.0208 27.9043 27.7232 27.7742L27.4227 28.4614C27.8474 28.6471 28.3332 28.7208 28.8684 28.6985L28.8371 27.9492ZM27.7333 27.7788C27.4196 27.6304 27.228 27.4676 27.1206 27.3063L26.4963 27.7219C26.7026 28.0317 27.0206 28.2714 27.4126 28.4568L27.7333 27.7788ZM27.1138 27.7318L27.3711 27.3708L26.7604 26.9354L26.5031 27.2964L27.1138 27.7318ZM26.8422 27.4542C27.0597 27.6157 27.3104 27.7511 27.5904 27.8629L27.8684 27.1663C27.6384 27.0745 27.4467 26.9689 27.2894 26.8521L26.8422 27.4542ZM27.6048 27.8683C27.9191 27.979 28.2589 28.0235 28.6191 28.0085L28.5878 27.2591C28.3093 27.2707 28.0663 27.2357 27.8541 27.1609L27.6048 27.8683ZM28.6191 28.0085C29.1238 27.9874 29.5651 27.8391 29.904 27.5299L29.3985 26.9758C29.2209 27.1379 28.9636 27.2435 28.5878 27.2591L28.6191 28.0085ZM29.9048 27.5291C30.2633 27.2001 30.4212 26.7627 30.4003 26.2618L29.651 26.293C29.6639 26.6035 29.5722 26.8164 29.3977 26.9766L29.9048 27.5291ZM30.4003 26.2618C30.3817 25.8159 30.2238 25.4291 29.896 25.1509L29.4107 25.7227C29.5491 25.8402 29.6393 26.0137 29.651 26.293L30.4003 26.2618ZM29.9072 25.1608C29.6081 24.8856 29.2207 24.7409 28.7783 24.6993L28.708 25.446C29.0296 25.4763 29.2489 25.5743 29.3994 25.7128L29.9072 25.1608ZM28.6437 24.7111C28.5365 24.7405 28.4204 24.7706 28.295 24.8011L28.4726 25.5298C28.6041 25.4977 28.7275 25.4659 28.8426 25.4342L28.6437 24.7111ZM28.29 24.8024C28.1767 24.8316 28.0682 24.8564 27.9645 24.8768L28.1093 25.6127C28.2286 25.5892 28.3514 25.5611 28.4776 25.5285L28.29 24.8024ZM28.394 25.1304L28.23 24.6183L27.5157 24.8472L27.6798 25.3592L28.394 25.1304ZM27.9617 25.0971C28.3294 25.0075 28.6623 24.8851 28.9571 24.7271L28.6026 24.0661C28.3729 24.1893 28.1012 24.2911 27.7841 24.3684L27.9617 25.0971ZM28.953 24.7292C29.2617 24.5685 29.5188 24.3665 29.7071 24.1157L29.1074 23.6653C29.0008 23.8073 28.8395 23.9427 28.6066 24.064L28.953 24.7292ZM29.7071 24.1157C29.9114 23.8436 30.0008 23.5246 29.9864 23.1789L29.2371 23.2101C29.245 23.3996 29.1981 23.5446 29.1074 23.6653L29.7071 24.1157ZM29.9864 23.1789C29.9715 22.8211 29.828 22.5117 29.5531 22.283L29.0736 22.8597C29.1749 22.944 29.2304 23.0499 29.2371 23.2101L29.9864 23.1789ZM29.5672 22.2954C29.2918 22.042 28.9281 21.9527 28.5359 21.969L28.5672 22.7184C28.831 22.7074 28.9752 22.7698 29.0595 22.8473L29.5672 22.2954ZM28.5359 21.969C28.1984 21.9831 27.8819 22.0762 27.592 22.2474L27.9734 22.8932C28.1561 22.7853 28.3522 22.7273 28.5672 22.7184L28.5359 21.969ZM27.5964 22.2449C27.322 22.402 27.0905 22.6102 26.9041 22.8669L27.511 23.3075C27.6355 23.1361 27.7873 22.9998 27.969 22.8957L27.5964 22.2449ZM27.4279 22.7837L27.1069 22.5507L26.6662 23.1576L26.9873 23.3907L27.4279 22.7837ZM27.2444 22.9663C27.2926 22.8124 27.3828 22.6642 27.5273 22.5214L27.0001 21.988C26.7791 22.2064 26.6178 22.4578 26.5287 22.7419L27.2444 22.9663ZM27.5337 22.5149C27.6768 22.3664 27.8602 22.2414 28.0913 22.1436L27.7989 21.4529C27.4861 21.5853 27.2152 21.7646 26.9937 21.9945L27.5337 22.5149ZM28.0913 22.1436C28.3185 22.0474 28.5695 21.9919 28.8477 21.9803L28.8164 21.2309C28.4558 21.246 28.1155 21.3189 27.7989 21.4529L28.0913 22.1436ZM28.8477 21.9803C29.3068 21.9611 29.6472 22.0662 29.9019 22.2632L30.3607 21.6699C29.9363 21.3417 29.4105 21.2062 28.8164 21.2309L28.8477 21.9803ZM29.9065 22.2667C30.1556 22.4532 30.2789 22.6872 30.2918 22.9975L31.0412 22.9663C31.0189 22.4306 30.7853 21.9877 30.356 21.6663L29.9065 22.2667ZM30.2918 22.9975C30.3011 23.2188 30.2563 23.4134 30.1614 23.5899L30.822 23.945C30.9839 23.6438 31.0557 23.3148 31.0412 22.9663L30.2918 22.9975ZM30.1594 23.5938C30.0645 23.7753 29.9346 23.9314 29.7659 24.0639L30.2291 24.6537C30.4791 24.4574 30.6787 24.2194 30.8241 23.9412L30.1594 23.5938ZM29.7659 24.0639C29.5866 24.2047 29.4036 24.3048 29.2168 24.3687L29.4596 25.0783C29.7332 24.9847 29.9898 24.8417 30.2291 24.6537L29.7659 24.0639ZM29.3539 25.0982C29.5633 25.0895 29.7805 25.1275 30.0086 25.2192L30.2886 24.5235C29.9714 24.3958 29.6484 24.3353 29.3226 24.3489L29.3539 25.0982ZM30.0181 25.2229C30.2253 25.2998 30.4027 25.4267 30.5537 25.6115L31.1344 25.1369C30.9027 24.8533 30.6165 24.645 30.2791 24.5198L30.0181 25.2229ZM30.5537 25.6115C30.6829 25.7696 30.7668 25.9888 30.7797 26.2978L31.529 26.2666C31.5109 25.8332 31.388 25.4471 31.1344 25.1369L30.5537 25.6115ZM30.7797 26.2978C30.7928 26.6121 30.7181 26.8776 30.5622 27.1093L31.1844 27.528C31.4356 27.1547 31.5483 26.7293 31.529 26.2666L30.7797 26.2978ZM30.5582 27.1153C30.4032 27.3555 30.1813 27.5532 29.8786 27.7056L30.2159 28.3755C30.6247 28.1696 30.9534 27.8861 31.1884 27.522L30.5582 27.1153ZM29.8823 27.7038C29.5884 27.8477 29.2425 27.9323 28.8371 27.9492L28.8684 28.6985C29.3608 28.678 29.8112 28.5737 30.2122 28.3774L29.8823 27.7038Z"
            fill="currentColor"
          />
          <circle cx="29.805" cy="17.6718" r="1.35" fill="currentColor" />
          <circle cx="30.3112" cy="17.8407" r="0.50625" fill={bg} />
          <circle cx="24.945" cy="17.6718" r="1.35" fill="currentColor" />
          <circle cx="25.4512" cy="17.8407" r="0.50625" fill={bg} />
        </g>
        <defs>
          <clipPath id="clip0_1967_1562">
            <rect
              width="39"
              height="39"
              fill="currentColor"
              transform="translate(3 3)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
