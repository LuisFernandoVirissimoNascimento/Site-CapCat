const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        // Put else entry.target.classList.remove('show'); to make it so images dissapear after leaving the screen
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const planRules = {
    'simples': {
        title: 'Regras: Jogo Simples',
        rules: `<ul>
                    <li>Entre em contato com capcatdev no discord para iniciar.</li>
                    <li>Pagamento de 75% adiantado.</li>
                    <li>Prazo de entrega: 7 a 15 dias úteis.</li>
                    <li>Inclui apenas 3 revisões de mecânica.</li>
                    <li>Código fonte não incluso. Veja preços extras para saber mais.</li>
                    <li>Nosso time não irá produzir arte, música ou design, isso é responsabilidade do cliente.</li>
                    <p><strong>Tipos de jogos permitidos:</strong></p>
                    <li>Endless Runner (Ex: Super Chicken Jumper)</li>
                    <li>Adventure Clicker (Ex: Pajama Sam)</li>
                    <li>Quebra-cabeça de Física (Ex: Angry Birds)</li>
                    <li>Plataforma 2D (Ex: Super Mario)</li>
                    <li>Beat 'em Up (Ex: Streets of Rage)</li>
                    <li>Bullet Hell (Ex: Touhou)</li>
                    <li>Aceita ou Nega (Ex: Papers Please)</li>
                    <li>Horror de Andar (Ex: Cry of Fear)</li>
                    <li>Walking Simulator (Ex: FireWatch)</li>
                    <li>Railed Air Combat (Ex: StarFox)</li>
                    <li>Undertale (Ex: Deltarune)</li>
                    <li>Turn Based Arena 1v1 (Ex: Swords and Sandals)</li>
                    <p><strong>Se o jogo que quer fazer não está aqui, entre em contato com o capcatdev no discord.</strong></p>
                </ul>`
    },
    'completo': {
    title: 'Regras: Jogo Completo (Experiência Premium)',
    rules: `<ul>
                <li><strong>Prioridade Total:</strong> Entre em contato com capcatdev no discord para briefing imediato.</li>
                <li><strong>Pagamento Seguro:</strong> 75% para iniciar + 25% após a entrega final.</li>
                <li><strong>Prazo VIP:</strong> 1 a 3 meses com relatórios quinzenais de progresso.</li>
                <li><strong>Revisões Ilimitadas:</strong> Ajustamos cada detalhe até o jogo ficar perfeito.</li>
                <li><strong>Full Ownership:</strong> Código fonte e Direito comercial inclusos (Zero taxas extras).</li>
                <li><strong>Lançamento Assistido:</strong> Ajudamos você a configurar a página na Steam ou PlayStore.</li>
                <li><strong>Garantia de Bug-Fix:</strong> Suporte gratuito por 3 meses após a entrega para correção de erros.</li>
                <p><strong>O que podemos criar:</strong></p>
                <li>Sistemas de RPG, Estratégia, Roguelikes, Simuladores e muito mais.</li>
                <p><strong>Restrição Única:</strong></p>
                <li>Não aceitamos projetos de MMORPG (devido à complexidade de servidores).</li>
            </ul>`
},
    'extra': {
        title: 'Preços Extras',
        rules: `<div class="modal-inner-content">
            <p><strong>Para modificadores que tornam seu jogo único no mercado:</strong></p>
            <ul class="modal-list">
                <li><strong>Código fonte:</strong> R$ 300 + 5% do custo de Assets pagos</li>
                <li><strong>Múltiplos Personagens:</strong> R$ 40 (por unidade extra)</li>
                <li><strong>Múltiplas Armas:</strong> R$ 40 (por set de armas)</li>
                <li><strong>Efeitos de Câmera (Juice):</strong> R$ 40 (Screenshake, Flash, Bloom)</li>
                <li><strong>Cutscenes Estilizadas:</strong> R$ 40 (Texto animado + imagens)</li>
                <li><strong>Sistema de Placar (Leaderboard):</strong> R$ 40</li>
                <li><strong>Tradução (PT-BR / Inglês):</strong> R$ 100</li>
                <li><strong>Suporte a Controle/Gamepad:</strong> R$ 100</li>
                <li><strong>Conquistas:</strong> R$ 100</li>
                <li><strong>Publicação na Steam:</strong> R$ 500 ( Taxa da Steam ) + R$ 400 ( Serviço )
                <li><strong>Multiplayer Local ou Online ( Online requer Publicação na Steam ):</strong> R$ 500
                </li>
                <li><strong>Chat de Voz Online:</strong> R$ 250</li>
                <li><strong>Usar voz para ações:</strong> R$ 250</li>
                <li><strong>Arte, Música e Design:</strong> R$ Taxa do Artista + R$ 50 ( Serviço de contato e Gerenciamento )</li>
            </ul>
            <p style="font-size: 0.85rem; color: #686464ff; margin-top: 15px;">
                * Os valores acima são adicionais ao preço base do pacote.
                <br>* Se o modificador desejado não estiver listado, entre em contato com capcatdev no discord para uma cotação personalizada.
                <br>* Todos os preços são em Reais Brasileiros (R$) e podem variar conforme a complexidade do pedido.
                <br>* Caso utilize mais de 3 modificadores, entre em contato para um desconto especial.
            </p>
        </div>`
    }
};

function openModal(planKey) {
    const modal = document.getElementById('priceModal');
    const title = document.getElementById('modalTitle');
    const rulesDiv = document.getElementById('modalRules');

    title.innerText = planRules[planKey].title;
    rulesDiv.innerHTML = planRules[planKey].rules;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('priceModal').style.display = 'none';
}

// Close modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('priceModal');
    if (event.target == modal) {
        closeModal();
    }
}