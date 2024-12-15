import * as React from "react";
import { useTheme, SvgIcon, SvgIconProps } from "@mui/material";

export default function MacIcon(props: SvgIconProps) {
  const theme = useTheme();
  const color1 = theme.palette.primary.main;
  return (
    <SvgIcon {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect fill="none" x="0" y="0" width="24" height="24"></rect>
          <g transform="translate(2, 1)" fill={color1} fillRule="nonzero">
            <path
              d="M18.6017893,17.1446798 C18.2606641,17.9132985 17.8568827,18.6208075 17.3890532,19.271282 C16.7513567,20.1580441 16.2292259,20.7718531 15.8268368,21.1127075 C15.2030645,21.6721965 14.5347366,21.9587308 13.8190688,21.975027 C13.3052921,21.975027 12.6856964,21.8324381 11.9644594,21.543189 C11.2408556,21.2552945 10.5758694,21.1127075 9.96783018,21.1127075 C9.33013419,21.1127075 8.64621186,21.2552945 7.91467163,21.543189 C7.18201665,21.8324381 6.59180009,21.9831751 6.14053936,21.998113 C5.45425027,22.0266303 4.77018949,21.7319479 4.0873808,21.1127075 C3.65157584,20.7419774 3.10647114,20.1064407 2.45345882,19.2060973 C1.75282882,18.2446464 1.17681382,17.129742 0.725553313,15.8586694 C0.242268833,14.485748 0,13.1562821 0,11.8691858 C0,10.3948232 0.326645223,9.12320738 0.980910217,8.05759762 C1.49510488,7.20166111 2.17916616,6.52647149 3.03532148,6.0308072 C3.89147756,5.53514367 4.81655461,5.2825588 5.81278093,5.26639843 C6.35788528,5.26639843 7.07271804,5.43085027 7.96103677,5.75405046 C8.84684952,6.07833693 9.41562446,6.24278872 9.66499382,6.24278872 C9.85142936,6.24278872 10.4832777,6.05049791 11.5544122,5.66713971 C12.5673469,5.31161954 13.4222492,5.16441362 14.1226009,5.22239946 C16.0203736,5.37177777 17.4461394,6.10142248 18.3943296,7.41595045 C16.6970557,8.41895723 15.8574688,9.82379103 15.8741768,11.6259708 C15.8894927,13.0297182 16.4116235,14.1978553 17.4377851,15.1253587 C17.9028295,15.5558388 18.4221764,15.8885448 19,16.1248343 C18.8746903,16.4792678 18.7424171,16.8187638 18.6017893,17.1446798 Z M14.2493053,0.440125262 C14.2493053,1.54037645 13.8371692,2.56767785 13.0156836,3.51853738 C12.0243299,4.64892337 10.8252392,5.30211312 9.52492364,5.19904238 C9.50835491,5.06704618 9.49874756,4.92812475 9.49874756,4.78214169 C9.49874756,3.72590171 9.97019725,2.59551628 10.8074174,1.67127265 C11.2253999,1.2033119 11.7569991,0.814208881 12.4016571,0.503814025 C13.0449224,0.198050444 13.6533794,0.0289565983 14.2256346,0 C14.2423438,0.147086395 14.2493053,0.294182048 14.2493053,0.440110993 L14.2493053,0.440125262 Z"
              id="path4"
            ></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}