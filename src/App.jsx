import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import { useState } from "react";
import Categories from "./Categories";

const allCategories = [
  "all",
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  console.log(categories);
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
