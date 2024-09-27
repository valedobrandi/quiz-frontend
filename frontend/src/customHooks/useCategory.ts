import { useState, useEffect } from "react";

type CategoriesType = {
  name: string;
  points: number;
  percentage: number;
};

function useCategory() {
  const [categoryList, setCategoryList] = useState<CategoriesType[]>([
    { name: "Linux", points: 5, percentage: 0 },
    { name: "DevOps", points: 7, percentage: 0 },
    { name: "Docker", points: 30, percentage: 0 },
    { name: "Cloud", points: 10, percentage: 0 },
  ]);

  useEffect(() => {
    const addPercentage = calculatePercentages();
    setCategoryList(addPercentage);
  }, []);


  const calculateTotalPoints = (): number => {
    return categoryList.reduce((total, category) => total + category.points, 0);
  };

  const calculatePercentages = () => {
    const addPercentage = categoryList.map((category) => {
    const totalPoints = calculateTotalPoints();
      let percentage = Math.ceil(
        (category.points / totalPoints) * 100
      );
      
      if (percentage > 12) percentage = 12;
      if (percentage < 3) percentage = 3;
      return {...category,percentage,};
    });

    return addPercentage

    
  };

  console.log(categoryList);

  return { categoryList, setCategoryList };
}

export default useCategory;
