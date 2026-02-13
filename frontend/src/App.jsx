import React from 'react';
import '../styles/App.css';
import { useWeather } from './hooks/useWeather';
import { SearchBar } from './components/SearchBar';
import { Suggestions } from './components/Suggestions';
import { WeatherDisplay } from './components/WeatherDisplay';

/**
 * Componente principal da aplicação, responsável por renderizar a interface do usuário e integrar os outros componentes.
 * Importa os hooks e componentes necessários para buscar e exibir os dados climáticos.
 * gerencia o fluxo de dados entre os componentes
 * renderiza a interface final.
 */

function App() {
  const {  
    weather,
    suggestions,
    loading,
    error,
    fetchWeatherByCity,
    fetchSuggestions,
   } = useWeather(); //estados e funções do hook useWeather

    //função para lidar com seleção de sugestão 
    const handleSelectSuggestion = (city) =>{
      fetchWeatherByCity(city); //busca o clima da cidade selecionada
    };


  return (
    <div className="App">
      <h1>Info Clima</h1>

      <div className="search-section">
        <SearchBar 
          onFetchSuggestions={fetchSuggestions}
        /> 
        <Suggestions
          suggestions={suggestions}
          onSelect={handleSelectSuggestion}
        />
      </div>

      <WeatherDisplay
        weather={weather}
        loading={loading}
        error={error}
      />
    </div>  
  );
}

export default App;
