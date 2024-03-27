const jwt = require('jsonwebtoken');

const createToken=(data, secretKey, expiresInMinutes = 60)=> {
    const payload = {
        ...data,
        exp: Math.floor(Date.now() / 1000) + (expiresInMinutes * 60)
    };
    return jwt.sign(payload, secretKey);
}

module.exports={createToken}