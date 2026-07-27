import { defineConfig } from "vite"

export default defineConfig({
    base: '/Info-Univers/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                annuaire: 'annuaire.html',
                apropos: 'apropos.html',
                contact: 'contact.html',
                detail: 'detail.html',
            }
        }
    }
})