module.exports.page = async (req, res) => {
    res.render('search', { title: 'Search', scripts: ['api.js', 'search.js'] });
};
