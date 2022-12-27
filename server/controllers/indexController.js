const controller = {}
const title = 'HomePage';

controller.showlist = (req, res) => {
    res.render('Pages/homePage', { title });
}

module.exports = controller