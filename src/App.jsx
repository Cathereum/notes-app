import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import NewJournalButton from "./components/NewJournalButton/NewJournalButton";
import LeftPannel from "./layouts/LeftPannel/LeftPannel";
import MainPannel from "./layouts/MainPannel/MainPannel";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const lsData = JSON.parse(localStorage.getItem("data"));
    setData(lsData.map((item) => ({ ...item, date: new Date(item.date) })));
  }, []);

  useEffect(() => {
    if (data.length) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  const addFormData = (formValues) => {
    setData((prevData) => [
      ...prevData,
      {
        id: Date.now(),
        title: formValues.title,
        text: formValues.text,
        date: new Date(formValues.date),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPannel>
        <Header />
        <NewJournalButton />
        <JournalList items={data} />
      </LeftPannel>
      <MainPannel>
        <JournalForm onSubmit={addFormData} />
      </MainPannel>
    </div>
  );
}

export default App;
