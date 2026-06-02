import { useNavigate, useLocation } from "react-router";
import {calcCurrency} from "../utils"
import './CurrencyConverter.css'
import { Header } from './Header';

export const CurrencyConverter = () => {
    const { state } = useLocation();

    const onSubmit = (e) => {
        e.preventDefault();
        const { target } = e;

        const formData = new FormData(target);
        const entries = formData.entries();

        const data = Object.fromEntries(entries);

        const text = formData.get('test');
        const [quantity, valute] = text.split(" ");
        
        console.log(quantity, valute);
        console.log(state[valute.toUpperCase()].Value);

        const result = calcCurrency(quantity, state[valute.toUpperCase()].Value);
        document.getElementsByClassName("result")[0].textContent = result;
        console.log(result);
    }




    return (
        <div className="page">
            <Header></Header>
            <div className="main">
                <form className="form" onSubmit={(e) => onSubmit(e)}>
                    <div className="form-div">
                        <label htmlFor="floatingTract" className="form-label">
                            Введите текст в формате: 15 usd in rub  
                        </label>
                        <input 
                            type="text"
                            name="test" 
                            className="text" 
                            id="floatingTract" 
                            placeholder="Введите текст"
                        />
                        <button className="converter" type="submit">
                            КОНВЕРТИРОВАТЬ
                        </button>
                    </div>    
                </form>
                <div className="result">
                </div>
            </div>
        </div>
    )
}