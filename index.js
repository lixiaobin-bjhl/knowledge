const express = require('express')
const app = express()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  	apiKey: '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',
});

app.get('/', async function (req, res) {
	const openai = new OpenAIApi(configuration);
	const completion = await openai.createCompletion({
  		model: "text-davinci-003",
  		prompt: "Hello world",
	});
  	res.send(completion.data.choices[0].text)
})

app.listen(3000)