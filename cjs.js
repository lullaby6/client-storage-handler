const local = {
    getAll: () => ({...localStorage}),
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
}

const session = {
    getAll: () => ({...sessionStorage}),
    clear: () => sessionStorage.clear(),
    get: key => key ? csh.session.getAll()[key] : csh.session.getAll(),
    set: (key, value) => sessionStorage.setItem(key, value),
    remove: key => sessionStorage.removeItem(key),
    has: key => key in sessionStorage,
    isEmpty: () => sessionStorage.length === 0,
    size: () => sessionStorage.length,
    keys: () => Object.keys(sessionStorage),
    values: () => Object.values(sessionStorage),
    entries: () => Object.entries(sessionStorage),
    setObject: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
    getObject: key => JSON.parse(sessionStorage.getItem(key)),
}

const cookies = {
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

module.exports = {
    local,
    session,
    cookies
}