const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

exports.join = async (req, res, next) => {
  const { email, nick, password } = req.body;

  try {
    // 1. DB에 기존 유저가 있는지 체크
    const exUser = await User.findOne({ where: { email } });
    // 2.유저가 있으면, 에러페이지로 리다이렉트
    if (exUser) {
      return res.redirect(`${process.env.LOCAL_SERVER}/join?error=exist`);
    }
    // 유저가 없으면은 회원가입 구현 (password => bcrypt)
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {});
};

exports.logout = async (req, res) => {};