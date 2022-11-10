import {
  RiHome3Fill,
  RiFilter3Fill,
  RiContactsBook2Fill,
} from "react-icons/ri";

export const SidebarItems = {
  "": [
    {
      label: "Dashboard",
      icon: <RiHome3Fill />,
    },
    {
      label: "Exchange",
      icon: <RiFilter3Fill />,
      extended: [
        {
          label: "- Swap",
        },
        {
          label: "- Pool",
        },
      ],
    },
  ],
  ABOUT: [
    {
      label: "Contact",
      icon: <RiContactsBook2Fill />,
    },
    {
      label: "Community",
      icon: <RiContactsBook2Fill />,
    },
    {
      label: "Oryen Token",
      icon: <RiContactsBook2Fill />,
    },
  ],
  HELP: [
    {
      label: "Documentation",
      icon: <RiContactsBook2Fill />,
    },
    {
      label: "FAQ",
      icon: <RiContactsBook2Fill />,
    },
  ],
};
