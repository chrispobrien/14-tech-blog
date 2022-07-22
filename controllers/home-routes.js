const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Homepage, show all posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['post_id', 'post_title', 'post_text', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: [
                    'comment_id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at',
                ],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
        .then((dbPostData) => {
            // Serialize each element
            const posts = dbPostData.map((post) => post.get({ plain: true }));
            // Render
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// Signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// Single post page
router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            post_id: req.params.id,
        },
        attributes: ['post_id', 'post_title', 'post_text', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: [
                    'comment_id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at',
                ],
                include: {
                    model: User,
                    attributes: ['username'],
                },
            },
            {
                model: User,
                attributes: ['username'],
            },
        ],
    })
        .then((dbPostData) => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            // Serialize the data
            const post = dbPostData.get({ plain: true });

            // Pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
