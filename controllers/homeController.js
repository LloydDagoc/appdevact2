// controllers/homeController.js

exports.getHomePage = (req, res) => {
    res.render('index', { 
        title: 'Node.js Project', 
        message: 'Hi this is my activity 2 in app dev' 
    });
};
