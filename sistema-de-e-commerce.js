const vendas = [
    { cliente: 'Amanda', valor: 250, pago: true },
    { cliente: 'Bruno', valor: 80, pago: false },
    { cliente: 'Caio', valor: 500, pago: true },
    { cliente: 'Daniela', valor: 400, pago: true },
    { cliente: 'Eduardo', valor: 120, pago: false }
]

// 1. PENEIRA: Filtra apenas quem pagou E comprou > 200
const vendasValidas = vendas.filter((venda) => {
    return venda.pago === true && venda.valor > 200
})

// 2. FÁBRICA: Transforma e calcula o cashback de 10%
const vendasComCashback = vendasValidas.map((venda) => {
    return {
        cliente: venda.cliente,
        valor: venda.valor,
        cashback: venda.valor * 0.1
    }
})

// 3. EXIBIÇÃO: Passa por cada um e imprime no console
vendasComCashback.forEach((venda) => {
    console.log(`O cliente ${venda.cliente} comprou R$ ${venda.valor} e ganhou R$ ${venda.cashback} de cashback.`)
})