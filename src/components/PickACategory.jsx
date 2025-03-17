import { useLoaderData, useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { setCategories, selectCategory, startGame } from "../hangmanSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function PickACategory() {
  const categories = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [dispatch, categories]);

  function handleSelectCategory(category) {
    dispatch(selectCategory({ category, words: categories[category] }));
    dispatch(startGame())
    navigate(`/pick-a-category/${category}`);
  }

  return (
    <div className="mx-auto max-w-7xl pt-8">
      <div className="flex items-center justify-center">
        <BackButton />

        <img
          src="./images/Pick-a-Category.svg"
          alt=""
          className="mx-auto h-[10.1875rem] w-[28rem]"
        />
      </div>

      <div className="mt-10 grid grid-cols-3 gap-12 text-5xl text-white">
        {Object.keys(categories)?.map((category) => (
          <button
            key={category}
            onClick={() => handleSelectCategory(category)}
            className="h-[11.875rem] w-[24rem] rounded-[2.5rem] bg-[#2463FF] shadow-[inset_0px_-4px_0px_1px_#140E66,inset_0px_4px_0px_2px_#3b74ff] hover:bg-[#3b74ff] hover:shadow-[inset_0px_-4px_0px_1px_#140E66,inset_0px_4px_0px_2px_#2463ff]"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PickACategory;

export async function fetchCategories() {
  const response = await fetch("/data.json");
  if (!response.ok) throw new Error("Failed to load categories");
  const data = await response.json();
  return data.categories;
}
