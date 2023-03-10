const jwt = require('jsonwebtoken');

const validatedJWT = (req, res, next) => {
    const token = req.header('x-token');
    if (!token) return res.status(400).json({ ok: false, msg: 'No hay token' });
    try {
        const { uid } = jwt.verify(token, process.env.JWT_KEY);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(401).json({ ok: false, msg: 'Token no valido' })
    }
}

module.exports = { validatedJWT };