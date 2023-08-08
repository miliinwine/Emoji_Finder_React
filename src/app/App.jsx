import { Header } from "../layout/Header/Header";
import { Footer } from "../layout/Footer/Footer";
import { Input } from "../ui/Input/Input";
import { Card } from "../components/Card/Card";
import { Conteiner } from "../components/Conteiner";
import { useEffect, useState } from "react";
import { Loader } from "../ui/Loader";
import "./App.css";

function App() {
  // Значения Input
  const [inputValue, setInputValue] = useState("");
  // Значения данных массива
  const [data, setData] = useState([]);
  // Обработчик изменений Input
  const handlerInput = (evt) => {
    setInputValue(evt.target.value.trim());
  };
  // Значения загрузки
  const [loading, setLoading] = useState(false);
  // Загрузка данных
  useEffect(() => {
    setLoading(true);
    fetch(
      `http://api.codeoverdose.space/api/emoji/v1/find/?query=${inputValue}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
      .finally(()=> setLoading(false))
  }, [inputValue]);
  return (
    <>
      <Header titleText="Emoji Finder" paragraphText="Find emoji by keywords" />
      <Input handler={handlerInput} type="text" placeholder="Placeholder" />
      <Loader loading={loading} />
      <Conteiner>
        {data
          .filter(
            (el) =>
              el.keywords.toLowerCase().includes(inputValue) ||
              el.title.toLowerCase().includes(inputValue)
          )
          .map((el, i) => (
            <Card key={i} el={el} />
          ))}
      </Conteiner>
      <Footer footerText="2022 © Made with love by me" />
    </>
  );
}

export default App;
