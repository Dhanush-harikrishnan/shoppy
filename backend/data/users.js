import bcrpt from "bcryptjs"

const users = [
    {
        name:'Admin User',
        email:'admin@email.com',
        password: bcrpt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name:'Dhanush',
        email:'dhanush@email.com',
        password: bcrpt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name:'barath',
        email:'barath@email.com',
        password: bcrpt.hashSync('123456',10),
        isAdmin: true,
    },

]

export default users;