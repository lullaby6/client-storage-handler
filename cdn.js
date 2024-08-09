const csh = {
    local: {
        all: () => localStorage,
        clear: () => localStorage.clear(),
        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
        remove: key => localStorage.removeItem(key),
        exists: key => key in localStorage,
        keys: () => Object.keys(localStorage),
        values: () => Object.values(localStorage),
        entries: () => Object.entries(localStorage),
    },
    cookies: {
        all: () => Object.fromEntries(document.cookie.split(';').map(s => s.trim().split('=')).filter(([k]) => k)),
        clear: () => document.cookie.split(';').forEach(c => document.cookie = c.split('=')[0] + '=;expires=' + new Date(0).toUTCString()),
        get: key => csh.cookies.all()[key],
        set: (key, value) => document.cookie = `${key}=${value}`,
        remove: key => document.cookie = `${key}=;expires=${new Date(0).toUTCString()}`,
        exists: key => key in csh.cookies.all(),
        keys: () => Object.keys(csh.cookies.all()),
        values: () => Object.values(csh.cookies.all()),
        entries: () => Object.entries(csh.cookies.all()),
    }
};