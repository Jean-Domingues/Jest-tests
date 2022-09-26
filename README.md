# Princípios S.O.L.I.D.
#### Vantagens:
- Código modular
	- Cada parte do nosso sistema está devidamente separada, e vinculada em seu contexto. Fica fácil de se localizar e entender o que o Software se propõe a fazer.
- Código reutilizável (D.R.Y - Don't repeat yourself)
	- Consigo facilmente reutilizar códigos genéricos, como as abstrações.
- Código facilmente testável
	- Não preciso mockar o mundo, toda a regra fica isolada do resto. Não tenho dependência de outras classes e sim de interfaces que aquela classe utiliza.
- Baixo acoplamento e alta coesão
	- Classes com responsabilidades únicas, não dependentes umas das outras.
- Código expansível
	- Consigo facilmente incorporar novas features sem mexer no que já estava feito
- Separations of concerns
	- Cada classe deve ter apenas uma razão para mudar, responsabilidades únicas
- Fácil manutenção
	-  Seguindo todos os princípios, no final temos um código muito mais robusto, e que diminui a chance de quebrar algo que estava funcionando. Adicione isso a testes e você tem uma aplicação saudável.

#### Desvantagens:
- Complexidade
	- A separação em vários módulos, e divisão de uma classe em várias partes, faz com que desenvolvedores iniciantes tenham dificuldade em entender todo o contexto do projeto.
- Quantidade de código digitado aumenta
	- Antes você só precisava se preocupar se seu sistema funcionava ou não, mas agora você tem pelo menos 60% de todo o código escrito "apenas" para aumentar a legibilidade e facilitar a manutenção do seu software.
- Tempo de desenvolvimento aumenta bastante
	- Se o seu software funcionava com 700 linhas de código, agora você precisou escrever 2 mil linhas para mantê-lo dentro dos princípios SOLID. Ao pé da letra, se você levou 1 semana para escrever o seu sistema, o tempo para criar o mesmo sistema com SOLID mais que dobraria.

#### Pontos de atenção
- YAGNI: You aren't gonna need it
	- Se preocupe com problemas do futuro quando eles realmente chegarem, caso contrário você perderá um precioso tempo pensando na melhor forma de resolver um problema que pode nem existir.
- KISS: Keep it simple, stupid!
	- Os princípios SOLID tem como principal objetivo garantir a saúde de um software. Manter o fácil entendimento do seu sistema também é algo crucial para facilitar a manutenção, prefira investir em soluções menos complexas, mesmo que talvez não sejam as melhores.
