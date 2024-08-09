const csh = {
    local: {
        all: () => localStorage,
        clear: () => localStorage.clear(),

        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
        remove: key => localStorage.removeItem(key),

        exists: key => localStorage.getItem(key) !== null,

        keys: () => Object.keys(localStorage),
        values: () => Object.values(localStorage),
        entries: () => Object.entries(localStorage),
    },

    cookies: {
        all: () => {
            const cookies = document.cookie.split(";").reduce( (ac, cv, i) => Object.assign(ac, {[cv.split('=')[0]]: cv.split('=')[1]}), {})

            delete cookies[undefined]
            delete cookies[""]

            return cookies
        },
        clear: () => document.cookie.split(';').forEach(cookie => document.cookie = cookie + ";expires=" + new Date(0).toUTCString()),

        object: cookies => {
            csh.cookies.clear()
            document.cookie = Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join("; ")
        },

        get: key => csh.cookies.all()[key] ,
        set: (key, value) => {
            const cookies = csh.cookies.all()
            cookies[key] = value
            csh.cookies.object(cookies)
        },
        remove: key => {
            const cookies = csh.cookies.all()
            delete cookies[key]
            csh.cookies.object(cookies)
        },

        exists: key => csh.cookies.get(key) !== undefined,

        keys: () => Object.keys(csh.cookies.all()),
        values: () => Object.values(csh.cookies.all()),
        entries: () => Object.entries(csh.cookies.all()),
    }
}