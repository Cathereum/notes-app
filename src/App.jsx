import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalList from "./components/JournalList/JournalList";
import NewJournalButton from "./components/NewJournalButton/NewJournalButton";
import LeftPannel from "./layouts/LeftPannel/LeftPannel";
import MainPannel from "./layouts/MainPannel/MainPannel";

const INITIAL_DATA = [
  // {
  //   id: 1,
  //   title: "Подготовка проекта",
  //   text: "Составление бэклога и формирование задач на спринт",
  //   date: new Date(),
  // },
  // {
  //   id: 2,
  //   title: "Поход в горы",
  //   text: "Заказ инвентаря, составление маршрута",
  //   date: new Date(),
  // },
];

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const addFormData = (formProps) => {
    setData((prevData) => [
      ...prevData,
      {
        id: Date.now(),
        title: formProps.title,
        text: formProps.text,
        date: new Date(formProps.date),
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
