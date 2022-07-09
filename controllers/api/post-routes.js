const sequelize = require('../../config/connection');
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const { apiAuth } = require('../../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        order: [['created_at', 'DESC']],
        attributes: [
            'post_id',
            'post_title',
            'post_text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['comment_id','comment_text','post_id','user_id','created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;