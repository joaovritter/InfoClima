
import { useState, useCallback } from 'react';

/**
 * Esse hook é responsável por buscar os dados climáticos do backend e gerenciar o estado de carregamento e erros.
 * Ele traz os dados do arquivo server.js (backend) e os disponibiliza para os componentes que o utilizarem.
 * O hook utiliza o useState para armazenar os dados climáticos, o estado de carregamento e os erros, 
 * Utiliza useCallback para criar uma função de busca que pode ser reutilizada sem causar re-renderizações desnecessárias.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useWeather = () => {
    const [weather, setWeather] = useState(null); 
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeatherByCity = useCallback(async (city) => {
        //1. ativar loading
        setLoading(true); 
        
        //2. limpar erros e sugestões antigas
        setError(null);
        setSuggestions([]);

        try {
            //3. Requisição para o endpoint de clima
            const response = await fetch (`${API_BASE_URL}/clima?city=${encodeURIComponent(city)}`)

            //4. Verificar se deu erro
            // if(!response.ok){
            //     //vamos printar algo para ver se chega aqui
            //     console.log(response);
            //     throw new Error('Cidade não encontrada');
            // }

             if(!response.ok){
            // Ler o body da resposta para ver o erro específico
            const errorData = await response.json();
            console.error('Erro do servidor:', errorData);
            throw new Error(errorData.error || 'Cidade não encontrada');
        }

            //5. Converter a resposta em JSON
            const data = await response.json();

            //6. Salvar os dados do clima
            setWeather(data);
            
        } catch (error) {
            //7. se der erro, salva a mensagem
            console.error ('Erro ao buscar clima:', error.message);
            setError(error.message);
            setWeather(null);

        }finally{
            //8. desativa o loading (sempre executa) 
            setLoading(false);
        }


    },[]); // garante que afunção seja criada uma única vez

    
    const fetchSuggestions = useCallback(async (partialName)=>{
        //1. se o texto for vazio ou curto, limpa sugestões
        if(!partialName || partialName.length < 3){
            setSuggestions([]);
            return;
        }

        try {
            //2. Fazer a requisição para o endpoint de sugestões
            const response = await fetch (`${API_BASE_URL}/sugestoes?city=${encodeURIComponent(partialName)}`);

            //3. Verifica se deu erro
            if (!response.ok){
                throw new Error("Erro ao buscar sugestões");
            }
            
            //4. Converter a resposta em json
            const data = await response.json();

            //5. salvar as sugestões no estado
            setSuggestions(data);
            

        } catch (error) {
            //6. se der erro, limpa sugestões 
            setError(error.message);
            setSuggestions([]);
        }

    },[]);
    
    return {
        weather,
        suggestions,
        loading,
        error,
        fetchWeatherByCity,
        fetchSuggestions
    };
};
