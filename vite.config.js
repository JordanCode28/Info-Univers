import { defineConfig } from "vite"

export default defineConfig({
    base: '/Info-Univers/',
    publicDir: 'js',
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
