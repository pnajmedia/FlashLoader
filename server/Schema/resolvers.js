const { Users } = require('../fakeUserData')

const resolvers = {
    Query: {
        //For getting all the available USERS
        getAllUsers: () => {
            return Users;
        },
            //For calling by ID; not applicable though!
            // getUserByEntity: async (_, args) => {
            //     const user = Users.find(user => user.name === args.name)
            //     // console.log('by entity User', user)
            //     return user;
            // }

    },

            //For Creting new user; not applicable though
            // Mutation: {
            //     createNewUser(_, args) {
            //         const newUser = args;
            //         Users.push(newUser);
            //         return newUser;
            //     }
            // }
}

module.exports = resolvers