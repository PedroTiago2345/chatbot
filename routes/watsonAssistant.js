var express = require('express');
var router = express.Router();
const watsonAssistant = require('../config/watsonConfig');

router.post('/',function(req,res,nest) {
    var { text, context} = req.body;
    context = JSON.parse(context);

    const params = {
        input:{ text } ,
        workspace_id:'be4f02fb-9213-4ea0-823f-795b08ca4ad4',
        context
    };

    watsonAssistant.message(
        params,
        function(err, response) {
            if(err)
                res.json({ status: 'ERRO' , data: err});
            else {
                res.json({ status: 'OK' , data: response});
            }
        }
    );
});

module.exports = router;