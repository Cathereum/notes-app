import { useState } from "react";
import "./App.css";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import NewJournalButton from "./components/NewJournalButton/NewJournalButton";
import LeftPannel from "./layouts/LeftPannel/LeftPannel";
import MainPannel from "./layouts/MainPannel/MainPannel";

const INITIAL_DATA = [
  {
    title: "Подготовка проекта",
    text: "Составление бэклога и формирование задач на спринт",
    date: new Date(),
  },
  {
    title: "Поход в горы",
    text: "Заказ инвентаря, составление маршрута",
    date: new Date(),
  },
];

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const addFormData = (formProps) => {
    setData((prevData) => [
      ...prevData,
      {
        title: formProps.title,
        text: formProps.text,
        data: new Date(formProps.date),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPannel>
        <Header />
        <NewJournalButton />
        <JournalList>
          {data.map((el) => (
            <CardButton>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPannel>
      <MainPannel>
        <JournalForm onSubmit={addFormData} />
      </MainPannel>
    </div>
  );
}

export default App;
