module.exports = {
	tabCreated: (req, res, next) => {

		req.prerender.tab.Network.setCookie({
			name: 'locale',
			value: req.prerender.locale,
			url: req.prerender.url,
			expires: 1600000000,
		})

		next();
	},
}
