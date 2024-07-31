import { PiSuitcaseSimpleFill, PiCoffeeFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { FaBellConcierge } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import { CgBrowser } from "react-icons/cg";
import { FaNode } from "react-icons/fa";
export const LEFT_SIDE_BAR = [
  {
    text: "Kĩ năng mềm",
    href: "/",
    icon: FaLightbulb,
  },
  {
    text: "Web Dev",
    href: "/",
    icon: PiSuitcaseSimpleFill,
  },
  {
    text: "Cuộc sống",
    href: "/",
    icon: PiCoffeeFill,
  },
  {
    text: "Thưởng thức",
    href: "/",
    icon: FaBellConcierge,
  },
];

export const SERIES = [
  {
    text: "Front end",
    href: "/front-end",
    icon: CgBrowser,
  },
  {
    text: "Back end",
    href: "/back-end",
    icon: FaNode,
  },
  {
    text: "CI/CD",
    href: "/ci-cd",
    icon: GrSystem,
  },
  {
    text: "Database",
    href: "/database",
    icon: FaDatabase,
  },
];
