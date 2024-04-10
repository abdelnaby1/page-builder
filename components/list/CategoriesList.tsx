import { IBanner, ICategories } from "@/interfaces";
import React from "react";
import BannerCard from "../cards/BannerCard";
import CategoriesCard from "../cards/CategoriesCard";
interface Iprops {
  categories: ICategories[];
}
const CategoriesList = ({ categories }: Iprops) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-12 rounded-md">
      {categories.length > 0 ? (
        categories.map((categories) => (
          <CategoriesCard key={categories.id} categories={categories} />
        ))
      ) : (
        <h1>No Categories Widgets Available</h1>
      )}
    </div>
  );
};

export default CategoriesList;
