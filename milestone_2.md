![download](https://cdn.discordapp.com/attachments/1151164296617787453/1163516339160358912/image.png?ex=653fdc08&is=652d6708&hm=6538497122ee525c3e981901ae8fe0b228c6e442c1bc71ec246f06fbac774e7d&)

###### Afonso Silva nº 20210859
###### Pedro Cesár nº 20211192
###### Camila Madatali nº 20210832
###### Tatiana Yermachenkava nº 20210697

## Universidade Europeia, IADE - Curso de Engenharia Informática

### Trabalho realizado no âmbito da Unidade Curricular de Projeto de Desenvolvimento de Software



# Nome do Projeto

###### 
O nome escolhido para este projeto de desenvolvimento de software é easy erasmus. Decidimos escolher este nome devido ao facto de o website ser direcionado à facilitação de procura de programas ERASMUS para estudantes. Como o nome indica, easy, que remete para a facilidade e eficácia de procura.  
Adicionalmente, decidimos reverter a posição da palavra easy de modo a cativar a atenção do utilizador e criar distinção de outros websites com o mesmo fim. 

# Ideia do Projeto

######
A ideia principal deste projeto é simplificar e melhorar a experiência dos estudantes que desejam participar no programa Erasmus. Compreendemos que o processo de planeamento e execução desta viagem pode ser complexa e desafiadora. Portanto, estamos a desenvolver um website que visa fornecer um conjunto de recursos, informações e suporte online.
Isso incluirá a seleção da universidade e o curso que cada aluno frequenta para receber toda a informação dos destinos associados, tal como informação atualizada quanto a vagas disponíveis, universidades, o tipo de programa e a cidade destino. Pretendemos também desenvolver um suporte onde os alunos de Erasmus possam partilhar as suas dúvidas em relação aos programas disponíveis. Para cada cidade de destino tencionamos fornecer as respetivas informações, assim o estudante fica a conhecer mais sobre a cidade de destino sem necessitar de recorrer a pesquisas sobre o mesmo. 
A nossa missão é tornar o processo de mobilidade académica mais acessível e agradável, permitindo que os alunos aproveitem ao máximo esta oportunidade enriquecedora.



# Pesquisa

######
O programa de Erasmus é um programa de mobilidade da união Europeia destinado a cidadãos, por norma são jovens universitários, que pretendem adquirir uma experiência no estrageiro, tal como acontece com vário programas de mobilidade para fora da Europa. Tendo estes programas como principal objetivo promover a educação de uma forma mais dinâmica, contribuindo assim para o desenvolvimento pessoal e profissional dos alunos.  

Uma vez que o processo de mobilidade é um tema com bastante abordagem nos dias de hoje, existem diversos websites que visam a fornecer algum suporte aos alunos. Por isso, decidimos realizar uma pesquisa sobre o que há no mercado para termos a oportunidade de criar um website inovador e diferenciador dos websites existentes. 

 Na pesquisa realizada deparámo-nos que os sites existentes visam a fornecer suporte quanto à disponibilidade de informação, recursos, detalhes sobre as oportunidades de educação entre outros. Destacamos assim quatro web sites: 

   - “Portal Erasmus+” que é o site oficial do programa Erasmus+ da Comissão Europeia que oferece informações abrangentes sobre oportunidades de mobilidade, projetos financiados, requisitos e muito mais.  

   - “Erasmus Student Network” que é uma organização estudantil internacional que oferece suporte e recursos para estudantes Erasmus. Este site contém informações úteis sobre vida universitária, integração e eventos.  

   - “Eurodesk” que é uma rede de informações europeia que fornece detalhes sobre oportunidades de educação, mobilidade e voluntariado na Europa, incluindo o programa Erasmus+.  

   - “Erasmus Mundus Association” que reúne estudantes e ex-alunos do programa Erasmus Mundus, oferecendo informações e recursos sobre oportunidades de mestrado e doutorado em toda a Europa.



![download](https://cdn.discordapp.com/attachments/933841062009643068/1163620603060813864/Captura_de_ecra_2023-10-17_003151.png?ex=65403d22&is=652dc822&hm=8e675fa5d2d3bef5d97056caef8aa232f7f3e4c89e266b589b3ba07df15f6df4&)


x - O website é composto pela funcionalidade 


# Descrição do Objetivo

######
O nosso website tem como propósito fornecer informações essenciais e pertinentes a cada estudante sobre as opções de destino disponíveis no âmbito do programa Erasmus oferecidas pela respetiva universidade. Um dos principais objetivos desta plataforma é estabelecer um ambiente virtual onde cada instituição de ensino superior possa inserir detalhes relevantes sobre os países de destino, os tipos de programas oferecidos, as cidades associadas, as universidades parceiras e o número de vagas disponíveis para cada curso ou área de estudo específica. 

Além disso, estamos empenhados em criar uma comunidade interativa, para tal, estamos a explorar a implementação de funcionalidades como um ChatBot o que irá permitir que os alunos deixem comentários e compartilhem experiências. A finalidade disso é cultivar um senso de proximidade e conexão entre os participantes, incentivando assim a concretização dessa empolgante aventura Erasmus. 

Ao consolidar todas essas informações num único website, a nossa plataforma reúne assim a informação de qualquer universidade, basta esta se registar no site e poderá administrar toda essa informação. Aqui cada instituição pode fazer upload dos seus dados pertinentes, permitindo, subsequentemente, que os seus alunos tenham acesso a essas informações de maneira eficiente. Assim, este website tem o propósito de unir instituições de ensino superior e estudantes num espaço virtual coeso, facilitando a divulgação e o acesso às oportunidades Erasmus disponíveis. 


# Público-Alvo

######
O nosso website é direcionado a estudantes universitários que têm interesse em seguir com o programa de mobilidade. Este público inclui jovens com idades compreendidas entre os 18 e os 25 anos. Estamos comprometidos em fornecer informações, orientações e recursos especialmente adaptados às necessidades e interesses desta faixa etária, que está no auge das suas experiências educacionais e busca de oportunidades de enriquecimento pessoal e académico no âmbito do programa Erasmus.  

# Descrição de Arquitetura

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163829370641711124/Captura_de_ecra_2023-10-17_as_14.20.31.png?ex=6540ff90&is=652e8a90&hm=9601f1befe2a18a56e979ee97f2677636657b924d5361e8940900c9bc6de4e2b&)

######
A arquitetura de Solução para o nosso Website "easyerasmus" irá ser uma arquitetura dividida em quatro partes:  User,  Web tier,  Data tier e Cache tier. Esta divisão permite que as diferentes partes sejam escaladas independentemente, caso seja necessário no futuro.

######
  1) User, também conhecida como front-end e tal como o nome indica, representa a parte onde é possível os utilizadores obterem acesso e interagirem com o nosso website. Desta forma, é nesta parte onde está representada a componente WEB Browser.
  2) Web tier, também conhecida como back-end, esta é responsável por manter o nosso website operacional e disponível na internet. Assim, a Web tier é composta por três Web servers replicados, onde vai estar implementada a REST API para lidar com as solicitações dos clientes.
  3) Data tier  engloba um Database server para fornecer acesso as respetivas bases de dados, que são responsáveis por armazenar e gerenciar os dados de forma eficiente e segura.
  4) Cache tier é uma camada temporária de armazenamento de dados, muito mais rápida que o banco de dados. Os benefícios de ter uma de cache separada incluem melhor desempenho do sistema, capacidade de reduzir cargas de trabalho do banco de dados e capacidade de escalar a cache de forma independente.

 Para além destas quatro partes, a nossa arquitetura também é composta pelas seguintes componentes:
-	O serviço DNS (Domain Name System) tem como função mapear nomes de domínio (www.mywebsite.com) para endereços de IP, que por sua vez são utilizados para localizar o servidor onde a API está hospedada. Esta componente está diretamente ligada à parte do user. 
- Load Balancer é a componente que está a fazer a interligação entre a front-end e a back-end. O load balancer é uma tecnologia que tem como principal função distribuir uniformemente o tráfego de rede e as solicitações entre os vários servidores. O load balancer também proporciona uma componente de segurança, uma vez que este comunica com os servidores através de IP´s privados. IP privado é um endereço que só é alcançável entre servidores da mesma rede, ou seja, é inalcançável ao longo da internet.

 Uma vez que já falamos de cada uma das componentes e as suas respetivas funções, passo a explicar agora o processamento de dados e como o diagrama funciona no geral.
Os usuários acedem ao website através de nomes de domínio, a DNS é responsável por receber esta ligação e retornar o endereço IP do load balancer. O load balancer, por sua vez, conecta-se aos web servers através de IPs privados, melhorando a segurança dos dados. Estes passam a receber solicitações HTTP. Para além da sua principal função, o load balancer tem a capacidade de rotear o tráfego todo para um dos web servers caso os outros fiquem offline, e desta forma impedir que o website vá abaixo. Graças ao Autoscale o sistema vai ter a capacidade de autoescalar, verticalmente ou horizontalmente, consoante a carga de trabalho. Assim caso o tráfego do website aumente espontaneamente, o sistema por exemplo adicionará mais um web server ao server pool e o load balancer passa a enviar automaticamente solicitações para este. Desta forma garantimos redundância, alta disponibilidade, boa escalabilidade futura e suporte a failover.

 Após receber a solicitação os web servers primeiro consultam a cache para ver se tem a resposta disponível. Se tiver, eles enviam os dados de volta para o cliente. Caso não tenha, os web servers contactam o servidor de base de dados e este, por sua vez, consulta as bases de dados. A cache guarda a resposta para futuras ocasiões, esta estratégia denomina se read-through cache. Para além desta estratégia, decidimos também usar o modelo Master-Slave para desta forma garantir redundância e alta disponibilidade no Cache tier.
 
 Neste modelo existe uma cache principal (Master) e uma ou mais caches secundárias (Slaves). A cache principal (Master) é a fonte principal dos dados, quando ocorre alguma modificação ou atualização nos dados armazenados na Master cache, essa mudança é replicada para todas as caches secundárias (Slaves). Enquanto as Slaves são caches que armazenam cópias dos dados da Master cache, permanecendo sempre sincronizadas.
 
 Apesar de a Master cache ser a primeira a receber as solicitações, as Slave caches acabam por distribuir as solicitações entre elas. Melhorando a velocidade de acesso aos dados. Se porventura a cache principal falhar, as caches secundárias podem assumir temporariamente, garantido a disponibilidade dos dados. 
 
 Para o bom funcionamento da cache é necessário ter em atenção a política de expiração e a consistência dos dados, uma vez que não é conveniente os dados ficarem guardados permanentemente na cache e ter atenção quando se modifica ou se atualiza a base de dados. 

 Para aumentar a performance, confiabilidade e alta disponibilidade decidimos usar o modelo de base de dados master-slave. Neste modelo, existe uma base de dados original (master) e uma ou mais réplicas (slaves), que são cópias da base de dados original. 
 
 A master DB apenas suporta operações de escrita, isto é atualização, inserção ou exclusão de dados. Enquanto a slave DB só suporta operações de leitura, ou seja, apenas consulta de dados. Se uma slave DB ficar offline, todas as operações de leitura serão direcionadas para a master DB temporariamente. Assim que o problema for solucionado, uma nova slave DB irá substituir a antiga. Caso exista múltiplas slaves DB´s, as operações de leitura serão redirecionadas para as que estão em bom funcionamento. 
 
 Num cenário em que a master DB fique offline, uma slave DB será promovida a master e todas as operações serão executadas nesta nova master DB. E uma nova slave DB será replicada para substituir a antiga. O database server irá ter a capacidade de rotear as operações de escrita para a master DB e as operações de leitura para a slave DB simultaneamente.


# Guiões de Teste 

######
Os guiões de teste são um meio para garantir a qualidade e a confiabilidade do software, através da identificação de problemas, da verificação de requisitos e da melhoria da experiência do utilizador.  

Por isso, com o propósito de criar um website eficaz iremos criar três guiões de teste, cada um uma abordagem diferente. 

#### 1. Descrever o foco principal do website para o utilizador.  

##### Objetivo: Avaliar a usabilidade da funcionalidade do website para os estudantes. 

##### Descrição do cenário de teste: 

######
   1) O utilizador entra no website pela primeira vez e depara-se com a página principal, homepage. 

   2) Ao descer na página em que está, o utilizador é solicitado a selecionar a sua universidade.  

   3) Após a universidade selecionada, o utilizador é direcionado para a página de registo.  

   4) O utilizador preenche as suas credenciais e clica no botão “Sign up”. 

   5) Com o registo bem-sucedido o utilizador entra na página informativa da sua universidade.  

   6) Ao visualizar os cursos disponíveis seleciona o seu.  

  7) Encontra-se agora noutra página onde visualiza uma tabela com os países, programas, universidades, cidades e vagas que tem disponível para fazer os seus Erasmus ou outra mobilidade internacional.

  8) O utilizador interessou-se por uma das universidades do programa e decide verificar se ainda existem vagas para o mesmo, por isso clica no botão de atualização de vagas. 

  9) Após a verificação vai à navbar e clica no perfil.

  10) Por fim, realiza o logout e sai do website.


#### 2. Descrever o foco principal do website para o utilizador administrativo. 

##### Objetivo: Avaliar a usabilidade da funcionalidade do website para os departamentos de mobilidade das universidades.  

##### Descrição do cenário de teste:  

######
   1) O departamento de mobilidade de uma universidade necessita de atualizar as informações que apresenta no website.

   2) Entra na página principal do website e clica na palavra login.

   3) Ao clicar no login terá de escolher entre a opção “student” e “university”.

   4) Escolhe a opção “university”.

   5) Inicia o login com as suas credenciais e clica no botão “login”.

   6) Depois vai à página onde apresenta as informações dos cursos que disponibilizou.

   7) Carrega num dos cursos e depois faz delete.

   8) Com a sua tarefa completa, sai do website.

#### 3. Abordagem ao uso de outras funcionalidades.
 
##### Objetivo: Avaliar a usabilidade de uma funcionalidade específica do website para os estudantes. 

##### Descrição do cenário de teste:

######
   1) O utilizador entra no website.

   2) Efetua o login com as suas credenciais.

   3) O login é efetuado com sucesso.

   4) O utilizador depara-se com uma dúvida.

   5) Entra na página principal, home page.

   6) 	Clica no ChatBot. 

   7) Escreve a sua dúvida e envia ao ChatBot.

   8) Espera pela resposta.

   9) Fica satisfeito com a resposta.

   10) Sai do website.

Estes três testes de guião irã ser realizados no futuro próximo para ajudar este projeto a encontrar quaisquer problemas e observações encontradas durante os testes. A partir desta avaliação irá ser mais fácil de compreender os pontos fortes e fracos da aplicação e tomar as decisões necessárias para o melhor desenvolvimento deste projeto.

# Modelo de Domínio

######
O modelo de domínio é essencial para o desenvolvimento de um website. Com o objetivo de assegurar que todos os elementos envolvidos neste projeto compreendam como o website vai ser estruturado e de que forma irá funcionar. Por isso, a partir do modelo de domínio é possível realizar uma representação abstrata e organizada das principais entidades, informações e interações que um website irá conter, o que é fundamental para o sucesso do nosso website. 
Este modelo de domínio criado irá evidenciar de forma mais eficaz as partes necessárias para definir um sistema de software, incluindo elementos relacionados aos eramus, a iteração entre os estudantes e as universidades, as informações que vão estar disponíveis no website e muito mais.

# Casos de uso
![download](https://cdn.discordapp.com/attachments/932104587857522748/1175907212779073556/casouso.PNG?ex=656cefee&is=655a7aee&hm=1033b17518ce2fec1e010efe14cfb8e9b4b3d011910652abbd0a8534099eac6d&)

Administrador:
######
Os administradores são os responsáveis pelos departamentos de mobilidade de cada universidade. Estes têm de efetuar o registo com o seu mail, universidade e password. De seguida, irão receber um mail para a confirmação do mesmo, assim terá acesso ao website como administrador. 

Após o registo e posterior login, o administrador consegue publicar informações quanto aos programas de mobilidade na plataforma. Ele pode adicionar novos programas, fornecendo informações detalhadas sobre os programas, como o país, nome do programa, universidade, cidade e informações da mesma, e vagas disponíveis. Além de publicar programas, o administrador é também responsável por manter as informações atualizadas. Se houver alterações nos programas existentes, como cursos oferecidos ou vagas disponíveis, o administrador deve atualizar essas informações no website. 

Os administradores também oferecem suporte aos alunos interessados nos programas. O website terá implementado um chatbot que responde a perguntas frequentes e fornece informações básicas sobre os programas. Caso seja efetuada uma pergunta à qual o chatbot não tem resposta, o administrador entra em contacto com o aluno.
######
Estudante:
######
O estudante inicia o processo ao registar-se no website, escolhendo a sua universidade e curso, posteriormente fornecendo a universidade e curso que frequentam, nome de utilizador, email e password. Este pode optar por realizar o login caso previamente registado. 

Após o registo e o posterior login, o aluno pode visualizar os programas de mobilidade disponíveis referentes à sua universidade e curso, acedendo a informações detalhadas sobre cada programa, como o país, nome do programa, universidade, cidade e vagas disponíveis. Para além disto, o aluno terá acesso a informações relativas às cidades onde se realizam estes programas.

Enquanto explora os programas, o aluno pode solicitar suporte para obter informações adicionais ou esclarecer dúvidas.

O suporte ao aluno é ampliado através da inclusão de um chatbot, onde este poderá iniciar uma conversa com o chatbot a qualquer momento para obter respostas rápidas e informações adicionais sobre os programas de mobilidade. Caso nos deseje contactar por um meio alternativo, poderá fazê-lo através do email.


# Esboço da Estrutura de Dados
Vamos apresentar um diagrama simples que apresente a relação entre as entidades-chave e as relações que formam a base deste modelo

![download](https://cdn.discordapp.com/attachments/932104587857522748/1175908578415087730/diagrama.PNG?ex=656cf134&is=655a7c34&hm=f52c557ba3c830ce07a2fe6921efdfa17d7200b13e16ce056da15aae4e41ee1c&)


# Interface

######
A interface do nosso website será caracterizada por um design simples, moderno e intuitivo. Uma vez que estamos a desenvolver este website para atender tanto a estudantes universitários como a instituições de ensino, é fundamental que a nossa interface seja adaptável a ambos os públicos. Esta deve transmitir uma impressão profissional, enquanto cria um ambiente descontraído, garantindo que os responsáveis pelos departamentos de mobilidade se sintam confiantes e seguros ao realizar o registo e compartilhar informações em nossa plataforma. Por outro lado, é igualmente importante que a interface seja clara e atrativa para os estudantes, proporcionando uma experiência de navegação confortável e tentadora. Queremos que os estudantes se sintam à vontade ao explorar o nosso website, facilitando o acesso a informações e recursos relevantes para a sua jornada de mobilidade.

# Mockups

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849053575065640/Captura_de_ecra_2023-10-17_as_15.29.50.png?ex=654111e5&is=652e9ce5&hm=04b1b4fb99f62d5ac89a7281fe9ff895296199b362cef47413a60082b6d17946&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849053818339328/Captura_de_ecra_2023-10-17_as_15.30.58.png?ex=654111e5&is=652e9ce5&hm=51f62e6fb8a56afec6280e4d7a547bf7c08563ad71306804bbabf7550e34dc1b&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849054028058815/Captura_de_ecra_2023-10-17_as_15.32.38.png?ex=654111e5&is=652e9ce5&hm=775d9c5e36ea774fc8a683f29449419e2a6bf2fbd213bfdd9a4626845093ebef&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849054258737202/Captura_de_ecra_2023-10-17_as_15.33.24.png?ex=654111e5&is=652e9ce5&hm=f959d24c174438a52c4bb1b0e15776a3c6799554fac60a4358bc27b77fe6a7ee&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849054489428109/Captura_de_ecra_2023-10-17_as_15.34.05.png?ex=654111e5&is=652e9ce5&hm=537febed706076fcd11de9057d48b9c7980ad54699635f142bab413bb3e7fb48&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849054745284809/Captura_de_ecra_2023-10-17_as_15.34.52.png?ex=654111e5&is=652e9ce5&hm=45db96759f35421f55377ff64fe9ee0c729dab70406a13c7c48542f2a8a7d165&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849054996934686/Captura_de_ecra_2023-10-17_as_15.36.39.png?ex=654111e5&is=652e9ce5&hm=5ec38cbf0dafca5b6041b461dd17a1fc7e85b4d202276e216bcfd502dfb2940e&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849054996934686/Captura_de_ecra_2023-10-17_as_15.36.39.png?ex=654111e5&is=652e9ce5&hm=5ec38cbf0dafca5b6041b461dd17a1fc7e85b4d202276e216bcfd502dfb2940e&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163849055252791337/Captura_de_ecra_2023-10-17_as_15.37.46.png?ex=654111e6&is=652e9ce6&hm=f56fdc0d72c7b17b848b318b2cba1ab4b92346ae3aeb4548ea0beccd1fbee3a1&)

# Cenários e Personas

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163838081351295016/Screenshot_2023-10-17_at_14.55.54.png?ex=654107ad&is=652e92ad&hm=94d854c49824a0d6cce079f7fe36db2ddde98cbac61b6670abc00a61f295a273&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163847483231850537/Screenshot_2023-10-17_at_15.34.03.png?ex=6541106f&is=652e9b6f&hm=a4e943856f92552e1df4d6aaec31797720a4e6d15446eb1d37f6edb407fbccb0&)

![download](https://cdn.discordapp.com/attachments/933841062009643068/1163847517587374154/Screenshot_2023-10-17_at_15.33.37.png?ex=65411077&is=652e9b77&hm=bfbe251e0923d7c9441b8d4a777edf080a0a296d6e55f0550f75c55a8ae82bbe&)


# Requisitos funcionais e não funcionais

######
É essencial para um website seguir uma lista de requisitos que assegure um produto final atendendo às expetativas dos utilizadores e às necessidades dos negócios. Aqui está na nossa tabela de requisitos funcionais e não funcionais para garantir o sucesso do easyerasmus.  

# Tabela de Requisitos 

|   id    |                                                            Descrição                                                     |    Categoria     |
|  -----  |    ---------------------------------------------------------------------------------    |    ----    |
|         |                                                                                                                          |                  |
| RF1     | O utilizador deve conseguir fazer o registo e o login.                                                                   | Must Have        |
| RF2     | O administrador pode fazer o upload de informações sobre os programas de Erasmus num template específico.                | Must Have        |
| RF3     | As informações fornecidas pelo admistrador devem ser aprovadas antes de serem publicadas no site.                        | Nice to Have     |
| RF4     | Cada cidade disponível para programas de Erasmus deve ter uma página dedicada com informações detalhadas.                | Must have        |
| RF5     | Implementar um ChatBot que seja capaz de responder a perguntas frequentes sobre os programas de mobilidade.              | Must have        |
| RF6     | Os estuadantes podem partilhar o seu feedback em relação a experiências que obtiveram em progrmas de mobilidade.         | Nice to Have     |
| RF7     | O admistrador consegue e deve atualizar as vagas disponíveis para cada programa de mobilidade.                           | Must Have        |
| RF8     | O utilizador deve conseguir realizar o logout.                                                                           | Must Have        |
| RF9     | O utilizador deve conseguir apagar a sua conta.                                                                          | Should Have      |
| RF10    | O utilizador deve conseguir recuperar a sua password.                                                                    | Should Have      |
| RF11    | O estudante  deve ter acesso às ofertas de programas de mobilidade .                                                     | Must Have        |
| RF12    | O estudante deve ter acesso às informações sobre as cidades que cada programa de mobilidade disponibiliza.               | Must Have        |
| --- |     -------------------------------------------------------------------------------------------------    | ------- |
| RNF1    | Garantir a segurança dos dados pessoais dos utilizadores por meio de criptografia e práticas de segurança adequadas.     | Must Have        |
| RNF2    | Proteger o Website contra ataques cibernéticos implementando WAF (Web Application Firewall)                              | Nice to have     |
| RNF3    | Garantir que o website seja responsivo e tenha um tempo de carregamento rápido.                                          | Must Have        |
| RNF4    | Proteger o site de forma a que consiga lidar com o aumento de utilizadores e informação.                                 | Should Have      |
| RFN5    | Implementar um CMS que facilita a atualização regular das informações do website .                                       | Nice to have     |
| RNF6    | Automatizar backups regurales dos dados do website e implementar um plano de recuperação de desastres.                   | Should Have      |
| RFN7    | Cumprir todas as regulamentações legais, incluindo leis da privacidade de dados.                                         | Nice to have     |
| RFN8    | Utilizar um modelo de dados JSON para que o ChatBot consiga encontrar as respostas reconhecendo apenas palavras-chaves   | Should Have      |
| RNF9    | Uso bibliotecas para gerenciamento de sessões de usuário e hashing de senhas.                                            | Should Have      |
| RNF10   | Implementação de uma CDN                                                                                                 | Nice to have     |
| RNF11   | Implementação de TLS (Transport Layer Security) e HTTPS (Hypertext Transfer Protocol Secure) para proteção de dados      | Nice to Have     |

RF- Requisito Funcional  

RFN- Requisito Não Funcional  


# Plano de Trabalho e Tecnologias 
| Front-end     	| -Usar HTML para criação do design do website; -CSS para estilizar o website; -JS para a interatividade do website;                                                                                                                             	|
|---------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Back-end      	| -Node.js e PostgresSQL para desenvolvimento da REST API; -Criar endpoints RESTful para manipular solicitações HTTP; -Uso de bibliotecas para gerar sessões de utilizadores e hashing de senhas;                                                	|
| Base de dados 	| -Configuação do servidor na instância AWS; -Criar o esquema de base de dados e como este será organizado e relacionado; -Configurar a replicação de dados entre os servidores Master e Slave para garantir alta disponibilidade e redundância; 	|
| Cache         	| .                                                                                                                                                                                                                                              	|
| Docker        	| -Criar containers Docker para o front-end e back-end; -Criar um arquivo Docker Compose para definir como os containers irão comunicar                                                                                                          	|
| Kubernetes    	| -Implementar um clister Kubernetes na AWS usando o serviço EKS; -Implemenetar uma estratégia de escala automática para lidar com picos de tráfego;                                                                                             	|
| Organização   	| -Organização do projeto é realizada no GitHub                                                                                                                                                                                                  	|

# Testes e validações do Software

O teste ao software que estamos a desenvolver será feito por estudantes universitários. Ou seja, a partir da ferramenta ‘useberry’ pretendemos criar testes com a nossa interface, para perceber se esta está desenvolvida de forma compreensiva e sem hipótese de dúvida por parte do utilizador, é aqui que vamos ver encontrar possíveis falhas e assim podemos aperfeiçoar a interface consoante a necessidade do utilizador.

# Documentação REST
| Registar admin                                                                                                                              	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/admin/register (post)                                                                                                                  	|
| Parametros: adminmail adminuni password                                                                                                     	|
| Dados: { "adminmail" : "adminmail@gmail.com", "adminuni" : "Universidade Europeia", "password" : "1234" } 
Sucesso: Registered! You can now log in. 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Login admin                                                                                                                              	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/admin/auth (post)                                                                                                                	|
| Parametros: adminmail password                                                                                                     	|
| Dados: { "adminmail" : "adminmail@gmail.com", "password" : "1234" } 
Sucesso: "msg": "Successful Login!" 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Registar User                                                                                                                             	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/user/register (post)                                                                                                               	|
| Parametros: nome email password universidade curso                                                                                                    	|
| Dados: { "nome": "Nome", "email": "email2gmail.com", "pass":"123", "uni": "universidade", "curso": "curso" } 
Sucesso: "msg": "Registered! You can now log in." 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Login User                                                                                                                             	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/user/auth (post)                                                                                                               	|
| Parametros: email password                                                                                                   	|
| Dados: { "nome": "Nome", "email": "email2gmail.com", "pass":"123", "uni": "universidade", "curso": "curso" } 
Sucesso: "msg": "Successful Login!" 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Logout admin                                                                                                                           	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/admin/auth (delete)                                                                                                              	|
| Parametros: adminmail password                                                                                                 	|
| Dados: { "adminmail": "adminmail@gmail.com", "password": "1234" } 
Sucesso: Status 204 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|

| Upload Programa                                                                                                                         	|
|---------------------------------------------------------------------------------------------------------------------------------------------	|
| /api/programa/upload (post)                                                                                                             	|
| Parametros: tipo universidade pais cidade vaga                                                                                                 	|
| Dados: { "prog_tipo": "erasmus", "prog_uni": "universidade", "prog_pais": "espanha", "prog_cid": "barcelona", "prog_vaga": 50  } 
Sucesso: {"message": "Programa adicionado com sucesso"} 	|
| Erros: 404: "Not Found" 500: erro no servidor                                                                                               	|
    


# Progressos semanais

![download](https://cdn.discordapp.com/attachments/932104587857522748/1175916130670489600/planodetrabalho.PNG?ex=656cf83d&is=655a833d&hm=9ed92626eb036253e4167405858c39af43933c87ed281adf8257911a22033534&)

# Conclusão

######

Nesta secção do nosso relatório iremos proporcionar uma breve conclusão relativamente à criação do website, ideias previstas, e comparações com outras plataformas com o mesmo fim. 

Como dito antes, o nosso objetivo com a criação do website é proporcionar uma experiência de utilizador mais simplificada no que diz respeito a procura e conhecimento por parte de estudantes do conceito de ERASMUS bem como poder ajudar os mesmos a tomarem a sua decisão.  

Também e possível encontrar uma pesquisa externa de comparação com possíveis concorrentes, que nos fez concluir que o nosso website será mais viável e irá cobrir mais aspetos chave do que os outros como por exemplo, informações sobre o programa, suporte aos alunos, e oportunidades educativas, coisas que, outros websites não cobrem estas três vertentes conjuntas.  

Como dito antes, o principal objetivo da criação deste website é de proporcionar uma experiência preponderante relativamente aos microsites existentes. 

Concluindo, esperemos que, o nosso website consiga criar vantagens para os utilizadores do mesmo. 


# Referências

######
Pexels. (2019). Free stock photos · Pexels. Pexels.com; Pexels. https://www.pexels.com

Figma. (2019). Figma: the collaborative interface design tool. Figma. https://www.figma.com

ChatGPT. (2023). ChatGPT. Chat.openai.com; OpenAI. https://chat.openai.com/

Flowchart Maker & Online Diagram Software. (n.d.). App.diagrams.net.
https://app.diagrams.net

Draw.io. (n.d.). Flowchart Maker & Online Diagram Software. App.diagrams.net. https://app.diagrams.net/

Docker. (2018). Enterprise Application Container Platform | Docker. Docker. https://www.docker.com/

Github. (2013). Build software better, together. GitHub. https://github.com

Balakrishnan, H. (2023, August 6). Replication of PostgreSQL Database using Docker-Compose. Medium. https://medium.com/@haridasan/replication-of-postgresql-database-using-docker-compose-ffba6a2d1bce








 

 

 

 

 



 

