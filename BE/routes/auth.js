const express = require('express');
const passport = require('passport');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { join, login, logout } = require('../controllers/auth');

const router = express.Router();

// POST /auth/join (회원가입)
router.post('/join', isNotLoggedIn, join);

// POST /auth/login (로그인)
router.post('/login', isNotLoggedIn, login);

// GET /auth/logout (로그아웃)
router.get('/logout', isLoggedIn, logout);

// GET /auth/kakao
router.get('/kakao', passport.authenticate('kakao'));

module.exports = router;
