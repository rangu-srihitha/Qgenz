const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User'); 

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user
      user = await User.create({
        name: profile.displayName,
        email: email,
        password: 'google-oauth' // Optional placeholder
      });
      console.log('✅ New user created from Google:', user);
    } else {
      console.log('🔁 Existing Google user logged in:', user);
    }

    return done(null, user); // return saved MongoDB user
  } catch (err) {
    console.error('❌ Error saving Google user:', err);
    return done(err, null);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
