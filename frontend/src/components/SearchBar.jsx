import { useState } from 'react';
import '../../styles/SearchBar.css';

/**
 * Componente filho que representa a barra de pesquisa para buscar cidades e exibir sugestões.
 * Props: vem do componente pai (App):
 * - onFetchSuggestions: função a ser chamada para buscar sugestões de cidades com base no input do usuário.
 * 
 * @function handleInputChange
 *  Função que lida com a digitação do usuário no campo de pesquisa. Atualiza o estado local 'city' e chama a função onFetchSuggestions para buscar sugestões.
 *  onFetchSuggestions é chamada a cada mudança no input, permitindo que as sugestões sejam atualizadas em tempo real conforme o usuário digita.
 * 
 * @returns JSX do componente SearchBar, que inclui um campo de input para o nome da cidade.
 */

export const SearchBar = ({ onFetchSuggestions }) => {
    const [city, setCity] = useState('');

    // Função para lidar com digitação do usuário no campo de pesquisa
    const handleInputChange = (event) => {
        const userInput = event.target.value;
        setCity(userInput); // atualiza o estado com o texto digitado
        onFetchSuggestions(userInput); // busca sugestões  
    };

    return (
        <form className='search-bar'>
            <input
                type="text"
                placeholder="Digite o Nome da cidade..."
                value={city}
                onChange={handleInputChange}
                className="search-input"
                autoComplete="off"
            />
        </form>
    );
};