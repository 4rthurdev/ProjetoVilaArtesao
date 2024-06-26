document.addEventListener('DOMContentLoaded', function() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(categoria => {
            const categorias = document.getElementById('categorias');

            categoria.forEach(categoria => {
                const categoriasHTML = `
                    <div class="categoria">
                        <img src="${categoria.imagem}" alt="${categoria.categoria}">
                        <h3>${categoria.categoria}</h3>
                        <p>${categoria.descricao}</p>
                        <button class="acessar-categoria">Acessar Categoria</button>
                    </div>
                `;
                categorias.innerHTML += categoriasHTML;
            });

            // Evento de clique para acessar a categoria
            document.querySelectorAll('.acessar-categoria').forEach(button => {
                button.addEventListener('click', function() {
                    window.location.href = 'catalogo.html';
                });
            });
        })
        .catch(error => console.error('Erro ao carregar catálogo:', error));
});
