import React from 'react';

interface CategoryProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ label, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-10 px-4 py-2 rounded-[28px] cursor-pointer flex items-center justify-center gap-2.5 ${
        isSelected ? 'bg-[#496ceb] text-white' : 'border border-[#b7b7b7] text-[#434242]'
      }`}
    >
      <span className="text-sm font-medium font-['Roboto'] leading-[18px]">
        {label}
      </span>
    </div>
  );
};

interface CategoriesProps {
  selectedCategories: string[];
  onSelectCategories: (selectedCategories: string[]) => void;
}

const categoryList = [
  'Animales', 'Ayuda', 'Consultoría', 'Diseño', 
  'Idiomas', 'Informática', 'Reparaciones', 
  'Salud', 'Tutorías', 'Otros'
];

const Categories: React.FC<CategoriesProps> = ({ selectedCategories, onSelectCategories }) => {

  const handleCategoryClick = (label: string) => {
    let updatedCategories;
    if (selectedCategories.includes(label)) {
      updatedCategories = selectedCategories.filter(item => item !== label);
    } else {
      updatedCategories = [...selectedCategories, label];
    }
    onSelectCategories(updatedCategories);
  };

  return (
    <div className="w-full max-w-[400px] flex flex-wrap gap-2.5">
      {categoryList.map((category) => (
        <Category
          key={category}
          label={category}
          isSelected={selectedCategories.includes(category)}
          onClick={() => handleCategoryClick(category)}
        />
      ))}
    </div>
  );
};

export default Categories;
