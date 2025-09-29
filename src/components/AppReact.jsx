import React, { useState } from "react";
import Search from "./Search.jsx";
import ProfileContainer from "./Profile/ProfileContainer.jsx";
export default function AppReact() {
  const [filterText, setFilterText] = useState("");

  return (
    <>

      {/* Search Bar */}
      <section className="flex flex-col justify-center place-items-center-safe gap-6 w-1/2 mx-auto">
        <Search
          filterText={filterText}
          onFilterTextChange={setFilterText}
        ></Search>
        {/* Profiles Container */}
        <ProfileContainer filterText={filterText}></ProfileContainer>
      </section>
    </>
  );
}
