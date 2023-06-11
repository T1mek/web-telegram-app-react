
import './App.scss';
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import ProductList from "./components/ProductList/ProductList";



function App() {
    const {tg} = useTelegram()

    useEffect(()=>{
        tg.ready()
    },[tg])

  return (
    <div className="App">
        <Header/>
        <ProductList/>
    </div>
  );
}

export default App;
