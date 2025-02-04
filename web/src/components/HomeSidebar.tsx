import { isUndefined } from "lodash-es";
import { useEffect } from "react";
import { useLocationStore } from "../store/module";
import ShortcutList from "./ShortcutList";
import TagList from "./TagList";
import SearchBar from "./SearchBar";
import UsageHeatMap from "./UsageHeatMap";
import "../less/home-sidebar.less";

const HomeSidebar = () => {
  const locationStore = useLocationStore();
  const query = locationStore.state.query;

  useEffect(() => {
    toggleHomeSidebar(false);
  }, [query]);

  return (
    <>
      <div className="mask" onClick={() => toggleHomeSidebar(false)}></div>
      <aside className="home-sidebar-wrapper">
        <div className="pl-6 pr-4 mb-4 w-full">
          <SearchBar />
        </div>
        <UsageHeatMap />
        <ShortcutList />
        <TagList />
      </aside>
    </>
  );
};

export const toggleHomeSidebar = (show?: boolean) => {
  const sidebarEl = document.body.querySelector(".home-sidebar-wrapper") as HTMLDivElement;
  const maskEl = sidebarEl.previousSibling as HTMLDivElement;

  if (isUndefined(show)) {
    show = !sidebarEl.classList.contains("show");
  }

  if (show) {
    sidebarEl.classList.add("show");
    maskEl.classList.add("show");
  } else {
    sidebarEl.classList.remove("show");
    maskEl.classList.remove("show");
  }
};

export default HomeSidebar;
