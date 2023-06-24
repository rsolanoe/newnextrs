import Image from "next/image";
import {
  IoLogoReact,
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
} from "react-icons/io5";
import { SIdebarMenuItem } from "./SIdebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoFootball size={40} />,
    title: "Pokemons",
    subTitle: "Generación Estática",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px] left-0 h-screen overflow-y-auto flex-shrink-0 flex flex-col"
    >
      <div
        id="logo"
        className="my-4 px-6"
      >
        <h1 className="text-lg md:text-2xl font-bold text-white flex items-center">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>

      <div
        id="profile"
        className="px-6 py-10"
      >
        <p className="text-slate-500">Welcome back,</p>
        <a
          href="#"
          className="inline-flex space-x-2 items-center"
        >
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={50}
              height={50}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Rodolfo Solano</span>
        </a>
      </div>

      <div
        id="nav"
        className="w-full px-6 justify-self-end"
      >
        {menuItems.map((item) => (
          <SIdebarMenuItem
            key={item.path}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
