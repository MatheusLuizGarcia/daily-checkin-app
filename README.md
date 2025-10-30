# 📅 Daily Check-in App

Uma aplicação web desenvolvida em **Vue.js** para realizar **check-ins diários**, permitindo que o usuário registre suas atividades, acompanhe seu progresso e visualize os dias registrados em um **calendário interativo**.

---

## 🚀 Funcionalidades

- ✅ **Check-in diário:** o usuário pode registrar suas atividades do dia.  
- 🗓️ **Visualização em calendário:** mostra os dias em que o check-in foi realizado.  
- 📝 **Cadastro de atividades:** o usuário define as atividades que podem ser incluídas no check-in.  
- 🔍 **Consulta de histórico:** permite ver detalhes dos check-ins anteriores.  
- 💾 **Armazenamento local:** os dados são mantidos localmente (via SQLite3), sem necessidade de backend.  

---

## 🧩 Tecnologias utilizadas

- [Vue.js](https://vuejs.org/) — Framework principal da aplicação  
- [Vue Router](https://router.vuejs.org/) — Gerenciamento de rotas   
- [Vite](https://vitejs.dev/) — Ferramenta de build e servidor de desenvolvimento  
- [Tailwind CSS](https://tailwindcss.com/) — Estilização moderna e responsiva 
- [SQLite 3](https://sqlite.org/) — Armazenamento de dados locais  

---

## 🏗️ Estrutura do projeto
```
daily-checkin-app/
├─ public/
│ ├─ assets/ # Recursos estáticos (imagens, ícones)
├─ src/
│ ├─ components/ # Componentes reutilizáveis (botões, inputs, cards)
│ ├─ pages/ # Páginas principais
│ ├─ router/ # Definição das rotas
│ ├─ utils/ # Funções auxiliares
│ ├─ App.vue # Componente raiz
│ └─ main.ts # Ponto de entrada da aplicação
├─ package.json
└─ README.md
└─ index.html
```

---

## ⚙️ Instalação e execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/daily-checkin-app.git

# Acesse o diretório do projeto
cd daily-checkin-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse a aplicação em:
👉 http://localhost:5173

---
## 🧠 Conceito da aplicação

A ideia principal é incentivar o hábito de registrar o dia de forma simples e visual.
O usuário realiza seu check-in diário escolhendo atividades cadastradas previamente.
Esses check-ins são exibidos em um calendário, permitindo acompanhar padrões de comportamento, frequência e produtividade.

---
## 🧰 Melhorias futuras

🔐 Autenticação de usuários

☁️ Sincronização com banco de dados remoto (ex: Firebase ou Supabase)

📊 Dashboard de estatísticas e hábitos

🔔 Notificações de lembrete para realizar o check-in

---
## 🧑‍💻 Autor
<table>
  <tr>
    <td align="center"><a href="https://github.com/MatheusLuizGarcia"><img src="https://avatars0.githubusercontent.com/u/104108871?v=4" width="100px;" alt=""/><br /><sub><b>Matheus Luiz Garcia</b></sub></a><br />
  </tr>
</table>