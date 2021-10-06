import React, { useEffect, useState } from "react";

export default function SidebarCollections({
  collections,
  onCollectionSelect,
}) {
  useEffect(() => {
    console.log("collections", collections);
    return () => {};
  }, [collections]);
  if (!collections) {
    <div> No Collections</div>;
  }
  return (
    <div className="p-4">
      {collections.map((a, i) => {
        return (
          <Collection
            onCollectionSelect={onCollectionSelect}
            item={a}
            key={i}
          />
        );
      })}
    </div>
  );
}

const Collection = ({ item, onCollectionSelect }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => {
          setOpen((op) => !op);
        }}
        className="flex space-x-3 items-center"
      >
        <div className="h-2 w-2 rounded-full bg-red-400"></div>
        <span>{item.user_id}</span>
      </div>
      {open && (
        <div className="p-4">
          {item.collections.map((a) => (
            <div
              onClick={() => {
                onCollectionSelect(a);
              }}
            >
              {a.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
