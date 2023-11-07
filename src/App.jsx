import "./App.css";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import NewJournalButton from "./components/NewJournalButton/NewJournalButton";
import LeftPannel from "./layouts/LeftPannel/LeftPannel";
import MainPannel from "./layouts/MainPannel/MainPannel";
import { useLocalStorage } from "./hooks/use-localstorage.hook";
import { UserContextProvider } from "./context/user.context";
import { useState } from "react";

const mapData = (data) => {
  if (!data) {
    return [];
  }
  return data.map((items) => ({ ...items, date: new Date(items.date) }));
};

function App() {
  const [data, setData] = useLocalStorage([]);
  const [selectedItem, setSelectedItem] = useState({});

  const addFormData = (formValues) => {
    setData([
      ...mapData(data),
      {
        ...formValues,
        id: Date.now(),
        date: new Date(formValues.date),
      },
    ]);
  };
  console.log("Рендер APP");

  return (
    <UserContextProvider>
      <div className="app">
        <LeftPannel>
          <Header />
          <NewJournalButton />
          <JournalList items={mapData(data)} setItem={setSelectedItem} />
        </LeftPannel>
        <MainPannel>
          <JournalForm onSubmit={addFormData} selectedItemData={selectedItem} />
        </MainPannel>
      </div>
    </UserContextProvider>
  );
}

export default App;
