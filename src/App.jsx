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
    id: 1,
    title: "Подготовка проекта",
    text: "Составление бэклога и формирование задач на спринт",
    date: new Date(),
  },
  {
    id: 2,
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
        id: Date.now(),
        title: formProps.title,
        text: formProps.text,
        date: new Date(formProps.date),
      },
    ]);
  };

  const sortElement = (a, b) => {
    if (a.date > b.date) {
      return -1;
    } else {
      return 1;
    }
  };

  return (
    <div className="app">
      <LeftPannel>
        <Header />
        <NewJournalButton />
        <JournalList>
          {data.sort(sortElement).map((el) => (
            <CardButton key={el.id}>
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
