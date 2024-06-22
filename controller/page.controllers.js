const displayHomePage = async(req,res)=> {
    res.render('home');
};

const displayServicePage = async(req,res)=> {
    res.render('service');
};

const displayContactPage = async(req,res)=> {
    res.render('contact');
};

module.exports = {displayHomePage, displayServicePage, displayContactPage}