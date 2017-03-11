const router = require('express').Router();
const path = require('path')
const bcrypt= require('bcrypt-node');
const request = require('request');
const UserController = require('UserController.js');

router.post('/vote', UserController.vote.post);

router.post('/badvote', UserController.badvote.post);