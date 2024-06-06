document.addEventListener('DOMContentLoaded', function() {
    fetch('produtos.json')
        .then(response => response.json())
        .then(produtos => {
            const catalogo = document.getElementById('catalogo');

            produtos.forEach(produto => {
                const produtoHTML = `
                    <div class="product">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        <h3>${produto.nome}</h3>
                        <p>${produto.material}</p>
                        <p>${produto.descricao}</p>
                        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                        <button>Adicionar ao Carrinho</button>
                    </div>
                `;
                catalogo.innerHTML += produtoHTML;
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
});

