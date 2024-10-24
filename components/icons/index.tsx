import { FC, SVGProps } from 'react';

export interface IconSVG {
  color: string | null;
}
export const IconPlus: FC<{
  icon?: IconSVG | null;
}> = ({ icon }) => (
  <svg
    className="icon-plus"
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.8095 16.8792H16.3636V24.3309H13.8816V16.8792H6.4357V14.3953H13.8816V6.9436H16.3636V14.3953H23.8095V16.8792Z"
      fill={icon?.color || '#1DBC83'}
    />
  </svg>
);

export const IconDash: FC<{
  icon?: IconSVG | null;
}> = ({ icon }) => (
  <svg
    className="icon-dash"
    width="24"
    height="4"
    viewBox="0 0 24 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 3.02389H0L0 0L24 0V3.02389Z"
      fill={icon?.color || '#1DBC83'}
    />
  </svg>
);
export const IconShareLink: FC<{
  icon?: IconSVG | null;
}> = ({ icon }) => (
  <>
    <svg
      width="28"
      height="30"
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9145 21.2056C21.8274 21.2107 20.7817 21.6244 19.9838 22.3651L9.32257 16.1146C9.40472 15.7704 9.44983 15.4184 9.45715 15.0646C9.44983 14.7107 9.40472 14.3587 9.32257 14.0146L19.8642 7.82407C20.5021 8.42687 21.3026 8.82829 22.1661 8.97844C23.0295 9.12859 23.918 9.02085 24.7209 8.66861C25.5239 8.31636 26.2059 7.73515 26.6823 6.99722C27.1587 6.25928 27.4083 5.39718 27.4003 4.51807C27.4003 3.32459 26.9277 2.18 26.0864 1.33609C25.2452 0.492172 24.1042 0.0180664 22.9145 0.0180664C21.7248 0.0180664 20.5838 0.492172 19.7426 1.33609C18.9013 2.18 18.4287 3.32459 18.4287 4.51807C18.436 4.87189 18.4811 5.2239 18.5633 5.56807L8.0217 11.7616C7.38047 11.1601 6.57798 10.7597 5.71292 10.6096C4.84786 10.4596 3.95794 10.5664 3.15261 10.917C2.34729 11.2677 1.66167 11.8467 1.18007 12.5831C0.698471 13.3194 0.441895 14.1809 0.441895 15.0616C0.441895 15.9422 0.698471 16.8037 1.18007 17.5401C1.66167 18.2764 2.34729 18.8555 3.15261 19.2061C3.95794 19.5567 4.84786 19.6636 5.71292 19.5135C6.57798 19.3635 7.38047 18.9631 8.0217 18.3616L18.668 24.6271C18.5904 24.9478 18.5503 25.2765 18.5483 25.6066C18.5525 26.4719 18.812 27.3167 19.2943 28.0342C19.7766 28.7517 20.4599 29.3099 21.2581 29.6382C22.0563 29.9665 22.9335 30.0502 23.779 29.8788C24.6246 29.7075 25.4006 29.2887 26.0092 28.6753C26.6177 28.0619 27.0314 27.2814 27.1982 26.4324C27.365 25.5833 27.2773 24.7037 26.9463 23.9046C26.6152 23.1055 26.0556 22.4227 25.338 21.9423C24.6205 21.4619 23.7771 21.2056 22.9145 21.2056Z"
        fill={icon?.color || '#1DBC83'}
      />
    </svg>
  </>
);
export const LeftSliderArrow: FC<{
  icon?: IconSVG | null;
}> = () => (
  <>
    <svg
      width="87"
      height="87"
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="43.5"
        cy="43.5"
        r="43"
        transform="rotate(180 43.5 43.5)"
        fill="#0D202C"
        fillOpacity="0.9"
        stroke="#1DBC83"
      />
      <path
        d="M18.9393 40.9393C18.3536 41.5251 18.3536 42.4749 18.9393 43.0607L28.4853 52.6066C29.0711 53.1924 30.0208 53.1924 30.6066 52.6066C31.1924 52.0208 31.1924 51.0711 30.6066 50.4853L22.1213 42L30.6066 33.5147C31.1924 32.9289 31.1924 31.9792 30.6066 31.3934C30.0208 30.8076 29.0711 30.8076 28.4853 31.3934L18.9393 40.9393ZM71 40.5L20 40.5L20 43.5L71 43.5L71 40.5Z"
        fill="#1DBC83"
      />
    </svg>
  </>
);
export const RightSliderArrow: FC<{
  icon?: IconSVG | null;
}> = () => (
  <>
    <svg
      width="87"
      height="87"
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="43.5"
        cy="43.5"
        r="43"
        fill="#0D202C"
        fillOpacity="0.6"
        stroke="#1DBC83"
      />
      <path
        d="M68.0607 46.0607C68.6464 45.4749 68.6464 44.5251 68.0607 43.9393L58.5147 34.3934C57.9289 33.8076 56.9792 33.8076 56.3934 34.3934C55.8076 34.9792 55.8076 35.9289 56.3934 36.5147L64.8787 45L56.3934 53.4853C55.8076 54.0711 55.8076 55.0208 56.3934 55.6066C56.9792 56.1924 57.9289 56.1924 58.5147 55.6066L68.0607 46.0607ZM16 46.5H67V43.5H16V46.5Z"
        fill="#1DBC83"
      />
    </svg>
  </>
);

export const RightCarouselArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
  >
    <path
      d="M0.997864 1.73389L0.997864 3.25269L12.4579 9.86703L0.997863 16.4814L0.997863 18.0002L15.0879 9.86703L0.997864 1.73389Z"
      fill="white"
      stroke="white"
    />
  </svg>
);

export const UpSoup = (
  <svg
    width="719"
    height="440"
    viewBox="0 0 719 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_269_17474)">
      <path
        d="M558.69 24.4801L518.69 1.39014V47.5701L558.69 70.6701V24.4801Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M678.88 231.91L718.88 208.82V255L678.88 278.1V231.91Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M637.09 116.91L597.09 93.8101V140L637.09 163.1V116.91Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M597.09 139.97L557.09 116.88V163.07L597.09 186.16V139.97Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M557.09 347.35L597.09 324.25V370.44L557.09 393.54V347.35Z"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M637.09 393.59L597.09 370.5V416.69L637.09 439.78V393.59Z"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M557.09 208.751L637.09 162.561V208.751L557.09 254.931V208.751Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M477.09 208.82L557.09 162.63V208.82L477.09 255V208.82Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M597.09 278.09L517.09 231.9V278.09L597.09 324.28V278.09Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M477.25 23.9203L437.25 0.820312V47.0103L477.25 70.1103V23.9203Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M437.26 46.9103L397.26 23.8203V70.0103L437.26 93.1003V46.9103Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M397.25 254.85L437.25 231.75V277.94L397.25 301.04V254.85Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M677.09 47.6203L637.09 24.5303V70.7203L677.09 93.8103V47.6203Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M677.09 93.8002L637.09 70.7002V116.89L677.09 139.99V93.8002Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M637.09 70.7001L677.09 47.6001V93.7901L637.09 116.88V70.7001Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M637.09 116.9L677.09 93.8101V140L637.09 163.09V116.9Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M677.09 139.97L637.09 116.88V163.07L677.09 186.16V139.97Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M557.09 208.67L517.09 185.58V231.77L557.09 254.86V208.67Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M557.09 254.85L517.09 231.76V277.94L557.09 301.04V254.85Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M517.09 231.901L557.09 208.811V255.001L517.09 278.091V231.901Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M517.09 278L557.09 254.91V301.1L517.09 324.19V278Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M557.09 301.19L517.09 278.09V324.28L557.09 347.37V301.19Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M517.09 324.31L477.09 301.22V347.4L517.09 370.5V324.31Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M477.09 301.18L437.09 278.09V324.28L477.09 347.37V301.18Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M437.25 324.17L397.25 301.08V347.26L437.25 370.36V324.17Z"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M597.09 278.01L557.09 254.91V301.1L597.09 324.2V278.01Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M477.09 301.19L517.09 278.09V324.28L477.09 347.37V301.19Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M397.25 116.3L477.25 70.1099V116.3L397.25 162.48V116.3Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M317.26 116.3L397.26 70.1099V116.3L317.26 162.48V116.3Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M317.25 254.82L397.25 208.63V254.82L317.25 301.01V254.82Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M199.89 322.57L279.88 276.38V322.57L199.89 368.76V322.57Z"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M357.25 370.35L437.25 324.17V370.35L357.25 416.54V370.35Z"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M437.25 370.35L517.25 324.17V370.35L437.25 416.54V370.35Z"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M437.25 185.54L357.25 139.35V185.54L437.25 231.73V185.54Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M397.25 347.2L317.25 301.01V347.2L397.25 393.39V347.2Z"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M357.25 277.83V370.41"
        stroke="#212121"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M199.88 186.87L279.88 232.99L199.88 279.33V186.87Z"
        fill="#8FB2CC"
      />
      <path
        d="M397.25 301.01V208.63L357.25 185.54V277.91L397.25 301.01Z"
        fill="#BFB3A3"
      />
      <path
        d="M119.88 140.68L199.88 94.4902V140.68L119.88 186.87V140.68Z"
        fill="#1DBC83"
      />
      <path
        d="M159.88 256.18L79.88 209.99V256.18L159.88 302.37V256.18Z"
        fill="#BFB3A3"
      />
      <path
        d="M119.88 233.1L79.88 210.04L119.88 186.87V233.1Z"
        fill="#008C81"
      />
      <path
        d="M397.25 254.93L357.25 231.87L397.25 208.7V254.93Z"
        fill="#212121"
      />
      <path
        d="M397.25 300.94L357.25 277.88L397.25 254.71V300.94Z"
        fill="#212121"
      />
      <path
        d="M357.25 278.05L397.25 254.99L357.25 231.82V278.05Z"
        fill="#212121"
      />
      <path d="M0 71.4302V163.8L80 209.99V117.61L0 71.4302Z" fill="#263140" />
      <path
        d="M357.26 139.35V231.72L277.26 277.91V185.53L357.26 139.35Z"
        fill="#008C81"
      />
      <path
        d="M159.89 209.99V163.8L199.88 140.71V186.9L159.89 209.99Z"
        fill="#263140"
      />
      <path
        d="M357.25 324.1V277.91L317.26 254.82V301.01L357.25 324.1Z"
        fill="#1DBC83"
      />
    </g>
    <defs>
      <clipPath id="clip0_269_17474">
        <rect
          width="719.01"
          height="439.4"
          fill="white"
          transform="translate(0 0.600098)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const DownSoup = (
  <svg
    width="601"
    height="395"
    viewBox="0 0 601 395"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_269_17530)">
      <path
        d="M480.81 23.88L440.81 0.790039V46.97L480.81 70.07V23.88Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M480 301.96L520 278.86V325.05L480 348.15V301.96Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M560 117.08L520 93.9805V140.17L560 163.27V117.08Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M520 140.27L480 117.18V163.37L520 186.46V140.27Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M480 209.22L560 163.03V209.22L480 255.4V209.22Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M400 209.22L480 163.03V209.22L400 255.4V209.22Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M520 278.87L440 232.68V278.87L520 325.06V278.87Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M401.04 23.3197L361.04 0.219727V46.4097L401.04 69.5097V23.3197Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M360 47.7804L320 24.6904V70.8804L360 93.9704V47.7804Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M320 255.74L360 232.64V278.83L320 301.93V255.74Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M600 47.8L560 24.71V70.9L600 93.99V47.8Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M600 94.2699L560 71.1699V117.36L600 140.46V94.2699Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M560 71.0004L600 47.9004V94.0904L560 117.18V71.0004Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M560 117.08L600 93.9902V140.18L560 163.27V117.08Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M600 140.27L560 117.18V163.37L600 186.46V140.27Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M480 209.55L440 186.46V232.65L480 255.74V209.55Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M480 255.73L440 232.64V278.82L480 301.92V255.73Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M440 232.31L480 209.22V255.41L440 278.5V232.31Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M440 278.5L480 255.41V301.6L440 324.69V278.5Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M480 301.97L440 278.87V325.06L480 348.15V301.97Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M440 325.02L400 301.93V348.11L440 371.21V325.02Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M400 301.96L360 278.87V325.06L400 348.15V301.96Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M360 324.69L320 301.6V347.78L360 370.88V324.69Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M520 278.84L480 255.74V301.93L520 325.03V278.84Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M400 301.97L440 278.87V325.06L400 348.15V301.97Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M320 117.09L400 70.9004V117.09L320 163.27V117.09Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M240 117.05L320 70.8604V117.05L240 163.23V117.05Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M240 255.41L320 209.22V255.41L240 301.6V255.41Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M120.01 324.97L200 278.78V324.97L120.01 371.16V324.97Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M360 186.41L280 140.22V186.41L360 232.6V186.41Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path d="M200 186.41L280 232.53L200 278.87V186.41Z" fill="#8FB2CC" />
      <path d="M40 140.22V232.59L120 278.78V186.4L40 140.22Z" fill="#263140" />
      <path
        d="M240 209.22V116.84L200 93.75V186.12L240 209.22Z"
        fill="#1DBC83"
      />
      <path d="M0 255.41L80 209.22V255.41L0 301.6V255.41Z" fill="#1DBC83" />
      <path
        d="M200 186.41L120 140.22V186.41L200 232.6V186.41Z"
        fill="#BFB3A3"
      />
      <path d="M320 117.09L360 94.0303L320 70.8604V117.09Z" fill="#BFB3A3" />
      <path d="M400 394.38L360 371.32L400 348.15V394.38Z" fill="#212121" />
      <path d="M360 371.26L400 348.2L360 325.03V371.26Z" fill="#212121" />
      <path
        d="M320 24.4697V116.84L240 163.03V70.6497L320 24.4697Z"
        fill="#008C81"
      />
      <path
        d="M120 278.5V232.31L159.99 209.22V255.41L120 278.5Z"
        fill="#008C81"
      />
      <path
        d="M200 232.51V186.32L239.99 163.23V209.42L200 232.51Z"
        fill="#212121"
      />
      <path d="M240 71.23L280 48.17L240 25V71.23Z" fill="#8FB2CC" />
    </g>
    <defs>
      <clipPath id="clip0_269_17530">
        <rect width="600.12" height="394.38" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LeftHero = (
  <svg
    width="161"
    height="254"
    viewBox="0 0 161 254"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_245_8004)">
      <path
        d="M40.13 115.22L120.13 69.0303V115.22L40.13 161.41V115.22Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M120.13 161.41L40.13 115.22V161.41L120.13 207.6V161.41Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M40.13 207.32L0.130005 184.22V230.41L40.13 253.51V207.32Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M80.13 46.4097L40.13 69.5097V23.3197L80.13 0.219727V46.4097Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M120.13 161.32L160.13 138.22V184.41L120.13 207.51V161.32Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M40.13 69.4097L0.130005 92.5097V46.3197L40.13 23.2197V69.4097Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M0.119995 92.1197L40.12 115.22V69.0297L0.119995 45.9297V92.1197Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M0.130005 184.41L80.13 138.22V184.41L0.130005 230.6V184.41Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_245_8004">
        <rect width="160.25" height="253.72" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const LeftUpSoup = (
  <svg
    width="161"
    height="255"
    viewBox="0 0 161 255"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_245_8095)">
      <path
        d="M0.130005 46.4097L80.12 0.219727V46.4097L0.130005 92.5997V46.4097Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M120.12 115.68L40.12 69.4902V115.68L120.12 161.87V115.68Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M40.12 208.08L80.12 184.98V231.17L40.12 254.27V208.08Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M120.12 115.7L160.12 92.5996V138.79L120.12 161.89V115.7Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M80.12 184.98L0.119995 138.79V184.98L80.12 231.17V184.98Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
      <path
        d="M0.130005 138.79L80.13 92.5996V138.79L0.130005 184.98V138.79Z"
        stroke="white"
        strokeWidth="0.25"
        strokeMiterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_245_8095">
        <rect width="160.25" height="254.48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const AngleDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
  >
    <path
      d="M16.7386 0.957031L15.2203 0.957031L8.60796 12.4136L1.99563 0.957031L0.477289 0.957031L8.60796 15.0427L16.7386 0.957031Z"
      fill="white"
    />
  </svg>
);

export const IconBottomLeadFullWidth = (
  <svg viewBox="0 0 280 163" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M280 1.33498L280 163L0 163L280 1.33498Z" fill="none" />
    <path
      d="M159.93 116.1L119.93 93V139.19L159.93 162.29V116.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M80 116L160 69.8096V116L80 162.19V116Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M240 24.1L200 1V47.19L240 70.29V24.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M240 24.1L280 1V47.19L240 70.29V24.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M280 47.1L240 24V70.19L280 93.29V47.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M200 93.19L280 47V93.19L200 139.38V93.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const IconRightLeadFullWidth = (
  <svg viewBox="0 0 161 255" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.00001 47.19L81 1V47.19L1.00001 93.38V47.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M121 116.19L41 70V116.19L121 162.38V116.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M41 208.1L81 185V231.19L41 254.29V208.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M121 116.1L161 93V139.19L121 162.29V116.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M81 185.19L1 139V185.19L81 231.38V185.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M1.00001 139.19L81 93V139.19L1.00001 185.38V139.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const IconTextImageRight = (
  <svg viewBox="0 0 280 163" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M-1.41332e-05 1.33498L0 163L280 163L-1.41332e-05 1.33498Z"
      fill="none"
    />
    <path
      d="M120.07 116.1L160.07 93V139.19L120.07 162.29V116.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M200 116L120 69.8096V116L200 162.19V116Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M40 24.1L80 1V47.19L40 70.29V24.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M40 24.1L0 1V47.19L40 70.29V24.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M-1.52588e-05 47.1L40 24V70.19L-1.52588e-05 93.29V47.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M80 93.19L0 47V93.19L80 139.38V93.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const IconTextImageLeft = (
  <svg viewBox="0 0 280 163" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M280 1.33498L280 163L0 163L280 1.33498Z" fill="none" />
    <path
      d="M159.93 116.1L119.93 93V139.19L159.93 162.29V116.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M80 116L160 69.8096V116L80 162.19V116Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M240 24.1L200 1V47.19L240 70.29V24.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M240 24.1L280 1V47.19L240 70.29V24.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M280 47.1L240 24V70.19L280 93.29V47.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M200 93.19L280 47V93.19L200 139.38V93.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const IconTopLeadCaseStudy = (
  <svg
    width="320"
    height="185"
    viewBox="0 0 320 185"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 184.76V0H320L0 184.76Z" fill="none" />
    <path
      d="M79.9297 92.2904L39.9297 69.1904V115.38L79.9297 138.48V92.2904Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M0 92.19L80 46V92.19L0 138.38V92.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M119.93 23.2904L79.9297 0.19043V46.3804L119.93 69.4804V23.2904Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M160 46.1L200 23V69.19L160 92.29V46.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M200 69.1L160 46V92.19L200 115.29V69.1Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M40 69.19L120 23V69.19L40 115.38V69.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const IconNewsletter = (
  <svg
    width="281"
    height="164"
    viewBox="0 0 281 164"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.999986 162.665L1 1L281 1.00002L0.999986 162.665Z"
      fill="#212121"
    />
    <path
      d="M121.07 47.9L161.07 71V24.81L121.07 1.71001V47.9Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M201 48.0004L121 94.1904V48.0004L201 1.81042V48.0004Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M41 139.9L81 163V116.81L41 93.71V139.9Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M41 47.19L1 70.29V24.1L41 1.00005V47.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M0.999985 71.19L41 94.29V48.1L0.999985 25V71.19Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M81 70.81L1 117V70.81L81 24.62V70.81Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const IconImageTeam = (
  <svg
    width="81"
    height="93"
    viewBox="0 0 81 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M81 46.81L81 93L1 93L81 46.81Z" fill="none" />
    <path
      d="M41 69.91L1 93L1 46.81L41 23.72L41 69.91Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M81 47.1898L41 70.2798L41 24.0898L81 0.999786L81 47.1898Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M41 69.91L81 93L81 46.81L41 23.72L41 69.91Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const CaseStudySvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="160"
    height="139"
    viewBox="0 0 160 139"
    fill="none"
  >
    <path d="M0 92.38V0H160L0 92.38Z" fill="#212121" />
    <path
      d="M40 23.09L80 0V46.19L40 69.28V23.09Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M0 92.09L40 69V115.19L0 138.28V92.09Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M120 23.09L80 0V46.19L120 69.28V23.09Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M80 0.0898438L40 23.1898L80 46.2798V0.0898438Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
    <path
      d="M40 23.09L0 0V46.19L40 69.28V23.09Z"
      stroke="white"
      strokeWidth="0.25"
      strokeMiterlimit="10"
    />
  </svg>
);

export const InsightsImageTop: FC<
  SVGProps<SVGSVGElement> & {
    width?: number;
    height?: number;
  }
> = ({ width = 81, height = 116, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <g clipPath="url(#InsightsImageTop)">
      <mask
        id="b"
        width={320}
        height={640}
        x={-239}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill="#fff" d="M81 0h-320v640H81V0Z" />
      </mask>
      <g
        stroke="#212121"
        strokeMiterlimit={10}
        strokeWidth={0.25}
        mask="url(#b)"
      >
        <path d="M41 23.09 1 0v46.19l40 23.09V23.09Z" />
        <path d="M41 69.09 1 46v46.19l40 23.09V69.09ZM81 46.09 41 23v46.19l40 23.09V46.09Z" />
        <path d="m1 .09 40 23.1L1 46.28V.09ZM41 23.09 81 0v46.19L41 69.28V23.09Z" />
      </g>
    </g>
    <defs>
      <clipPath id="InsightsImageTop">
        <path fill="#fff" d="M-239 0H81v640h-320z" />
      </clipPath>
    </defs>
  </svg>
);

export const InsightsImageBottomOdd: FC<
  SVGProps<SVGSVGElement> & {
    width?: number;
    height?: number;
  }
> = ({ width = 320, height = 391, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <g clipPath="url(#InsightsImageBottomOdd)">
      <mask
        id="InsightsImageBottomOdd-mask"
        width={320}
        height={640}
        x={0}
        y={-249}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill="#fff" d="M320-249H0v640h320v-640Z" />
      </mask>
      <g mask="url(#InsightsImageBottomOdd-mask)">
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m279.77 94.09 40-23.09v46.18l-40 23.1V94.09ZM240 24.1 200 1v46.19l40 23.1V24.1Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m200.01 47.09-40-23.09v46.19l40 23.09V47.09ZM80.05 253.05l40-23.1v46.19l-40 23.1v-46.19ZM360.01 45.8l-40-23.09V68.9l40 23.09V45.8Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m360.01 91.98-40-23.1v46.19l40 23.1V91.98Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m320.01 68.33 40-23.1v46.19l-40 23.09V68.33Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m320.01 114.5 40-23.09v46.19l-40 23.09V114.5Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m360.01 138.15-40-23.09v46.19l40 23.09v-46.19ZM240.07 206.85l-40-23.09v46.19l40 23.09v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m240.07 253.03-40-23.09v46.18l40 23.1v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m200.07 230.01 40-23.09v46.19l-40 23.09v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m200.07 275.55 40-23.09v46.19l-40 23.09v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m240.07 299.21-40-23.1v46.19l40 23.09v-46.18ZM280.05 230.01l-40-23.09v46.19l40 23.09v-46.19ZM200.07 322.35l-40-23.09v46.18l40 23.1v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m160.09 299.26-40-23.09v46.19l40 23.09v-46.19ZM119.97 322.35l-40-23.09v46.18l40 23.1v-46.19ZM280.05 94.1l-40-23.1v46.19l40 23.1V94.1ZM240.05 252.54l40-23.1v46.19l-40 23.09v-46.18ZM160 116.48l80-46.19v46.19l-80 46.18v-46.18ZM.07 114.48l80-46.19v46.19l-80 46.18v-46.18ZM.07 253l80-46.19V253l-80 46.19V253Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m.07 391.56 80-46.18v46.18l-80 46.19v-46.19ZM160.07 391.56l80-46.18v46.18l-80 46.19v-46.19ZM120.08 183.7l-80-46.19v46.19l80 46.19V183.7Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m80.1 345.6-80-46.19v46.19l80 46.19V345.6ZM40.01 276.01v92.58"
        />
        <path fill="#8FB2CC" d="m160 391.46 80-46.12L160 299v92.46Z" />
        <path fill="#008C81" d="m80 254.19 80 46.19v-46.19L80 208v46.19Z" />
        <path
          fill="#BFB3A3"
          d="m159.96 300.19-80 46.19v-46.19l80-46.19v46.19Z"
        />
        <path fill="#212121" d="m40 276.32 40-23.06-40-23.17v46.23Z" />
        <path fill="#263140" d="m80 253.24-40-23.06L80 207v46.24Z" />
        <path fill="#008C81" d="M280 1v92.37l-80 46.19V47.18L280 1Z" />
        <path fill="#1DBC83" d="M240 209.57v-92.38L320 71v184.75l-80-46.18Z" />
        <path fill="#263140" d="M0 253.66v-92.37L120 92v92.38L0 253.66Z" />
        <path
          fill="#BFB3A3"
          d="M40 139.47V47.09L0 24v92.37l40 23.1ZM200 230.29V184.1l40-23.1v92.38l-40-23.09Z"
        />
        <path fill="#212121" d="m200 184.07 40 23.06-40 23.18v-46.24Z" />
        <path
          fill="#1DBC83"
          d="M120 232.28v-46.19L159.99 163v46.19L120 232.28Z"
        />
        <path fill="#8FB2CC" d="M80 207.29V161.1l40-23.1v92.38l-40-23.09Z" />
      </g>
    </g>
    <defs>
      <clipPath id="InsightsImageBottomOdd">
        <path fill="#fff" d="M0-249h320v640H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const InsightsImageBottomEven: FC<
  SVGProps<SVGSVGElement> & {
    width?: number;
    height?: number;
  }
> = ({ width = 320, height = 391, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <g clipPath="url(#InsightsImageBottomEven)">
      <mask
        id="InsightsImageBottomEven-mask"
        width={320}
        height={640}
        x={0}
        y={-249}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill="#fff" d="M320-249H0v640h320v-640Z" />
      </mask>
      <g mask="url(#InsightsImageBottomEven-mask)">
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m279.77 94.09 40-23.09v46.18l-40 23.1V94.09ZM240 24.1 200 1v46.19l40 23.1V24.1Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m200.01 47.09-40-23.09v46.19l40 23.09V47.09ZM80.05 253.05l40-23.1v46.19l-40 23.1v-46.19ZM360.01 45.8l-40-23.09V68.9l40 23.09V45.8Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m360.01 91.98-40-23.1v46.19l40 23.1V91.98Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m320.01 68.33 40-23.1v46.19l-40 23.09V68.33Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m320.01 114.5 40-23.09v46.19l-40 23.09V114.5Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m360.01 138.15-40-23.09v46.19l40 23.09v-46.19ZM240.07 206.85l-40-23.09v46.19l40 23.09v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m240.07 253.03-40-23.09v46.18l40 23.1v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m200.07 230.01 40-23.09v46.19l-40 23.09v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m200.07 275.55 40-23.09v46.19l-40 23.09v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m240.07 299.21-40-23.1v46.19l40 23.09v-46.18ZM280.05 230.01l-40-23.09v46.19l40 23.09v-46.19ZM200.07 322.35l-40-23.09v46.18l40 23.1v-46.19Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m160.09 299.26-40-23.09v46.19l40 23.09v-46.19ZM119.97 322.35l-40-23.09v46.18l40 23.1v-46.19ZM280.05 94.1l-40-23.1v46.19l40 23.1V94.1ZM240.05 252.54l40-23.1v46.19l-40 23.09v-46.18ZM160 116.48l80-46.19v46.19l-80 46.18v-46.18ZM.07 114.48l80-46.19v46.19l-80 46.18v-46.18ZM.07 253l80-46.19V253l-80 46.19V253Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m.07 391.56 80-46.18v46.18l-80 46.19v-46.19ZM160.07 391.56l80-46.18v46.18l-80 46.19v-46.19ZM120.08 183.7l-80-46.19v46.19l80 46.19V183.7Z"
        />
        <path
          stroke="#212121"
          strokeMiterlimit={10}
          strokeWidth={0.25}
          d="m80.1 345.6-80-46.19v46.19l80 46.19V345.6ZM40.01 276.01v92.58"
        />
        <path fill="#8FB2CC" d="m120.11 229 80 46.12-80 46.34V229Z" />
        <path fill="#BFB3A3" d="m80 344.62 80-46.19v46.19l-80 46.19v-46.19Z" />
        <path
          fill="#008C81"
          d="m239.96 344.62-80-46.19v46.19l80 46.19v-46.19Z"
        />
        <path fill="#212121" d="m200 275.32-40 23.06 40 23.17v-46.23Z" />
        <path fill="#263140" d="m160 298.4 40 23.06-40 23.18V298.4Z" />
        <path fill="#008C81" d="M280 139v92.37l-80 46.19v-92.38L280 139Z" />
        <path fill="#1DBC83" d="M80 162.57V70.19L0 24v184.75l80-46.18Z" />
        <path fill="#8FB2CC" d="M160 116.29V70.1L200 47v92.38l-40-23.09Z" />
        <path fill="#263140" d="M40 277.66v-92.37L160 116v92.38L40 277.66Z" />
        <path
          fill="#BFB3A3"
          d="M160 254.47v-92.38L120 139v92.37l40 23.1ZM280 277.29V231.1l40-23.1v92.38l-40-23.09Z"
        />
        <path fill="#212121" d="m280 231.07 40 23.06-40 23.18v-46.24Z" />
        <path
          fill="#1DBC83"
          d="M240 391.28v-46.19L279.99 322v46.19L240 391.28Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="InsightsImageBottomEven">
        <path fill="#fff" d="M0-249h320v640H0z" />
      </clipPath>
    </defs>
  </svg>
);
