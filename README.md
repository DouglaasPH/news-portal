# 📌 News Portal

O projeto "portal-news" visa o desenvolvimento de uma plataforma de notícias simples, altamente responsiva e escalável, voltada para portais de notícias locais. Seu objetivo é proporcionar uma experiência de leitura otimizada para os usuários de diferentes dispositivos, oferecendo uma interface intuitiva e adaptável. A plataforma permite a disseminação de informações relevantes para a comunidade local, tornando-se um catalisador para a discussão de temas importantes relacionados a bairros e regiões específicas. Além disso, o portal promove o acesso rápido e eficiente a notícias locais, fomentando um ambiente interativo e dinâmico para que os cidadãos acompanhem e se engajem com os acontecimentos da sua região.

## 🚀 Funcionalidades

- **Página Inicial Responsiva** --
Apresenta um layout flexível e adaptável para diferentes tamanhos de tela, garantindo uma experiência de navegação fluída em dispositivos móveis e desktop.

- **Exibição de Notícias** -
Exibe notícias categorizadas por data e relevância, com título, resumo e imagem destacada, organizadas de maneira atraente e intuitiva.

- **Redirecionamento para Página de Detalhes** -
Permite ao usuário clicar em qualquer notícia para visualizar o conteúdo completo na página de detalhes, incluindo informações adicionais e imagens.

- **Sistema de Busca** -
Funcionalidade de pesquisa para que os usuários encontrem rapidamente notícias específicas, por palavras-chave ou categorias.

- **Ajustes de Responsividade** -
Garantia de uma navegação otimizada em qualquer dispositivo, com ajustes automáticos de layout e funcionalidade conforme a tela do usuário.

- **Integração com APIs de Notícias** -
Capacidade de integrar-se com fontes externas para exibir notícias atualizadas de outras plataformas, garantindo diversidade de conteúdo.

- **Acessibilidade e Usabilidade** -
Interface projetada com foco na acessibilidade, garantindo uma experiência inclusiva para todos os usuários, independentemente de suas necessidades especiais

## 🛠 Tecnologias Utilizadas

- **Frontend:** TypeScript, React, Next.js e Tailwind CSS
- **Backend:** Next.js (API Routes)
- **Banco de Dados:** MySQL

## 📂 Estrutura do Projeto

```
📦 news-portal
├── 📁 src
│   ├── 📁 components
│   │   └── [Componentes reutilizáveis para a UI: barra de navegação e roda pé]
│   ├── 📁 pages
│   │   ├── 📁 api
│   │   │   └── [Contém todas as APIs da aplicação, como endpoints para pegar notícias, etc.]
│   │   └── [Contém todas páginas do site]
│   ├── 📄 page.tsx
│   │   └── [Arquivo principal de inicialização do React ou Next.js]
│   ├── 📁 lib
│   │   └── [Contém a lógica para conexão com o banco de dados]
│   ├── 📄 global.scss
│   │   └── [Arquivo para configuração global do Tailwind]
├── 📄 package.json
│   └── [Contém as dependências do projeto, scripts e configurações do projeto.]
├── 📄 README.md
│   └── [Arquivo que descreve o projeto, suas funcionalidades e como configurá-lo e executá-lo.]
├── 📄 tsconfig.json
│   └── [Configurações do TypeScript, definindo regras e diretórios do projeto.]
└── ...
```

---

## 🚀 Instalação e Execução

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto

# Instalar dependências
npm install

# Iniciar o servidor
npm run dev
```

### 🔧 Configuração do MySQL

1. **Criar Database**

```sql
CREATE DATABASE news_portal;
```

2. **Criar Tabela `autores`**

```sql
CREATE TABLE autores(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL
);
```

3. **Criar Tabela `categorias`**

```sql
CREATE TABLE categorias(
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(250) NOT NULL,
  descricao VARCHAR(250) NOT NULL
);
```

4. **Criar Tabela `materias`**

```sql
CREATE TABLE materias(
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(250) NOT NULL,
  conteudo TEXT NOT NULL,
  autor_id INT,
  categoria_id INT,
  data_publicacao DATETIME,
  FOREIGN KEY (autor_id) REFERENCES autores(id),
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
```

---
## 📡 Endpoints da API

### 🔹 `GET /api/getNewsForHomePage`
**Descrição:** Retorna oito notícias armazenadas no banco de dados em ordem cronológica decrescente, das mais recentes às mais antigas.

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Título da matéria",
    "conteudo": "todo o texto da matéria",
    "data_publicacao": "data no formato: 2025-03-26T05:14:57.000Z",
    "nome": "nome do jornalista/autor da matéria",
  }
]
```

### 🔹 `GET /api/getAllNews`
**Descrição:** Retorna as notícias armazenadas no banco de dados em ordem cronológica decrescente, das mais recentes às mais antigas.

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Título da matéria",
    "conteudo": "todo o texto da matéria",
    "data_publicacao": "data no formato: 2025-03-26T05:14:57.000Z",
    "nome": "nome do jornalista/autor da matéria",
  }
]
```

### 🔹 `GET /api/getNewsAccordingToACategory`
**Descrição:** Retorna todas as notícias com base na categoria de matéria selecionada pelo usuário.

**Resposta:**
```json
[
  {
    "id": 1,
    "titulo": "Nova atualização",
    "conteudo": "todo o texto da matéria",
    "data_publicacao": "2025-04-01",
    "autor_id": 1,
    "categoria_id": 4,  
  }
]
```

### 🔹 `GET /api/getNews`
**Descrição:** Retorna todos os dados de uma matéria.

**Resposta:**
```json
[
  {
    "titulo": "Nova atualização",
    "conteudo": "todo o texto da matéria",
    "data_publicacao": "2025-04-01",
    "autor_nome": "nome do autor",
    "categoria_nome": "nome da categoria",
  }
]
```

### 🔹 `GET /api/getAllCategories`
**Descrição:** Retorna todas categorias.

**Resposta:**
```json
[
  {
    "id": 12,
    "nome": "nome da categoria",
  }
]
```
