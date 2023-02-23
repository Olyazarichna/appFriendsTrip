export const validation = {
    email: {
        re: /\S+@\S+\.\S+/,
    },
    phone: {
        re: /^\+?\d{1,3}?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/gm
    }
};