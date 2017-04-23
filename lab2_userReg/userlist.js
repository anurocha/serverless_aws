console.log('Loading function');
var aws = require('aws-sdk');

var ddb = new aws.DynamoDB.DocumentClient({region: 'ap-southeast-1'});
    
function getUsers(cb) {
     try {
        var q = ddb.scan({TableName: "userInfoDB"}, function(err, data) {
                if (err) {
                     cb.fail(data);
                }
                else {
                    cb.succeed(data);
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
    getUsers(context);
   
};