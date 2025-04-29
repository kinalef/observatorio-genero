// api/config/passport.js
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.resolve(__dirname, '../../.env') }); 
}

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');


const usuarios = []; 

if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }));
} else {
  console.warn('Google OAuth environment variables are missing. Skipping Google Strategy.');
}


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
},

async (accessToken, refreshToken, profile, done) => {
  // Buscar usuario por ID de Google o email
  let usuario = usuarios.find(u => u.id === profile.id);
  if (!usuario) {
    usuario = {
      id: profile.id,
      nombre: profile.displayName,
      email: profile.emails[0].value,
      foto: profile.photos[0].value
    };
    usuarios.push(usuario);
  }

  // Aquí no devolvemos el perfil, sino un JWT generado por nosotros
  const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

  return done(null, { usuario, token });
}));

module.exports = passport;