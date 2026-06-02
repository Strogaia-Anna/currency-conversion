import { useState, useEffect } from 'react';
import { Header } from './Header';
import './HomePage.css'
import { useNavigate } from "react-router";
import { BrowserRouter } from 'react-router-dom';

export const HomePage = () => {

    const [coures, setCoures] = useState(0);

    useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            setCoures(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    

    return (
        <div>
            <Header valute={coures.Valute}></Header>
            
            <div className='header'>
                <h2>Курс валют ЦБ РФ на сегодня</h2>
            </div>
            <div className='allCurrency'>
                {coures && Object.entries(coures.Valute).map((item) => (
                    <div key={item[0]} className='currency'>
                        <div>{item[1]["CharCode"]}</div>
                        <div>{item[1]["Name"]}</div>
                        <div>{item[1]["Value"]}</div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}