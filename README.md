EN - US

# 🦠 COVID-19 Benchmark

An application developed as a test for the company Planiza. It is a Rails API with a React Front-end that allows comparing COVID-19 case data between two countries over a specific period.

## 📜 Background

This project was developed with the goal of generating benchmarks between countries, allowing comparison of the evolution of **new COVID-19 cases** during specific periods. The Rails part, which I’m more familiar with, was not very difficult. The main challenge was building an API to be consumed by a front-end, something I hadn’t had the opportunity to do before. However, after some research, it was implemented correctly.

The application allows:

* 📊 Creating benchmarks between two countries and a specific period. (I limited it to just 3 countries because the API doesn't have a well-defined rule for how each country should be called.)
* 🔍 Fetching COVID-19 data for those countries during the selected period.
* 🗺️ Viewing the results with the total number of new cases during that time.
* ✏️ Editing the name and deleting registered benchmarks.

---

## 🚀 Technologies Used

### 🖥️ Back-End

* Ruby on Rails 7
* PostgreSQL
* HTTParty (for consuming external APIs)

### 🌐 Front-End

* React
* Axios
* React Router DOM

---

## ⚙️ Installation

### 🔧 Back-End (Rails API)

1. Clone the repository:

```bash
git clone https://github.com/your-username/covid-benchmark.git
cd covid-benchmark/backend
```

2. Install dependencies:

```bash
bundle install
```

3. Set up the database (username and password are `admin`):

```bash
rails db:create db:migrate
```

4. Run the server:

```bash
rails s
```

The API will be available at:

```
http://localhost:3000/api/v1
```

---

### 🌐 Front-End (React)

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

## 🔗 API Routes

| Method | Endpoint                | Description                           |
| ------ | ----------------------- | ------------------------------------- |
| GET    | `/covid_benchmarks`     | Lists all benchmarks                  |
| GET    | `/covid_benchmarks/:id` | Shows details of a specific benchmark |
| POST   | `/covid_benchmarks`     | Creates a new benchmark               |
| PUT    | `/covid_benchmarks/:id` | Updates a benchmark                   |
| DELETE | `/covid_benchmarks/:id` | Deletes a benchmark                   |

---

## 🗺️ Front-end Features

* Home page listing all benchmarks.
* Details page showing comparative data between countries.
* Form to create and edit benchmarks.
* Button to delete existing benchmarks.

---

## 🗃️ Data Structure

### ✅ Covid Benchmark

* `id`: integer
* `name`: string
* `country_a`: string
* `country_b`: string
* `start_date`: date
* `end_date`: date

### ✅ Covid Result (related to Covid Benchmark)

* `id`: integer
* `country`: string
* `new_cases`: integer
* `covid_benchmark_id`: integer

---

## 👨‍💻 Developer

Made with ❤️ by [Victor Andrade](https://github.com/VictorAndradeXD)

---

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.


PT-BR
# 🦠 COVID-19 Benchmark

Uma aplicação para Teste da Empresa Planiza que é uma API em Rails com Front-end em React que permite comparar dados de casos de COVID-19 entre dois países em um determinado período.

## 📜 Histórico

Este projeto foi desenvolvido com o objetivo de gerar benchmarks entre países, permitindo comparar a evolução dos **novos casos** de COVID-19 em períodos específicos. A parte de rails que era meu forte não foi muito difícil de fazer apenas tive um desafio em fazer uma aplicação ser uma API para consumo do Front, que eu não tinha tido a oportunidade de fazer ainda, mas com um pouco de pesquisa foi feito corretamente.

A aplicação permite:

- 📊 Cadastrar benchmarks entre dois países e um período específico.(Limitei a apenas 3 países pois a API não tem uma regra bem definida da forma de chamar cada país)
- 🔍 Consultar dados de COVID-19 desses países no período.
- 🗺️ Visualizar os resultados com total de novos casos no período.
- ✏️ Editar o nome e excluir benchmarks cadastrados.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Back-End

- Ruby on Rails 7
- PostgreSQL
- HTTParty (para consumo de APIs externas)

### 🌐 Front-End

- React
- Axios
- React Router DOM

---

## ⚙️ Instalação

### 🔧 Back-End (API Rails)

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/covid-benchmark.git
cd covid-benchmark/backend
```

2. Instale as dependências:

```bash
bundle install
```

3. Configure o banco de dados(o user e a senha é admin):

```bash
rails db:create db:migrate 
```

4. Rode o servidor:

```bash
rails s
```

A API estará disponível em:

```
http://localhost:3000/api/v1
```

---

### 🌐 Front-End (React)

1. Vá para a pasta do front:

```bash
cd ../frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Rode a aplicação:

```bash
npm run dev
```

O front estará disponível em:

```
http://localhost:5173
```

---

## 🔗 Rotas da API

| Método | Endpoint                      | Descrição                           |
|--------|--------------------------------|--------------------------------------|
| GET    | `/covid_benchmarks`            | Lista todos os benchmarks           |
| GET    | `/covid_benchmarks/:id`        | Detalha um benchmark específico     |
| POST   | `/covid_benchmarks`            | Cria um novo benchmark              |
| PUT    | `/covid_benchmarks/:id`        | Atualiza um benchmark               |
| DELETE | `/covid_benchmarks/:id`        | Deleta um benchmark                 |

---

## 🗺️ Funcionalidades do Front-end

- Página inicial com listagem de todos os benchmarks.
- Página de detalhes mostrando os dados comparativos entre países.
- Formulário para criação e edição de benchmarks.
- Botão para deletar benchmarks existentes.

---

## 🗃️ Estrutura de Dados

### ✅ Covid Benchmark

- `id`: integer
- `name`: string
- `country_a`: string
- `country_b`: string
- `start_date`: date
- `end_date`: date

### ✅ Covid Result (relacionado a Covid Benchmark)

- `id`: integer
- `country`: string
- `new_cases`: integer
- `covid_benchmark_id`: integer

---

## 👨‍💻 Desenvolvedor

Feito com ❤️ por [Victor Andrade](https://github.com/VictorAndradeXD)

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
