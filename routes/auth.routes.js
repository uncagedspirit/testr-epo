import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
    console.log(req);
    res.send('Login Page');
    });

router.get('/logout', (req,res)=>{
    res.send("logged out");
});

// router.get('/register', (req, res) => {
//     let username= prompt("Enter your username");
//     res.send(`welcome ${username}`);
// });


// http://localhost:8089/api/v1/register
router.get('profile/:uid', (req, res) => {
    const userId = req.params.uid;
    res.json({userId: userId, status:"success", message: "user profile endpoint hit"});
});

//http://localhost:8089/api/v1/profile?role=admin&uid=1234&cat=electronics
router.get('/profile', (req, res) => {
    const { role, uid, cat } = req.query;
    res.json({ role, uid, cat, status: "success", message: "user profile endpoint hit with query params" });
});

//http://localhost:8089/api/v1/profile/1234/details?projects=react,angular
router.get('/profile/:uid/details', (req, res) => {
    const userId = req.params.uid;
    const { projects } = req.query;
    res.json({ userId, projects, status: "success", message: "user profile details endpoint hit" });
});

export default router;