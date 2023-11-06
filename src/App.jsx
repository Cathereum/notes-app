import "./App.css";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import NewJournalButton from "./components/NewJournalButton/NewJournalButton";
import LeftPannel from "./layouts/LeftPannel/LeftPannel";
import MainPannel from "./layouts/MainPannel/MainPannel";
import { useLocalStorage } from "./hooks/use-localstorage.hook";
import { UserContext } from "./context/user.context";
import { useState } from "react";

const mapData = (data) => {
  if (!data) {
    return [];
  }
  return data.map((items) => ({ ...items, date: new Date(items.date) }));
};

function App() {
  const [data, setData] = useLocalStorage([]);
  const [userId, setUserId] = useState(1);

  const addFormData = (formValues) => {
    setData([
      ...mapData(data),
      {
        id: Date.now(),
        title: formValues.title,
        text: formValues.text,
        date: new Date(formValues.date),
      },
    ]);
  };

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <div className="app">
        <LeftPannel>
          <Header />
          <NewJournalButton />
          <JournalList items={mapData(data)} />
        </LeftPannel>
        <MainPannel>
          <JournalForm onSubmit={addFormData} />
        </MainPannel>
      </div>
    </UserContext.Provider>
  );
}

export default App;
