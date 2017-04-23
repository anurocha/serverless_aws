exports.handler = (event, context, callback) => {
    console.log('converter : ' + event.thb);
    let thb = event.thb;
    let thbUsd = 35;
    callback(null, thb*thbUsd );
};