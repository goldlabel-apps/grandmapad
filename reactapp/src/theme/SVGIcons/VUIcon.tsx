import * as React from "react";
import { useTheme, SvgIcon, SvgIconProps } from "@mui/material";

export default function VUIcon(props: SvgIconProps) {
  const theme = useTheme();
  const color1 = theme.palette.primary.main;

  return (
    <SvgIcon {...props}>
      <g stroke="none" fill="none" fillRule="evenodd">
        <g>
          <rect fill="none" x="0" y="0" width="24" height="24"></rect>
          <g transform="translate(1, 7)" fill={color1} fillRule="nonzero">
            <path d="M0,0 L3.38602859,0 L6.22572694,5.17863888 L9.08251935,0 L9.7085086,0 L12.4343711,0 L12.4685366,0 L12.4685366,6.93186455 L9.7085086,6.93186455 L9.7085086,4.8277739 L6.22005156,11 L6.21431952,11 L0,0 Z M18,6.93186455 C17.9032356,9.1880109 16.0878668,10.9883101 13.8627389,10.9883101 L13.8513882,10.9883101 C11.6262604,10.9824361 9.81094836,9.1880109 9.71418392,6.93186455 L12.4742119,6.93186455 C12.4798872,7.70932865 13.1002011,8.34064016 13.8627389,8.34064016 C14.6253334,8.34064016 15.239972,7.70932865 15.2513227,6.93186455 L18,6.93186455 Z M15.2513227,0 L18,0 L18,6.93186455 L15.2513227,6.93186455 L15.2513227,0 Z"></path>
            <polygon points="18 9 21 11 18 11"></polygon>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
