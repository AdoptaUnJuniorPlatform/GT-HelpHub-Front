import FilterDrop from "../components/FilterDrop"
import Footer from "../components/Footer"
import Line from "../components/Line"
import Logo from "../components/Logo"
import Modality from "../components/Modality"
import SearchBar from "../components/SearchBar"
import SideBar from "../components/SideBar"
import Title from "../components/Title"
import { categories, profiles, subcategories } from "../Variables/varibles"
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import { useEffect, useState } from "react"


function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null); 
  const [filteredSubcategories, setFilteredSubcategories] = useState<string[]>([]); 
  const [cardsToShow, setCardsToShow] = useState(profiles.length);
  const [selectedModality, setSelectedModality] = useState("TODOS");

 
  function handleCategorySelect(category: string) {
    setSelectedCategory(category); 
    setSelectedSubcategory(null); 

    const subcategoryList = subcategories[0][category as keyof typeof subcategories[0]] || [];
    setFilteredSubcategories(subcategoryList.length > 0 ? subcategoryList : ['Sin subcategorías']);
  }

  function handleSubcategorySelect(subcategory: string) {
    if (subcategory !== 'Sin subcategorías') {
      setSelectedSubcategory(subcategory);
    }
  }

  const handleModalityClick = (label: string) => {
    setSelectedModality(label);
  };

  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1690) {
      setCardsToShow(4);
    } else if (width >= 1450) {
      setCardsToShow(3); 
    } else if (width >= 998) {
      setCardsToShow(2); 
    } else {
      setCardsToShow(1);
    }
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  return (
    <main className="flex flex-col justify-center items-center w-full min-h-dvh">
      <section className="w-[90%] mt-7 relative">
        <div className="flex items-center justify-between h-[10vh] w-full">
          <Logo className="ml-2 " />
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
                  onSelect={handleCategorySelect}
                  selectedOption={selectedCategory} 
                />

                <FilterDrop 
                  placeholder="Sub categoría" 
                  options={filteredSubcategories} 
                  className="w-[15rem] ml-0 lg:ml-2" 
                  onSelect={handleSubcategorySelect}
                  selectedOption={selectedSubcategory}
                />
                  
                <FilterDrop
                  placeholder="Ubicación (CP)"
                  options={categories} 
                  className="w-full lg:w-[23rem] ml-20"
                  onSelect={() => {}}
                />

              </div>
              <div className="flex w-full lg:w-auto">
                <Modality 
                  label="TODOS" 
                  className="rounded-l-md" 
                  active={selectedModality === "TODOS"} 
                  onClick={() => handleModalityClick("TODOS")}
                />
                <Modality 
                  label="ONLINE" 
                  className=""
                  active={selectedModality === "ONLINE"} 
                  onClick={() => handleModalityClick("ONLINE")} 

                />
                <Modality 
                  label="PRESENCIAL" 
                  className="rounded-r-md" 
                  active={selectedModality === "PRESENCIAL"} 
                  onClick={() => handleModalityClick("PRESENCIAL")} 
                />
              </div>
            </div>

            <div className="flex flex-col w-full mt-5">
              <Title title="Categorías y habilidades" className="sm:text-4xl lg:text-[55px] mt-11 tracking-tight" />
              <div className="mt-11 w-full">
                <Title title="Animales" />
                <div className="flex flex-wrap gap-8 mt-10 w-full">
                  {profiles.slice(0, cardsToShow).map((profile, index) => (
                    <Card key={index} profileData={profile} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mt-14">
                <Title title="Tutorías" />
                <div className="flex flex-wrap gap-8 mt-10 w-full">
                  {profiles.slice(0, cardsToShow).map((profile, index) => (
                    <Card key={index} profileData={profile} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12 pb-20">
          <Pagination/>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;