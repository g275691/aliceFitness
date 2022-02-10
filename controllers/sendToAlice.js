/** HEROKU*
 *  
git add . ; git commit -m 'git init' ; git push
heroku login
heroku open
heroku logs --tail

*/
const replic = require('../public/replics/replic.json');

const { resPattern } = require("../public/responsePatterns/resPattern");

const sendToAlice = async (req, res) => {
    
    const { message_id, user_id } = req.body.session;
    const { command, original_utterance } = req.body.request;
    const { tokens, entities } = req.body.request.nlu;

    console.log(message_id);
    console.log(command);
    console.log(tokens);
    console.log(entities);
    console.log(entities[0]);

    let first_name = "";

    if(entities[0]) {
        try {
            first_name = entities[0].value.first_name;
            first_name = first_name.slice(0,first_name.length/2 + 1)
        } catch (err) {
            console.log(err)
        }
        
    }

    if(message_id == 0) {
        res.send(resPattern(replic.hello))
    } else {
        res.send(resPattern(replic.famillarity.replace("USER_NAME", first_name)))
    }
    

}

module.exports.sendToAlice = sendToAlice;