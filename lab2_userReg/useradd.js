console.log('Loading function');
var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient({region: 'ap-southeast-1'});
    
function addUser(event, cb) {
    if( event.name === '' ||  event.lastname === '' ) {
        cb.fail('invalid input');
    }
     try {
        var q = ddb.put({TableName: "userInfoDB", 
            Item : {
                name : event.name,
                lastname : event.lastname
            }
        }, function(err, data) {
                if (err) {
                     cb.fail(data);
                }
                else {
                    cb.succeed("{ 'status' : 'OK'}");
                }
            }
        );
    }
    catch (error){
        cb.fail("Caught: " + error);
    }
}

exports.handler = (event, context) => {
    console.log('ARO invoke');
    addUser(event, context);
   
};