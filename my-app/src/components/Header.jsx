import './Header.css'
import { useNavigate } from "react-router";
import { Link, useLocation } from 'react-router-dom';

export const Header = (props) => {
    let navigate = useNavigate();
    const location = useLocation();

    // Проверяем, находится ли пользователь на странице конвертера
    const isConverterPage = location.pathname;
    let buttonText = "Курс валют";
    let buttonLink = "/currency-conversion/HomePage";
    if (isConverterPage === '/currency-conversion/HomePage') {
        buttonText = "Конвертер валют";
        buttonLink = "/currency-conversion/CurrencyConverter";
    }

    return (
        <div className="header">
            <div className="date"> Сегодня {new Date().toLocaleDateString()}</div>
            <div className="warning"> Данные о курсе валют предоставляются с сайта ЦБ РФ. Стоимость валюты указана в рублях</div>
            <button className="switch"  onClick={() => navigate(buttonLink, {state: props.valute})}>{buttonText}</button>
        </div>
    )
}