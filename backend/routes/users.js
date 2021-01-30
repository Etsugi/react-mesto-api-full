const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');

const {
  getUsers,
  getUserById,
  getUserInfo,
  updateUser,
  updateUserAvatar
} = require('../controllers/users');

router.get('/', auth, getUsers);

router.get('/me', getUserInfo);

router.get('/:id', auth, celebrate({
  body: Joi.object().keys({
    id: Joi.string().required()
  }),
}), getUserById);

router.patch('/me', auth, celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30)
  }),
}), updateUser);

router.patch('/me/avatar', auth, celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required()
      .regex(/^((https?):\/\/)?(www\.)?([A-Za-z0-9]{1}[A-Za-z0-9-]*\.?)*\.{1}[A-Za-z0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/)
  }),
}), updateUserAvatar);

module.exports = router;
