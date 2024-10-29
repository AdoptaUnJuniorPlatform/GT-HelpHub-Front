import React, { useState } from 'react';

// Definición del componente individual de categoría
interface CategoryProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const Category: React.FC<CategoryProps> = ({ label, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-7 px-3 py-1.5 rounded-[28px] cursor-pointer flex items-center justify-center gap-2.5 ${
        isSelected ? 'bg-[#496ceb] text-white' : 'border border-[#b7b7b7] text-[#434242]'
      }`}
    >
      <span className="text-xs font-medium font-['Roboto'] leading-[18px]">
        {label}
      </span>
    </div>
  );
};

// Componente contenedor para todas las categorías
const Categories: React.FC = () => {
// Estado para manejar las categorías seleccionadas
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Lista de nombres de categorías
  const categoryList = [
    'Animales', 'Idiomas', 'Salud', 'Tutorías', 'Ayuda', 'Informática', 
    'Otros', 'Consultoría', 'Reparaciones', 'Diseño'
  ];

  // Maneja el clic en una categoría
  const handleCategoryClick = (label: string) => {
    if (selectedCategories.includes(label)) {
    // Desmarcar la categoría si ya está seleccionada
      setSelectedCategories(selectedCategories.filter(item => item !== label));
    } else {
    // Agregar la categoría al array de seleccionados
      setSelectedCategories([...selectedCategories, label]);
    }
  };

  return (
    <div className="w-[313px] h-[104px] flex flex-wrap gap-2.5">
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
