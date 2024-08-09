const csh = {
    local: {
        getAll: () => localStorage,
        clear: () => localStorage.clear(),
        get: key => key ? csh.local.getAll()[key] : csh.local.getAll(),
        set: (key, value) => localStorage.setItem(key, value),
        remove: key => localStorage.removeItem(key),
        has: key => key in localStorage,
        isEmpty: () => localStorage.length === 0,
        size: () => localStorage.length,
        keys: () => Object.keys(localStorage),
        values: () => Object.values(localStorage),
        entries: () => Object.entries(localStorage),
        setObject: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
        getObject: key => JSON.parse(localStorage.getItem(key)),
    },
    cookies: {
        getAll: () => Object.fromEntries(document.cookie.split(';').map(s => s.trim().split('=')).filter(([k]) => k)),
        clear: () => document.cookie.split(';').forEach(c => document.cookie = c.split('=')[0] + '=;expires=' + new Date(0).toUTCString()),
        get: key => key ? csh.cookies.getAll()[key] : csh.cookies.getAll(),
        set: (key, value) => document.cookie = `${key}=${value}`,
        remove: key => document.cookie = `${key}=;expires=${new Date(0).toUTCString()}`,
        has: key => key in csh.cookies.getAll(),
        isEmpty: () => Object.keys(csh.cookies.getAll()).length === 0,
        size: () => Object.keys(csh.cookies.getAll()).length,
        keys: () => Object.keys(csh.cookies.getAll()),
        values: () => Object.values(csh.cookies.getAll()),
        entries: () => Object.entries(csh.cookies.getAll()),
    }
};

// sessionStorage:
// Similar a localStorage, pero los datos solo persisten durante la sesión del navegador.
// IndexedDB:
// Una base de datos de objetos de bajo nivel para almacenar grandes cantidades de datos estructurados.
// Web SQL Database (obsoleto):
// Una API para trabajar con bases de datos SQL en el navegador, aunque está en desuso.
// Cache API:
// Parte de Service Workers, permite almacenar en caché recursos de red para uso offline.
// File System Access API:
// Permite acceso al sistema de archivos local del usuario (con permiso).
// Application Cache (obsoleto):
// Usado para hacer aplicaciones web disponibles offline, aunque está siendo reemplazado por Service Workers.
// WebStorage:
// Un término que engloba tanto localStorage como sessionStorage.
// Almacenamiento en memoria:
// Usando variables JavaScript durante la ejecución de la página.
// Web Storage API:
// Incluye localStorage y sessionStorage, proporcionando métodos para almacenar datos de pares clave/valor.