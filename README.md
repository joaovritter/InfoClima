# InfoClima

Aplicação para consultar dados de clima usando a API OpenWeather One Call 3.0.

## Estrutura do Projeto

```
InfoClima/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── weatherController.js
│   │   ├── repositories/
│   │   │   └── weatherRepository.js
│   │   ├── services/
│   │   │   └── weatherService.js
│   │   ├── routes.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── styles/
│   ├── public/
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── package.json
├── README.md
└── .gitignore
```

## Instalação e Execução

### Ambiente de Desenvolvimento

Para executar tanto frontend quanto backend simultaneamente:

```bash
npm install
npm run dev
```

### Backend Apenas

```bash
cd backend
npm install
npm run dev
```

### Frontend Apenas

```bash
cd frontend
npm install
npm run dev
```

## Configuração

### Backend

Crie um arquivo `.env` em `backend/`:

```
API_KEY=sua_chave_da_api_openweathermap
PORT=3000
```

### Frontend

Crie um arquivo `.env` em `frontend/`:

```
VITE_API_BASE_URL=http://localhost:3000
```

## API OpenWeather One Call 3.0 - Retorno de Exemplo

Exemplo de resposta completa da API ao consultar clima por coordenadas:

```json
{
  "lat": 40.12,
  "lon": -96.66,
  "timezone": "America/Chicago",
  "timezone_offset": -18000,
  "current": {
    "dt": 1595243443,
    "sunrise": 1595243663,
    "sunset": 1595296278,
    "temp": 293.28,
    "feels_like": 293.82,
    "pressure": 1016,
    "humidity": 100,
    "dew_point": 293.28,
    "uvi": 10.64,
    "clouds": 90,
    "visibility": 10000,
    "wind_speed": 4.6,
    "wind_deg": 310,
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10n"
      },
      {
        "id": 201,
        "main": "Thunderstorm",
        "description": "thunderstorm with rain",
        "icon": "11n"
      }
    ],
    "rain": {
      "1h": 2.93
    }
  },
  "minutely": [
    {
      "dt": 1595243460,
      "precipitation": 2.928
    }
  ],
  "hourly": [
    {
      "dt": 1595242800,
      "temp": 293.28,
      "feels_like": 293.82,
      "pressure": 1016,
      "humidity": 100,
      "dew_point": 293.28,
      "clouds": 90,
      "visibility": 10000,
      "wind_speed": 4.6,
      "wind_deg": 123,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 0.99,
      "rain": {
        "1h": 2.46
      }
    }
  ],
  "daily": [
    {
      "dt": 1595268000,
      "sunrise": 1595243663,
      "sunset": 1595296278,
      "temp": {
        "day": 298.82,
        "min": 293.25,
        "max": 301.9,
        "night": 293.25,
        "eve": 299.72,
        "morn": 293.48
      },
      "feels_like": {
        "day": 300.06,
        "night": 292.46,
        "eve": 300.87,
        "morn": 293.75
      },
      "pressure": 1014,
      "humidity": 82,
      "dew_point": 295.52,
      "wind_speed": 5.22,
      "wind_deg": 146,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 97,
      "pop": 1,
      "rain": 12.57,
      "uvi": 10.64
    }
  ],
  "alerts": [
    {
      "sender_name": "NWS Tulsa (Eastern Oklahoma)",
      "event": "Heat Advisory",
      "start": 1597341600,
      "end": 1597366800,
      "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible."
    }
  ]
}
```

## Campos Principais Utilizados

- **current**: Dados de tempo atual
  - `temp`: Temperatura em °C
  - `feels_like`: Sensação térmica
  - `humidity`: Umidade (%)
  - `wind_speed`: Velocidade do vento (m/s)
  - `wind_deg`: Direção do vento (graus)
  - `weather[0].description`: Descrição do clima
  - `rain["1h"]`: Precipitação na última 1 hora (mm)

- **hourly**: Previsão horária (array)
- **daily**: Previsão diária (array)
- **alerts**: Alertas meteorológicos (array)

