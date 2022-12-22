const GoogleStrategy = require('passport-google-oauth20').Strategy;
import { User } from '../../models/userModel';
//{OAuth}?

const config = {
  clientID:
    '417953778150-gg3gfoi2v7rtl2k3u0voffb4fnu3ejst.apps.googleusercontent.com', // clientId 설정하기
  clientSecret: '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', // clientSecret 설정하기,
  callbackURL: 'http://localhost:3000/auth/google/callback',
};

async function findOrCreateUser({ name, email }) {
  const user = await User.findOne({
    email,
  });

  if (user) {
    return user;
  }

  const created = await User.create({
    name,
    email,
    password: 'GOOGLE_OAUTH',
  });

  return created;
}

const google = new GoogleStrategy(
  config,
  async (accessToken, refreshToken, profile, done) => {
    const { email, name } = profile._json;

    try {
      const user = await findOrCreateUser({ email, name });
      done(null, {
        shortId: user.shortId,
        email: user.email,
        name: user.name,
      });
    } catch (e) {
      done(e, null);
    }
  }
);

export { google };
