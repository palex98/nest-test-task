db.createUser(
    {
        user: "redvike-db-user",
        pwd: "redvike-db-password",
        roles: [
            {
                role: "readWrite",
                db: "redvike-test"
            }
        ]
    }
);

db.createCollection('users');
db.users.insert({username: 'admin', password: '$2b$10$yk6Jf2miiTz3DTHhvBD.Z.bDvCccBo/5tO.vYZQlrAIcKHdXew1Ci'});
