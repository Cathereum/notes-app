import "./App.css";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import NewJournalButton from "./components/NewJournalButton/NewJournalButton";
import LeftPannel from "./layouts/LeftPannel/LeftPannel";
import MainPannel from "./layouts/MainPannel/MainPannel";
import { useLocalStorage } from "./hooks/use-localstorage.hook";
import { UserContextProvider } from "./context/user.context";

const mapData = (data) => {
  if (!data) {
    return [];
  }
  return data.map((items) => ({ ...items, date: new Date(items.date) }));
};

function App() {
  const [data, setData] = useLocalStorage([]);

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
    <UserContextProvider>
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
    </UserContextProvider>
  );
}

export default App;
