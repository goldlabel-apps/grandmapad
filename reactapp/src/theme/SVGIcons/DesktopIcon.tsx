import * as React from "react";
import { useTheme, SvgIcon, SvgIconProps } from "@mui/material";

export default function DesktopIcon(props: SvgIconProps) {
  const theme = useTheme();
  const color1 = theme.palette.primary.main;
  return (
    <SvgIcon {...props}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect fill="none" x="0" y="0" width="24" height="24"></rect>
          <g
            id="desktop_windows_24dp_5F6368_FILL0_wght400_GRAD0_opsz24"
            transform="translate(2, 3)"
            fill={color1}
            fillRule="nonzero"
          >
            <path d="M6,18 L6,16 L8,16 L8,14 L2,14 C1.45,14 0.979166667,13.8041667 0.5875,13.4125 C0.195833333,13.0208333 0,12.55 0,12 L0,2 C0,1.45 0.195833333,0.979166667 0.5875,0.5875 C0.979166667,0.195833333 1.45,0 2,0 L18,0 C18.55,0 19.0208333,0.195833333 19.4125,0.5875 C19.8041667,0.979166667 20,1.45 20,2 L20,12 C20,12.55 19.8041667,13.0208333 19.4125,13.4125 C19.0208333,13.8041667 18.55,14 18,14 L12,14 L12,16 L14,16 L14,18 L6,18 Z M2,12 L18,12 L18,2 L2,2 L2,12 Z M2.0375,12 L2.0375,2 L2.0375,12 Z"></path>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}
