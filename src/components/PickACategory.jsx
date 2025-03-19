import { useLoaderData, useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { setCategories, selectCategory, startGame } from "../hangmanSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

function PickACategory() {
  const categories = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setCategories(categories));
  }, [dispatch, categories]);

  function handleSelectCategory(category) {
    dispatch(selectCategory({ category, words: categories[category] }));
    dispatch(startGame());
    navigate(`/pick-a-category/${category}`);
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5, 
        type: "spring",
        stiffness: 200, 
        damping: 8, 
      },
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-8 pt-8"
      >
        <div className="flex items-center justify-between">
          <BackButton />

          <img
            src="./images/Pick-a-Category.svg"
            alt=""
            className="mx-0 md:mx-auto md:h-[10.1875rem] md:w-[28rem]"
          />
        </div>

        <div className="mt-28 grid grid-cols-1 gap-4 text-3xl text-white md:mt-10 md:grid-cols-2 md:text-5xl lg:grid-cols-3 lg:gap-12">
          {Object.keys(categories)?.map((category, i) => (
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              custom={i} 
              key={category}
              onClick={() => handleSelectCategory(category)}
              className="h-[4.8125rem] w-[20.25rem] rounded-[1.25rem] bg-[#2463FF] shadow-[inset_0px_-4px_0px_1px_#140E66,inset_0px_4px_0px_2px_#3b74ff] hover:bg-[#3b74ff] hover:shadow-[inset_0px_-4px_0px_1px_#140E66,inset_0px_4px_0px_2px_#2463ff] md:h-[11.416875rem] md:rounded-[2.5rem] lg:h-[11.875rem] lg:w-[24rem] lg:rounded-[2.5rem]"
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default PickACategory;

export async function fetchCategories() {
  const response = await fetch("/data.json");
  if (!response.ok) throw new Error("Failed to load categories");
  const data = await response.json();
  return data.categories;
}
