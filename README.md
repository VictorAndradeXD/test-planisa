
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
