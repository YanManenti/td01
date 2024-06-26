import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type AtorSelectProps = {
  label: string;
  value?: string;
  isLoaded?: boolean;
  onSelect: (e: any) => void;
};

export type SearchProps = {
  starting?: string;
  target?: string;
  sixConnections?: boolean;
};

export type SearchComponentProps = {
  setSearch: (e: SearchProps) => void;
};
