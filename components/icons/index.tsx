import { FC } from 'react';

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

export const RightHero = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 480.2 646.8"
  >
    <g>
      <g id="Layer_1">
        <g>
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M360.2,184.7l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M280.1,184.8l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M240.1,207.9l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M200.1,415.8l40-23.1v46.2l-40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M480.1,207.9l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M480.1,254.1l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M440.1,231l40-23.1v46.2l-40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M440.1,277.2l40-23.1v46.2l-40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M480.1,300.3l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M360.1,369.6l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M360.1,415.8l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M320.1,392.7l40-23.1v46.2l-40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M320.1,438.9l40-23.1v46.2l-40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M360.1,461.9l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M400.1,392.7l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M480.1,577.4l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M320.1,485.1l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M280.1,462l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M240.1,485.1l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M400.1,438.9l-40-23.1v46.2l40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M360.1,415.8l40-23.1v46.2l-40,23.1v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M200.1,277.2l80-46.2v46.2l-80,46.2v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M120.2,277.2l80-46.2v46.2l-80,46.2v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M120.1,415.8l80-46.2v46.2l-80,46.2v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M.1,484.8l80-46.2v46.2L.1,531v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M120.1,554.4l80-46.2v46.2l-80,46.2v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M280.1,554.3l80-46.2v46.2l-80,46.2v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M240.1,346.5l-80-46.2v46.2l80,46.2v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M440.1,600.5l-80-46.2v46.2l80,46.2v-46.2Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M200.1,508.2l-80-46.2v46.2l80,46.2v-46.2h0Z"
          />
          <path
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".2px"
            d="M160.1,438.9v92.4"
          />
          <path fill="#bfb3a3" d="M400.2,115.5V23.1L440.2,0v92.4l-40,23.1Z" />
          <path fill="#8fb2cc" d="M440.2,138.6v-46.2l40-23.1v92.4l-40-23.1Z" />
          <path
            fill="#008c81"
            d="M360.1,92.4v92.4l80,46.2v-92.4s-80-46.2-80-46.2Z"
          />
          <path
            fill="#263140"
            d="M320.1,346.5v-92.4l120-69.3v92.4l-120,69.3Z"
          />
          <path
            fill="#bfb3a3"
            d="M400.2,346.5v-46.2l-40-23.1v92.4l40-23.1h0Z"
          />
          <path fill="#212121" d="M400.2,300.3l-40,23.1,40,23.2v-46.2h0Z" />
          <path
            fill="#1dbc83"
            d="M480.2,438.9v-92.4l-80-46.2v184.7l80-46.2h0Z"
          />
          <path fill="#1dbc83" d="M40,415.9v-46.2L0,346.6v46.2l40,23.1Z" />
          <path fill="#8fb2cc" d="M240.1,346.6l80,46.1-80,46.3v-92.5h0Z" />
          <path fill="#bfb3a3" d="M200.2,462l80-46.2v46.2l-80,46.2v-46.2Z" />
          <path fill="#008c81" d="M360.1,462l-80-46.2v46.2l80,46.2v-46.2Z" />
          <path fill="#263140" d="M280.1,415.8l40,23.1-40,23.2v-46.2h0Z" />
        </g>
      </g>
    </g>
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

export const IconLogo = (
  <svg
    width="226"
    height="51"
    viewBox="0 0 226 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_898_126)">
      <path
        d="M34.809 7.3649L23.206 0.665039L0 14.0648V27.4645L11.603 20.7646V34.1643L23.206 40.8642L46.412 27.4645V14.0648L34.809 20.7646V7.3649ZM23.206 27.4591L11.603 20.7592L23.206 14.0593L34.809 20.7592L23.206 27.4591Z"
        fill="white"
      />
      <path
        d="M91.8729 11.0612C91.2127 9.14539 90.0978 7.40278 88.5284 5.83876C86.959 4.26933 85.054 3.01919 82.8081 2.07753C80.5622 1.13587 78.0294 0.665039 75.2044 0.665039C72.3794 0.665039 69.7818 1.16293 67.3951 2.1533C65.0085 3.14366 62.9304 4.53992 61.1499 6.33124C59.3748 8.12797 57.9948 10.2494 57.0206 12.7064C56.0465 15.1634 55.5594 17.8368 55.5594 20.7267C55.5594 23.6167 56.0573 26.2847 57.0477 28.72C58.0381 31.1554 59.4235 33.2822 61.1986 35.0952C62.9737 36.9081 65.0572 38.3152 67.4439 39.3272C69.8305 40.3393 72.4173 40.8426 75.2044 40.8426C77.9915 40.8426 80.5567 40.3717 82.8081 39.4301C85.054 38.4884 86.959 37.2329 88.5284 35.6688C90.0978 34.0994 91.2072 32.3622 91.8729 30.4464L85.1947 26.5878C84.3559 28.9311 82.8947 30.4356 81.244 31.6695C79.588 32.9088 77.5802 33.5257 75.2098 33.5257C72.8395 33.5257 70.8912 32.9846 69.1486 31.9076C67.406 30.8306 66.0584 29.3316 65.1005 27.4158C64.1426 25.5 63.661 23.2703 63.661 20.7267C63.661 18.1832 64.1372 15.9643 65.1005 14.0648C66.0584 12.1652 67.406 10.6769 69.1486 9.59999C70.8912 8.52303 72.9098 7.98185 75.2098 7.98185C77.5099 7.98185 79.588 8.5988 81.244 9.83811C82.8947 11.072 84.2097 12.8796 84.9025 15.0876L91.8729 11.0612Z"
        fill="white"
      />
      <path
        d="M113.017 12.3658C111.172 11.4945 109.045 11.0615 106.642 11.0615C104.623 11.0615 102.756 11.3754 101.051 12.0032C99.3466 12.631 97.88 13.5185 96.6624 14.6658C95.4447 15.8131 94.5572 17.1931 93.9997 18.795L100.267 21.7716C100.754 20.516 101.528 19.5094 102.594 18.7409C103.654 17.9779 104.883 17.5936 106.279 17.5936C107.74 17.5936 108.899 17.9616 109.754 18.6922C110.609 19.4228 111.031 20.332 111.031 21.409V22.172L103.14 23.4492C100.878 23.7956 98.984 24.3909 97.4741 25.2243C95.9588 26.0577 94.8386 27.0968 94.1026 28.3307C93.372 29.57 93.004 30.9879 93.004 32.5898C93.004 34.2946 93.4044 35.7666 94.2054 37.0059C95.0063 38.2452 96.1537 39.1923 97.6527 39.8525C99.1518 40.5128 100.927 40.8429 102.983 40.8429C104.515 40.8429 105.911 40.6427 107.161 40.2422C108.417 39.8417 109.548 39.2302 110.56 38.413C110.901 38.137 111.231 37.8231 111.55 37.4984V40.2151H118.862V21.409C118.862 19.3525 118.348 17.5503 117.319 16.0025C116.291 14.4547 114.857 13.2425 113.012 12.3712L113.017 12.3658ZM111.031 28.8232C111.031 29.9705 110.76 31.0258 110.219 31.9837C109.678 32.9416 108.92 33.6993 107.946 34.2567C106.972 34.8141 105.841 35.0901 104.547 35.0901C103.573 35.0901 102.751 34.8466 102.09 34.3595C101.43 33.8724 101.1 33.1905 101.1 32.3192C101.1 31.3776 101.398 30.6578 101.988 30.1491C102.578 29.6458 103.433 29.2886 104.547 29.0775L111.025 27.9194V28.8124L111.031 28.8232Z"
        fill="white"
      />
      <path
        d="M132.673 0.686523L124.836 5.21082V11.6888H120.031V18.4807H124.836V29.9213C124.836 33.2658 125.783 35.8689 127.683 37.7306C129.583 39.5923 132.256 40.5285 135.703 40.5285C136.293 40.5285 136.921 40.4906 137.587 40.4257C138.247 40.3553 138.842 40.285 139.362 40.2146V33.5797C139.015 33.6122 138.68 33.6501 138.371 33.6825C138.058 33.7204 137.776 33.7366 137.533 33.7366C136.456 33.7366 135.546 33.5797 134.816 33.2658C134.085 32.9519 133.544 32.4757 133.198 31.8317C132.851 31.1877 132.673 30.3759 132.673 29.4018V18.4807H139.362V11.6888H132.673V0.686523Z"
        fill="white"
      />
      <path
        d="M168.764 19.0165C168.196 17.5823 167.373 16.316 166.286 15.212C164.998 13.9077 163.445 12.8849 161.637 12.1543C159.824 11.4237 157.859 11.0557 155.733 11.0557C152.875 11.0557 150.299 11.6997 147.999 12.9877C145.699 14.2757 143.892 16.0454 142.566 18.2913C141.24 20.5372 140.579 23.07 140.579 25.8949C140.579 28.7199 141.251 31.2581 142.593 33.5202C143.935 35.7824 145.742 37.5683 148.026 38.8725C150.305 40.1768 152.875 40.8316 155.733 40.8316C157.892 40.8316 159.878 40.4582 161.691 39.706C163.499 38.9591 165.052 37.92 166.34 36.5996C167.422 35.4847 168.234 34.2508 168.781 32.8924L162.265 29.1312C161.778 30.5599 160.96 31.691 159.808 32.5244C158.66 33.3633 157.302 33.78 155.733 33.78C154.374 33.78 153.162 33.4499 152.101 32.7896C151.041 32.1294 150.202 31.204 149.596 30.0188C148.984 28.8336 148.681 27.4752 148.681 25.9436C148.681 24.4121 148.984 23.0537 149.596 21.8685C150.207 20.6833 151.041 19.7633 152.101 19.0977C153.162 18.4374 154.374 18.1073 155.733 18.1073C157.264 18.1073 158.612 18.524 159.781 19.3628C160.95 20.2017 161.772 21.3328 162.265 22.7561L168.764 19.0111V19.0165Z"
        fill="white"
      />
      <path
        d="M191.629 12.4196C190.011 11.5158 188.123 11.0612 185.963 11.0612C183.977 11.0612 182.245 11.4725 180.768 12.2897C179.853 12.793 179.096 13.4695 178.495 14.3137V0.665039H170.659V40.2148H178.495V23.5517C178.495 22.4369 178.711 21.479 179.15 20.678C179.583 19.8771 180.205 19.2493 181.006 18.7947C181.807 18.3401 182.711 18.1182 183.723 18.1182C184.735 18.1182 185.682 18.3455 186.466 18.7947C187.251 19.2493 187.857 19.8771 188.296 20.678C188.729 21.479 188.951 22.4369 188.951 23.5517V40.2148H196.787V21.8795C196.787 19.7201 196.332 17.8314 195.429 16.2133C194.525 14.5951 193.258 13.3342 191.64 12.425L191.629 12.4196Z"
        fill="white"
      />
      <path
        d="M217.352 11.6895L210.614 30.041L203.876 11.6895H195.461L206.501 39.7011L202.15 50.6655H210.511L225.767 11.6895H217.352Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_898_126">
        <rect
          width="225.767"
          height="50"
          fill="white"
          transform="translate(0 0.665039)"
        />
      </clipPath>
    </defs>
  </svg>
);
