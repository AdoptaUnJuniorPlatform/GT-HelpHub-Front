import FilterDrop from "../components/FilterDrop"
import Line from "../components/Line"
import Logo from "../components/Logo"
import BorderButton from "../components/BorderButton"
import SearchBar from "../components/SearchBar"
import SideBar from "../components/SideBar"
import Title from "../components/Title"
import { categories } from "../Variables/varibles"
// import {  useState } from "react"
import MainLayout from "../layouts/MainLayout"
import useBorderButton from "../hooks/useBorderButton"
import CardsContainer from "../components/CardsContainer"
import { useAvilityContext } from "../context/AvilityContext"
import FilteredCardsContainer from "../components/FilteredCardsContainer"

function Home() {
  const { selectedBorderButton, handleBorderButtonClick } = useBorderButton("TODOS", ["TODOS", "ONLINE", "PRESENCIAL"]);
  const { selectedCategory, setSelectedCategory, filteredHabilities, fetchFilteredHabilities } = useAvilityContext();

  const categorySelectHandler = (category: string) => {
    setSelectedCategory(category);
    fetchFilteredHabilities(category);
    console.log("Home",selectedCategory)
    console.log("Home filtro", filteredHabilities)
  };

  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  // const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null); 
  // const [filteredSubcategories, setFilteredSubcategories] = useState<string[]>([]); 
    
  // function handleCategorySelect(category: string) {
  //   setSelectedCategory(category); 
  //   setSelectedSubcategory(null); 
    
  //   const subcategoryList = subcategories[0][category as keyof typeof subcategories[0]] || [];
  //   setFilteredSubcategories(subcategoryList.length > 0 ? subcategoryList : ['Sin subcategorías']);
  // }
    
  // function handleSubcategorySelect(subcategory: string) {
  //   if (subcategory !== 'Sin subcategorías') {
  //     setSelectedSubcategory(subcategory);
  //   }
  // }

  return (
    <MainLayout>
      <div className="flex items-center justify-between h-[10vh] w-full">
        <Logo 
          className="ml-2 "
          showInitial={false}
        />
        <div className="mt-4 ">
          <SearchBar />
        </div>
      </div>
      <div className="flex justify-end items-center w-full">
        <Line className="bg-violeta-100 w-7/12 my-1" />
      </div>

      <div className="flex w-full h-full">
        <div className="h-full">
          <SideBar />
        </div>

        <div className="flex flex-col w-full ml-[12rem] mt-12">
          <Title title="Filtros" className="tracking-[0.01em] z-0 pb-4" />
          <div className="flex w-full h-auto justify-between">
            <div className="flex  w-full items-center">
                
              <FilterDrop 
                placeholder="Categoría" 
                options={categories} 
                className="w-full sm:w-[45%] lg:w-[15rem]" 
                onSelect={categorySelectHandler}
                selectedOption={selectedCategory} 
              />

              {/* <FilterDrop 
                placeholder="Sub categoría" 
                options={filteredSubcategories} 
                className="w-[15rem] ml-0 lg:ml-2" 
                onSelect={handleSubcategorySelect}
                selectedOption={selectedSubcategory}
              /> */}
                  
              <FilterDrop
                placeholder="Ubicación (CP)"
                options={categories} 
                className="w-full lg:w-[23rem] ml-20"
                onSelect={() => {}}
              />

            </div>
            <div className="flex w-full lg:w-auto">
              <BorderButton
                label="TODOS" 
                className="rounded-l-md w-[7em] h-[3em]" 
                active={selectedBorderButton=== "TODOS"} 
                onClick={() => handleBorderButtonClick("TODOS")}
              />
              <BorderButton
                label="ONLINE" 
                className="w-[7em] h-[3em]"
                active={selectedBorderButton=== "ONLINE"} 
                onClick={() => handleBorderButtonClick("ONLINE")} 

              />
              <BorderButton
                label="PRESENCIAL" 
                className="rounded-r-md w-[7em] h-[3em]" 
                active={selectedBorderButton=== "PRESENCIAL"} 
                onClick={() => handleBorderButtonClick("PRESENCIAL")} 
              />
            </div>
          </div>
          {selectedCategory ? <FilteredCardsContainer /> : <CardsContainer />}
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
