const express = require('express');
const passport = require('passport');

const router = express.Router();

router.post('/join');
router.post('/login');
router.get('/logout');

router.get('/kakao', passport.authenticate('kakao'));

module.exports = router;
