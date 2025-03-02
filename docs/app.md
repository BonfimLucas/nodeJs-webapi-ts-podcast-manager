# Nome do aplicativo
Podcast Menager

# Descricao do projeto
Um app ao estilo netflix, aonde eu possa centralizar diferentes podcasts separados por categoria

# Dominio
Podcasts feitos em video

# Features
 - Listar os episodios de podcasts em sessoes de categorias
  - [saude, fitness, mentalidade, humor]
 - Filtrar episodios por nome de podcast

# Como

## Feature:
 - Listar os episodios podcasts em sessoes de categorias

 ### Como vou implementar:
 Vou retornar em uma api rest (json) o nome do podcast, nome do episodio, imagem de capa, link do episodio, categoria

  ```js
    [
        {
            podcastName: "Flow",
            episodeName: "CBUM - FLOW #319",
            videoId: "sdajsdjd",
            thumbnail:  "linkaleatorio.com",
            episodeLink: "linkaleatorio.com",
            category: ["saude", "bodybuilder"]
        }
    ],
    [
        {
            podcastName: "Flow",
            episodeName: "Aleatorio - FLOW #219",
            videoId: "dlfhjljks"
            thumbnail:  "linkaleatorio.com",
            episodeLink: "linkaleatorio.com",
            category: ["corrida", "esporte"]
        }
    ]


  ```