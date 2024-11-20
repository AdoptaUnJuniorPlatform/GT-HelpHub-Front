import FilterDrop from "../components/FilterDrop"
import Line from "../components/Line"
import Logo from "../components/Logo"
import BorderButton from "../components/BorderButton"
import SearchBar from "../components/SearchBar"
import SideBar from "../components/SideBar"
import Title from "../components/Title"
import { categories } from "../Variables/varibles"
import MainLayout from "../layouts/MainLayout"
import useBorderButton from "../hooks/useBorderButton"
import CardsContainer from "../components/CardsContainer"
import { useAvilityContext } from "../context/AvilityContext"
import FilteredCardsContainer from "../components/FilteredCardsContainer"
import { useState } from "react"
import InputText from "../components/InputText"
import { useProfileContext } from "../context/ProfileContext"

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const { selectedBorderButton, handleBorderButtonClick, convertMode } = useBorderButton("TODOS", ["TODOS", "ONLINE", "PRESENCIAL"]);
  const { selectedCategory, setSelectedCategory,fetchFilteredHabilities } = useAvilityContext();
  const {setPostalCodeError} = useProfileContext();

  const categorySelectHandler = (category: string) => {
    setSelectedCategory(category);
    fetchFilteredHabilities(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPostalCode(value);
    if (!value.trim()) {
      setPostalCodeError(false);
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-between h-[10vh] w-full">
        <Logo 
          className="ml-2 "
          showInitial={false}
        />
        <div className="mt-4 ">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
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
            <div className="flex w-full items-start">
                
              <FilterDrop 
                placeholder="Categoría" 
                options={categories} 
                className="w-full sm:w-[45%] lg:w-[15rem]" 
                onSelect={categorySelectHandler}
                selectedOption={selectedCategory} 
              />

              <InputText
                id="location"
                name="location"
                value={postalCode}
                placeholder="Ubicación (CP)"
                onChange={handlePostalCodeChange}
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
          {(selectedCategory || selectedBorderButton !== "TODOS"  || postalCode) ? (
            <FilteredCardsContainer 
              searchTerm={searchTerm}
              selectedMode={convertMode(selectedBorderButton)}
              postalCode={postalCode}
            />
          ) : (
            <CardsContainer />
          )
          }
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
