import { useState, useEffect } from "react";

type CategoriesType = {
  name: string;
  points: number;
  percentage: number;
};

const categories = [
  { name: "Linux", points: 20, percentage: 0 },
  { name: "DevOps", points: 5, percentage: 0 },
  { name: "Networking", points: 45, percentage: 0 },
  { name: "Programming", points: 50, percentage: 0 },
  { name: "Cloud", points: 5, percentage: 0 },
  { name: "Docker", points: 50, percentage: 0 },
  { name: "Kubernetes", points: 50, percentage: 0 },
];

function useCategory() {
  const [categoryList, setCategoryList] =
    useState<CategoriesType[]>(categories);

  const calculateTotalPoints = (): number => {
    return categoryList.reduce((total, category) => total + category.points, 0);
  };

  const calculatePercentages = () => {
    const calculatePercentage = categoryList.map((category) => ({
      ...category,
      percentage: Math.ceil((category.points / calculateTotalPoints()) * 100),
    }));
    setCategoryList(calculatePercentage);
  };

  useEffect(() => {
    calculatePercentages();
  }, [categories]);
  console.log(categoryList);
  
  return { categoryList, setCategoryList };
}

export default useCategory;
