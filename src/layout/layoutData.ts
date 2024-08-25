import { nanoid } from "nanoid";

interface LayoutDataItem {
  key: string | number;
  label: string;
  path: string;
}

export const layoutData: LayoutDataItem[] = [
  {
    key: nanoid(),
    label: "Buttons",
    path: "/",
  },
  {
    key: nanoid(),
    label: "Inputs",
    path: "/inputs",
  },
  {
    key: nanoid(),
    label: "Tooltips",
    path: "/tooltips",
  },
  {
    key: nanoid(),
    label: "Modals",
    path: "/modals",
  },
];
