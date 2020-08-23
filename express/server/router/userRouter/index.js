import express from 'express'
import register from './rigister'
import login from './login'
import isLogin from './isLogin'
const router = express.Router();


router.post('/register', register)
router.post('/login', login)
router.get('/isLogin', isLogin)

export default router;