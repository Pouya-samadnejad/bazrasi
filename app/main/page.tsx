import ItemCart from "@/components/ItemCart";
import React from "react";
import { data } from "@/data.json";

function page() {
  const items = data.items;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 pl-1.5">
      {items.map((item) => (
        <ItemCart key={item.id} title={item.title} link={item.link} />
      ))}
    </div>
  );
}

export default page;
