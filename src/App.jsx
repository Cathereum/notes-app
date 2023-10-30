import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalForm from "./components/JournalForm/JournalForm";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import NewJournalButton from "./components/NewJournalButton/NewJournalButton";
import LeftPannel from "./layouts/LeftPannel/LeftPannel";
import MainPannel from "./layouts/MainPannel/MainPannel";

function App() {
  const data = [
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

  return (
    <div className="app">
      <LeftPannel>
        <Header />
        <NewJournalButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPannel>
      <MainPannel>
        <JournalForm />
      </MainPannel>
    </div>
  );
}

export default App;
