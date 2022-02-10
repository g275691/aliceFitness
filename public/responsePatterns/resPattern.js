const resPattern = ( 
  text,
   ) => {
  return {
    "response": {
      "text": text,
      "tts": text,
    //   "card": {
    //     "type": "..."
    //   },     
      // "buttons": [
      //     {
      //         "title": "Надпись на кнопке",
      //         "payload": {},
      //         "url": "https://example.com/",
      //         "hide": true
      //     }
      // ],
      "end_session": false,
      "directives": {}
    },
    "session_state": {
        "value": 10
    },
    "version": "1.0"
  }
}


  module.exports.resPattern = resPattern;