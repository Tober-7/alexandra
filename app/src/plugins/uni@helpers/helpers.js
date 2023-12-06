import bcrypt from "bcryptjs";

export default class Helpers {
    static goTo(router, name) {
        router.push({ name });
    }

    static splitLines(text) {
        return text.split("\n");
    }

    static scroll(refs, target) {
        refs[target].scrollIntoView({ behavior: 'smooth' });
    }

    static checkPassword(password) {
        return bcrypt.compareSync(password, "$2a$10$GJyLRv1N4EqdBqop7vkA0eR.IbA6cxf9YuRw.lqFHMZb8/LpL8AKe");
    }

    static isAuth() {
        const token = JSON.parse(localStorage.getItem('alexandra_auth_token'));

        if (!token) return false;

        if (!Helpers.checkPassword(token.password)) return false;

        const minutes = ((Date.now() - token.at) / 1000) / 60;

        if (minutes > 60) return false;

        localStorage.setItem('alexandra_auth_token', JSON.stringify({password: token.password, at: Date.now()}));
        
        return true;
    }
}