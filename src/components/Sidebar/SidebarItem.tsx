import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? "bg-[#069FE31C] dark:bg-meta-4 text-[#004AAB]" : ""} text-[#4B5563] group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium dark:text-bodydark1 duration-300 ease-in-out hover:bg-[#069FE31C] dark:hover:bg-meta-4`}
        >
          {item.icon}
          {item.label}
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
