import ItemCart from "@/components/ItemCart";
import React from "react";
import { data } from "@/service/data.json";

function page() {
  const items = data.items;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <ItemCart key={item.id} title={item.title} link={item.link} />
      ))}
    </div>
  );
}

export default page;
