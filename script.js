document.addEventListener('DOMContentLoaded', () => {
    const data = `
Gama:
Santa Maria - 8
Park Way - 18
São Sebastião - 42
Jardim Botânico - 38
Recanto das Emas - 18
Planaltina - 98
Ceilândia - 36
Samambaia - 30
Brazlândia - 58
Itapoã - 100
Paranoá - 52
Lago Sul - 49

Santa Maria:
Gama - 8
Park Way - 17
Recanto das Emas - 21
São Sebastião - 37
Jardim Botânico - 33
Planaltina - 93
Itapoã - 95
Paranoá - 48
Lago Sul - 44

Recanto das Emas:
Gama - 18
Santa Maria - 21
Riacho Fundo II - 2
Samambaia - 9
Park Way - 20
São Sebastião - 47
Jardim Botânico - 43
Planaltina - 100
Itapoã - 102
Paranoá - 55
Lago Sul - 51

Riacho Fundo II:
Recanto das Emas - 2
Riacho Fundo I - 5
Samambaia - 8

Samambaia:
Recanto das Emas - 9
Riacho Fundo II - 8
Riacho Fundo I - 11
Ceilândia - 7
Taguatinga - 8
Gama - 30

Riacho Fundo I:
Riacho Fundo II - 5
Samambaia - 11
Núcleo Bandeirante - 5
Taguatinga - 11
Aguas Claras - 9

Aguas Claras:
Riacho Fundo I - 9
Taguatinga - 5
Guará - 10
Vicente Pires - 8
SIA - 10
SCIA - 11
Núcleo Bandeirante - 9

Taguatinga:
Aguas Claras - 5
Samambaia - 8
Riacho Fundo I - 11
Ceilândia - 8
Vicente Pires - 6
Guará - 10
SIA - 11
SCIA - 12
Brazlândia - 34

Ceilândia:
Taguatinga - 8
Samambaia - 7
Brazlândia - 27
Vicente Pires - 8
Gama - 36

Vicente Pires:
Taguatinga - 6
Ceilândia - 8
Aguas Claras - 8
SCIA - 10
SIA - 12
Brazlândia - 30
Guará - 11
Fercal - 75

Brazlândia:
Vicente Pires - 30
Taguatinga - 34
Ceilândia - 27
Sobradinho II - 60
Sobradinho I - 56
Fercal - 60
SCIA - 38
Varjão - 54
Itapoã - 62
Lago Norte - 56
Planaltina - 111
Gama - 58

SCIA:
Brazlândia - 38
Taguatinga - 12
Vicente Pires - 10
Aguas Claras - 11
SIA - 4
Guará - 7
Cruzeiro/Sudoeste/Octogonal - 10
Fercal - 78

SIA:
SCIA - 4
Vicente Pires - 12
Taguatinga - 12
Aguas Claras - 11
Cruzeiro/Sudoeste/Octogonal - 6
Guará - 4
Plano Piloto - 12
Lago Norte - 15
Candangolândia - 8

Guará:
SIA - 4
SCIA - 7
Vicente Pires - 11
Taguatinga - 10
Aguas Claras - 10
Candangolândia - 8
Núcleo Bandeirante - 7
Plano Piloto - 15
Lago Sul - 13

Candangolândia:
Guará - 8
SIA - 8
Cruzeiro/Sudoeste/Octogonal - 11
Plano Piloto - 14
Núcleo Bandeirante - 3
Park Way - 5
Lago Sul - 11

Núcleo Bandeirante:
Candangolândia - 3
Guará - 7
Aguas Claras - 9
Riacho Fundo I - 5
Park Way - 4
Plano Piloto - 16
Lago Sul - 13

Park Way:
Núcleo Bandeirante - 4
Candangolândia - 5
Recanto das Emas - 20
Santa Maria - 17
Gama - 18
Plano Piloto - 15
Lago Sul - 11
Cruzeiro/Sudoeste/Octogonal - 14
Jardim Botânico - 37
São Sebastião - 41
Planaltina - 96
Itapoã - 98
Paranoá - 50

Plano Piloto:
SIA - 12
Guará - 15
Candangolândia - 14
Núcleo Bandeirante - 16
Park Way - 15
Cruzeiro/Sudoeste/Octogonal - 7
Lago Sul - 10
Lago Norte - 11
Paranoá - 21
Sobradinho I - 24
Fercal - 28
Planaltina - 44
Itapoã - 30

Cruzeiro/Sudoeste/Octogonal:
Plano Piloto - 7
Park Way - 14
Candangolândia - 11
SCIA - 10
SIA - 6
Lago Norte - 13
Sobradinho I - 25
Fercal - 30
Lago Sul - 15

Lago Norte:
Cruzeiro/Sudoeste/Octogonal - 13
Plano Piloto - 11
SIA - 15
Varjão - 3
Paranoá - 17
Itapoã - 17
Sobradinho I - 15
Fercal - 20
Brazlândia - 56

Varjão:
Lago Norte - 3
Brazlândia - 54
Sobradinho I - 15
Itapoã - 17
Paranoá - 14

Sobradinho I:
Brazlândia - 56
Varjão - 15
Lago Norte - 15
Cruzeiro/Sudoeste/Octogonal - 25
Plano Piloto - 24
Planaltina - 21
Sobradinho II - 5
Fercal - 15
Itapoã - 14
Paranoá - 17
Jardim Botânico - 89
São Sebastião - 75

Sobradinho II:
Fercal - 10
Brazlândia - 60
Sobradinho I - 5
Planaltina - 48

Fercal:
Sobradinho II - 10
Sobradinho I - 15
Lago Norte - 20
Cruzeiro/Sudoeste/Octogonal - 30
Plano Piloto - 28
Planaltina - 42
Brazlândia - 60
SCIA - 78
Vicente Pires - 75

Planaltina:
Fercal - 42
Sobradinho II - 48
Sobradinho I - 21
Plano Piloto - 44
Itapoã - 26
Gama - 98
Santa Maria - 93
São Sebastião - 62
Park Way - 96
Recanto das Emas - 100
Brazlândia - 111
Jardim Botânico - 76

Itapoã:
Planaltina - 26
Sobradinho I - 14
Varjão - 17
Lago Norte - 17
Plano Piloto - 30
Brazlândia - 62
Paranoá - 4
Gama - 100
Santa Maria - 95
Park Way - 98
Recanto das Emas - 102
São Sebastião - 65
Jardim Botânico - 77

Paranoá:
Itapoã - 4
Sobradinho I - 17
Varjão - 14
Lago Norte - 17
Plano Piloto - 21
Lago Sul - 18
Jardim Botânico - 16
São Sebastião - 37
Gama - 52
Santa Maria - 48
Park Way - 50
Recanto das Emas - 55

Lago Sul:
Paranoá - 18
Cruzeiro/Sudoeste/Octogonal - 15
Plano Piloto - 10
Park Way - 11
Núcleo Bandeirante - 13
Candangolândia - 11
Guará - 13
Jardim Botânico - 12
São Sebastião - 33
Gama - 49
Santa Maria - 44
Recanto das Emas - 51

Jardim Botânico:
Lago Sul - 12
Paranoá - 16
Park Way - 37
Recanto das Emas - 43
Santa Maria - 33
Gama - 38
São Sebastião - 5
Itapoã - 77
Planaltina - 76
Sobradinho I - 89

São Sebastião:
Gama - 42
Santa Maria - 37
Recanto das Emas - 47
Park Way - 41
Planaltina - 62
Itapoã - 65
Paranoá - 37
Jardim Botânico - 5
Lago Sul - 33
Sobradinho I - 75
    `;

    const graph = {};
    const regioes = new Set();

    const lines = data.trim().split('\n');
    let currentRegiao = null;

    lines.forEach(line => {
        line = line.trim();
        if (line.endsWith(':')) {
            currentRegiao = line.slice(0, -1).trim();
            regioes.add(currentRegiao);
            if (!graph[currentRegiao]) {
                graph[currentRegiao] = {};
            }
        } else if (line && currentRegiao) {
            const parts = line.split(' - ');
            if (parts.length === 2) {
                const vizinho = parts[0].trim();
                const distancia = parseFloat(parts[1].replace(',', '.'));
                regioes.add(vizinho);
                if (!graph[vizinho]) {
                    graph[vizinho] = {};
                }
                graph[currentRegiao][vizinho] = distancia;
                graph[vizinho][currentRegiao] = distancia;
            }
        }
    });
        const selectOrigem = document.getElementById('origem');
    const selectDestino = document.getElementById('destino');
    const calcularBtn = document.getElementById('calcular');
    const caminhoTextoElem = document.getElementById('caminho-texto');
    const distanciaTotalElem = document.getElementById('distancia-total');

    const sortedRegioes = Array.from(regioes).sort((a, b) => a.localeCompare(b));

    sortedRegioes.forEach(regiao => {
        const optionOrigem = document.createElement('option');
        optionOrigem.value = regiao;
        optionOrigem.textContent = regiao;
        selectOrigem.appendChild(optionOrigem);

        const optionDestino = document.createElement('option');
        optionDestino.value = regiao;
        optionDestino.textContent = regiao;
        selectDestino.appendChild(optionDestino);
    });

    function dijkstra(graph, startNode, endNode) {
        const distances = {};
        const prev = {};
        const pq = new PriorityQueue();
        let path = [];
        let smallest;

        for (let vertex in graph) {
            if (vertex === startNode) {
                distances[vertex] = 0;
                pq.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
            prev[vertex] = null;
        }

        while (!pq.isEmpty()) {
            smallest = pq.dequeue().element;

            if (smallest === endNode) {
                while (prev[smallest]) {
                    path.push(smallest);
                    smallest = prev[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in graph[smallest]) {
                    let alt = distances[smallest] + graph[smallest][neighbor];
                    if (alt < distances[neighbor]) {
                        distances[neighbor] = alt;
                        prev[neighbor] = smallest;
                        pq.enqueue(neighbor, alt);
                    }
                }
            }
        }
        path = path.concat(smallest === startNode ? startNode : smallest).reverse();

        if (distances[endNode] === Infinity) {
            return { path: [], distance: Infinity };
        }
        return { path, distance: distances[endNode] };
    }

    class PriorityQueue {
        constructor() {
            this.collection = [];
        }
        enqueue(element, priority) {
            const queueElement = { element, priority };
            if (this.isEmpty()) {
                this.collection.push(queueElement);
            } else {
                let added = false;
                for (let i = 0; i < this.collection.length; i++) {
                    if (queueElement.priority < this.collection[i].priority) {
                        this.collection.splice(i, 0, queueElement);
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    this.collection.push(queueElement);
                }
            }
        }
        dequeue() {
            return this.collection.shift();
        }
        isEmpty() {
            return this.collection.length === 0;
        }
    }

    calcularBtn.addEventListener('click', () => {
        const origem = selectOrigem.value;
        const destino = selectDestino.value;

        if (origem === destino) {
            caminhoTextoElem.textContent = "Origem e destino são os mesmos.";
            distanciaTotalElem.textContent = "0 km";
            return;
        }

        const resultadoDijkstra = dijkstra(graph, origem, destino);
        const caminhoListaElem = document.getElementById('caminho-lista');
        caminhoListaElem.innerHTML = '';

        if (resultadoDijkstra.distance === Infinity) {
            const liMsg = document.createElement('li');
            liMsg.classList.add('mensagem');
            liMsg.textContent = `Não foi possível encontrar um caminho de ${origem} para ${destino}.`;
            caminhoListaElem.appendChild(liMsg);
            distanciaTotalElem.textContent = "N/A";
        } else {
            if (resultadoDijkstra.path.length === 1) {
                 const li = document.createElement('li');
                 li.textContent = `${resultadoDijkstra.path[0]}`;
                 caminhoListaElem.appendChild(li);
            } else {
                for (let i = 0; i < resultadoDijkstra.path.length - 1; i++) {
                    const de = resultadoDijkstra.path[i];
                    const para = resultadoDijkstra.path[i+1];
                    const dist = graph[de][para];

                    const li = document.createElement('li');
                    li.innerHTML = `
                        ${i === 0 ? '<strong></strong> ' : ''}${de}
                        &rarr; ${para}
                        <span class="trecho-distancia">(${dist.toFixed(1).replace('.',',')} km)</span>
                    `;
                    caminhoListaElem.appendChild(li);
                }
            }

            distanciaTotalElem.textContent = `${resultadoDijkstra.distance.toFixed(1).replace('.',',')} km`;
        }
    });
});