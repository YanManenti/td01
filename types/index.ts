import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type AtorSelectProps = {
  label: string;
  isLoaded: boolean;
  data: string[];
  onSelect: (e: any) => void;
};
