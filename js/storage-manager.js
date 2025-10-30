// Sistema de Storage Isolado por Projeto
// Evita que forks diferentes compartilhem dados no localStorage

class StorageManager {
    constructor() {
        // Gera um prefixo único baseado no caminho do projeto
        this.prefix = this.generatePrefix();
        console.log(`[Storage] Prefixo do projeto: "${this.prefix}"`);
    }

    generatePrefix() {
        // Usa o pathname da URL para criar um identificador único
        const path = window.location.pathname;

        // Remove barras iniciais e finais, substitui barras por underscores
        const cleanPath = path
            .replace(/^\/+|\/+$/g, '') // Remove barras do início e fim
            .replace(/\//g, '_')        // Substitui barras por underscores
            || 'quiz_default';          // Fallback se estiver na raiz

        return `${cleanPath}_`;
    }

    // Adiciona o prefixo à chave
    getKey(key) {
        return `${this.prefix}${key}`;
    }

    // Wrapper para localStorage.getItem
    getItem(key) {
        return localStorage.getItem(this.getKey(key));
    }

    // Wrapper para localStorage.setItem
    setItem(key, value) {
        localStorage.setItem(this.getKey(key), value);
    }

    // Wrapper para localStorage.removeItem
    removeItem(key) {
        localStorage.removeItem(this.getKey(key));
    }

    // Verifica se uma chave existe
    hasItem(key) {
        return this.getItem(key) !== null;
    }

    // Remove todas as chaves deste projeto
    clearAll() {
        const keysToRemove = [];

        // Encontra todas as chaves com o prefixo deste projeto
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(this.prefix)) {
                keysToRemove.push(key);
            }
        }

        // Remove todas as chaves encontradas
        keysToRemove.forEach(key => localStorage.removeItem(key));
    }

    // Migra dados antigos (sem prefixo) para o novo sistema
    migrateOldData() {
        const oldKeys = [
            'generalRanking',
            'tempRanking',
            'achievements',
            'achievementDetails',
            'achievementStats',
            'soundEnabled',
            'selectedAvatar',
            'appVersion'
        ];

        let migrated = false;

        oldKeys.forEach(key => {
            const oldValue = localStorage.getItem(key);
            const newKey = this.getKey(key);

            // Se existe dado antigo e não existe no novo formato
            if (oldValue !== null && localStorage.getItem(newKey) === null) {
                localStorage.setItem(newKey, oldValue);
                migrated = true;
                console.log(`[Storage] Migrado: ${key} → ${newKey}`);
            }
        });

        if (migrated) {
            console.log('[Storage] Migração de dados concluída');
        }
    }
}

// Criar instância global
const storageManager = new StorageManager();

// Executar migração automaticamente
storageManager.migrateOldData();
