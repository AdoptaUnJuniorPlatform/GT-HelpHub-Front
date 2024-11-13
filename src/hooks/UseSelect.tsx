import { useState } from "react";
import { subcategories } from "../Variables/varibles";

function UseSelect({ handleCategorySelectChange }: { handleCategorySelectChange: (category: string | null) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null); 
  const [filteredSubcategories, setFilteredSubcategories] = useState<string[]>([]); 
    
  function handleCategorySelect(category: string) {
    setSelectedCategory(category);
    handleCategorySelectChange(category); 
    console.log('Categoría seleccionada:', category);
    
    const subcategoryList = subcategories[0][category as keyof typeof subcategories[0]] || [];
    setFilteredSubcategories(subcategoryList.length > 0 ? subcategoryList : ['Sin subcategorías']);
  }
    
  function handleSubcategorySelect(subcategory: string) {
    if (subcategory !== 'Sin subcategorías') {
      setSelectedSubcategory(subcategory);
    }
  }
  return {
    handleCategorySelect,
    handleSubcategorySelect,
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory,
    filteredSubcategories
  }
}

export default UseSelect