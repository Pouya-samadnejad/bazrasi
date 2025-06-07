"use client";
import ItemCart from "@/components/ItemCart";
import React, { useEffect, useState } from "react";
import { data } from "@/data.json";
import { Icon } from "@iconify/react/dist/iconify.js";

function Page() {
  const items = data.items;
  const [viewMode, setViewMode] = useState(() => {
    return localStorage.getItem("viewMode") || "grid";
  });
  const toggleView = () => {
    if (viewMode === "grid") setViewMode("table");
    else if (viewMode === "table") setViewMode("wide");
    else setViewMode("grid");
  };

  const getNextViewModeName = () => {
    if (viewMode === "grid") return "جدول";
    if (viewMode === "table") return "کشیده";
    return "مربعی";
  };
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  return (
    <div>
      <button
        onClick={toggleView}
        className="mb-4  border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]transition-all focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-opacity-50 rounded-xl "
        aria-label={`تغییر حالت نمایش به ${getNextViewModeName()}`}
      >
        {viewMode === "grid" && (
          <Icon icon="solar:widget-5-bold-duotone" width="24" height="24" />
        )}
        {viewMode === "table" && (
          <Icon
            icon="solar:hamburger-menu-bold-duotone"
            width="24"
            height="24"
          />
        )}
        {viewMode === "wide" && (
          <Icon icon="solar:card-2-bold-duotone" width="24" height="24" />
        )}
      </button>
      {viewMode === "grid" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-5 pl-1.5">
          {items.map((item) => (
            <ItemCart
              key={item.id}
              title={item.title}
              link={item.link}
              img={item.image}
              mode="grid"
            />
          ))}
          <div className="md:hidden">
            <ItemCart
              title="تماس با 136"
              link="tel:136"
              img="https://136.bazresi.ir/dargah/assets/logos/DD.png"
              mode="grid"
            />
          </div>
        </div>
      )}
      {viewMode === "table" && (
        <div className="w-full text-right font-medium text-gray-800 space-y-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
              className="cursor-pointer flex items-center gap-4 p-2 rounded-lg transition hover:scale-[1.02] hover:bg-white"
            >
              <div className="w-10 text-center">{index + 1}</div>
              <div className="w-16 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-10 inline-block rounded"
                />
              </div>
              <p className="flex-grow">{item.title}</p>
            </div>
          ))}
          <div
            onClick={() => window.open("tel:136", "_blank")}
            className="cursor-pointer flex items-center gap-4 p-2 rounded-lg transition hover:scale-[1.02] hover:bg-white block md:hidden"
          >
            <div className="w-10 text-center">6</div>
            <div className="w-16 flex-shrink-0">
              <img
                src="https://136.bazresi.ir/dargah/assets/logos/DD.png"
                alt="تماس با 136"
                className="h-10 inline-block rounded"
              />
            </div>
            <p className="flex-grow">تماس با 136</p>
          </div>
        </div>
      )}

      {viewMode === "wide" && (
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item) => (
            <ItemCart
              key={item.id}
              title={item.title}
              link={item.link}
              img={item.image}
              mode="wide"
            />
          ))}
          <div className="md:hidden">
            <ItemCart
              title="تماس با 136"
              link="tel:136"
              img="https://136.bazresi.ir/dargah/assets/logos/DD.png"
              mode="wide"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
