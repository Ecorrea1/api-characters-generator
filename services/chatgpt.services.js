const { response } = require('express');
// const { poolConnection } = require('../databases/database.js');
const { ResultwithData, ServerError } = require('../helpers/result.js');
const { chatGPT } = require('../helpers/chatgpt.js')

const getResultChatGpt = async ( req, res = response ) => {
    try {
        // Example usage:
        return chatGPT('Hello, how are you?')
        .then((text) => {
            ResultwithData(res,'Resultado de ChatGPT', text);
        });
    
    } catch (error) {
        console.log(error);
        return ServerError(res, error);
    }
}

module.exports = { getResultChatGpt };
