import {useState} from 'react';
import '../../styles/WeatherDisplay.css'

/**
 * Componente que recebe dados do clima (via props) e exibe de forma organizada
 * Mostra mensagens de erro ou carregamanto
 * 
 */

export const WeatherDisplay = ({weather, loading, error}) => {
    if (loading){
        return <div className="loading"> Carregando...</div>;
    }
    if (error){
        return <div className="error"> Erro: {error} </div>;
    }
    if (!weather){
        return <div className="info"> Digite uma cidade para ver o clima</div>
    }

    return (
        <div className="weather-display">
            <h2> {weather.cidade} </h2>
            <p>Temperatura: {weather.temperatura}°C</p>
            <p>Sensação Térmica: {weather.sensacaoTermica}°C</p>
            <p>Umidade: {weather.humidade}%</p>
            <p>Vento: {weather.vento.velocidade} m/s, direção {weather.vento.direcao}°</p>
            <p>Descrição: {weather.descricao}</p>
        </div>
    );l
};

