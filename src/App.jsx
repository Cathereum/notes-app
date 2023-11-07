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
  const [selectedItem, setSelectedItem] = useState(null);

  const addFormData = (formValues) => {
    if (!formValues.id) {
      setData([
        ...mapData(data),
        {
          ...formValues,
          id: Date.now(),
          date: new Date(formValues.date),
        },
      ]);
      setSelectedItem(null);
    } else {
      setData(
        [...mapData(data)].map((i) => {
          if (i.id === formValues.id) {
            return { ...formValues };
          }
          return i;
        })
      );
      setSelectedItem(null);
    }
  };

  const deleteItem = (id) => {
    setData([...data.filter((i) => i.id !== id)]);
    setSelectedItem(null);
  };

  return (
    <UserContextProvider>
      <div className="app">
        <LeftPannel>
          <Header />
          <NewJournalButton clearFormData={() => setSelectedItem(null)} />
          <JournalList items={mapData(data)} setItem={setSelectedItem} />
        </LeftPannel>
        <MainPannel>
          <JournalForm
            onSubmit={addFormData}
            onDelete={deleteItem}
            selectedItemData={selectedItem}
          />
        </MainPannel>
      </div>
    </UserContextProvider>
  );
}

export default App;
