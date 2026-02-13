import '../../styles/Suggestions.css';

/**
 * Componente filho utilizado no componente SearchBar para mostrar as sugestões de cidades enquanto o usuário digita.
 * Recebe as sugestões e a função de seleção como props.
 * faz um map para renderizar cada sugestão em uma lista, exibindo o nome da cidade e informações adicionais (estado e país).
 * Quando digitar uma tecla, chama onSelect para atualizar o valor do input com a cidade selecionada.
 * mostra o nome da cidade, estado e país, se disponíveis.
 * {suggestion.estado && `${suggestion.estado} faz com que o estado seja exibido apenas se estiver presente

 */

export const Suggestions = ({ suggestions, onSelect }) => {

    if (suggestions.length === 0) {
        return null; //não renderiza nada se não houver sugestões
    }

    return (
        <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => onSelect(suggestion.nome)}>
                    <span className="city-name">{suggestion.nome}</span>
                    <span className="city-info">
                        {suggestion.estado && `${suggestion.estado}, `}{suggestion.pais}
                    </span>
                </li>
            ))}
        </ul>
    );

};