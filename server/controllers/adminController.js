const controller = {}
const title = 'Admin';


controller.showlist = (req, res) => {
    res.render('Pages/admin', {title});
}

module.exports = controller