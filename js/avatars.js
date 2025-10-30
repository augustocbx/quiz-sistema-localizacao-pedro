// Sistema de Avatares

class AvatarSystem {
    constructor() {
        this.avatars = [
            { id: 'astronaut', emoji: '👨‍🚀', name: 'Astronauta' },
            { id: 'explorer', emoji: '🧭', name: 'Explorador' },
            { id: 'captain', emoji: '🧑‍✈️', name: 'Capitão' },
            { id: 'scientist', emoji: '👨‍🔬', name: 'Cientista' },
            { id: 'pirate', emoji: '🏴‍☠️', name: 'Pirata' },
            { id: 'ninja', emoji: '🥷', name: 'Ninja' },
            { id: 'robot', emoji: '🤖', name: 'Robô' },
            { id: 'alien', emoji: '👽', name: 'Alienígena' },
            { id: 'wizard', emoji: '🧙', name: 'Mago' },
            { id: 'detective', emoji: '🕵️', name: 'Detetive' },
            { id: 'superhero', emoji: '🦸', name: 'Super-Herói' },
            { id: 'viking', emoji: '⚔️', name: 'Viking' },
            { id: 'cowboy', emoji: '🤠', name: 'Cowboy' },
            { id: 'knight', emoji: '🛡️', name: 'Cavaleiro' },
            { id: 'pilot', emoji: '🛩️', name: 'Piloto' },
            { id: 'sailor', emoji: '⚓', name: 'Marinheiro' },
            { id: 'rocket', emoji: '🚀', name: 'Foguete' },
            { id: 'telescope', emoji: '🔭', name: 'Telescópio' }
        ];

        // Avatar inicial aleatório (será renovado toda vez que abrir a tela)
        this.selectedAvatar = this.getRandomAvatar();
    }

    // Retorna um avatar aleatório da lista
    getRandomAvatar() {
        const randomIndex = Math.floor(Math.random() * this.avatars.length);
        return this.avatars[randomIndex];
    }

    // Escolhe novo avatar aleatório (chamado ao entrar na tela de seleção)
    selectRandomAvatar() {
        this.selectedAvatar = this.getRandomAvatar();
    }

    // Seleciona avatar sem salvar permanentemente
    selectAvatar(avatarId) {
        const avatar = this.avatars.find(a => a.id === avatarId);
        if (avatar) {
            this.selectedAvatar = avatar;
            return true;
        }
        return false;
    }

    getSelectedAvatar() {
        return this.selectedAvatar;
    }

    getAllAvatars() {
        return this.avatars;
    }

    getAvatarEmoji() {
        return this.selectedAvatar.emoji;
    }

    getAvatarName() {
        return this.selectedAvatar.name;
    }

    // Criar seletor de avatar
    createAvatarSelector() {
        const container = document.createElement('div');
        container.className = 'avatar-selector-container';
        container.style.cssText = 'text-align: center; margin: 20px 0;';

        const title = document.createElement('h3');
        title.textContent = 'Escolha seu Avatar:';
        title.style.cssText = 'color: white; margin-bottom: 15px; font-size: 18px;';
        container.appendChild(title);

        const selector = document.createElement('div');
        selector.className = 'avatar-selector';
        selector.style.margin = '0 auto';

        this.avatars.forEach(avatar => {
            const option = document.createElement('div');
            option.className = 'avatar-option';
            option.title = avatar.name;
            option.textContent = avatar.emoji;
            option.dataset.avatarId = avatar.id;

            if (avatar.id === this.selectedAvatar.id) {
                option.classList.add('selected');
            }

            option.addEventListener('click', () => {
                // Remover seleção anterior
                selector.querySelectorAll('.avatar-option').forEach(opt => {
                    opt.classList.remove('selected');
                });

                // Selecionar novo
                option.classList.add('selected');
                this.selectAvatar(avatar.id);

                // Som de feedback
                if (soundManager) soundManager.playClick();
            });

            selector.appendChild(option);
        });

        container.appendChild(selector);
        return container;
    }

    // Criar elemento de avatar para display
    createAvatarDisplay() {
        const display = document.createElement('div');
        display.className = 'player-avatar';
        display.innerHTML = `
            <div class="player-avatar-icon">${this.getAvatarEmoji()}</div>
        `;
        return display;
    }
}

// Instância global
const avatarSystem = new AvatarSystem();
