const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const watsonConfig = new AssistantV1({
    version:'2019-03-18',
    username:'apikey',
    password:'_Bfe43OIdxb-CKMQJd2o80LFuzszF5WI6E-jRQ7QNkpx',
    url:'https://gateway.watsonplatform.net/assistant/api'
});
module.exports = watsonConfig;