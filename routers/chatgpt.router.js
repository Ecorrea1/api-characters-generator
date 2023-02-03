const { Router } = require('express');
const router = Router();
const { getResultChatGpt } = require('../services/chatgpt.services');

// GET all users
router.get('/', getResultChatGpt );

module.exports = router;