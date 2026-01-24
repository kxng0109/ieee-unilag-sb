const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { subscribeUser } = require('../controllers/newsletterController');

router.post(
    '/signup',
    [
        body('email')
            .isEmail().withMessage('Please provide a valid email address')
            .normalizeEmail()
    ],
    subscribeUser
);

module.exports = router;