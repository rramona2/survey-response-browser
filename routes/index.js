var express = require('express')
var responses = require('../middleware/responses.js')
var router = express.Router()

const wording = {
	urlPrefix: 'http://TODO',
	title: 'response browser',
	description: 'coucou',
	thumbnail: 'http://TODO.jpg',
	twitterUsername: '@adrienjoly',
}

router.get('/:index?', function(req, res, next) {
	var index = req.params.index
	responses.get().then(
		(responses) => {
			console.log(responses)
			return res.render('index', Object.assign({}, wording, {
				responses: /* index !== '' ? [ responses[index] ] : */ responses
			}))
		},
		(err) => next(err)
	)
})

module.exports = router
