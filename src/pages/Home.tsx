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
import { useState } from "react"


function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null); 
  const [filteredSubcategories, setFilteredSubcategories] = useState<string[]>([]); 

 
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

  return (
    <main className="flex flex-col justify-center items-center w-full">
      <section className="w-[90%] mt-7 relative">
        <div className="flex items-center justify-between h-[10vh] w-full">
          <Logo className="ml-2 " />
          <div>
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
          <div className="flex flex-col w-[90%] ml-[10%] mt-12">
            <Title title="Filtros" className="tracking-[0.01em] z-0 pb-4" />
            <div className="flex w-full justify-between">
              <div className="flex">

                <FilterDrop 
                  placeholder="Categoría" 
                  options={categories} 
                  className="w-[15rem]" 
                  onSelect={handleCategorySelect}
                  selectedOption={selectedCategory} 
                />


                <FilterDrop 
                  placeholder="Sub categoría" 
                  options={filteredSubcategories} 
                  className="ml-2 w-[15rem]" 
                  onSelect={handleSubcategorySelect}
                  selectedOption={selectedSubcategory}
                />

                <FilterDrop
                  placeholder="Ubicación (CP)"
                  options={categories} 
                  className="w-[23rem] ml-20"
                  onSelect={() => {}}
                />
              </div>
              <div className="flex">
                <Modality label="TODOS" className="rounded-l-md" />
                <Modality label="ONLINE" className=""/>
                <Modality label="PRESENCIAL" className="rounded-r-md" />
              </div>
            </div>

            <div className="flex flex-col">
              <Title title="Categorías y habilidades" className="text-[55px] mt-11 tracking-tight" />
              <div className="mt-11">
                <Title title="Animales" />
                <div className="flex flex-wrap gap-8 mt-10">
                  {profiles.map((profile, index) => (
                    <Card key={index} profileData={profile} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mt-14">
                <Title title="Tutorías" />
                <div className="flex flex-wrap gap-8 mt-10">
                  {profiles.map((profile, index) => (
                    <Card key={index} profileData={profile} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-12 pb-20">
          <Pagination currentPage={1} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Home;