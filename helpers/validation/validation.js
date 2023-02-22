export const validation = {
    email: {
        re: /\S+@\S+\.\S+/,
    },
    phone: {
        // re: /^\+3\d\s\(\d{3}\)\s\d{2}\-\d{3}\-\d{2}$/, 
        re: /^\+?\d{1,3}?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/gm
    }


};

// export default validation; 