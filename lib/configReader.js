var fs = require('fs');

var configFile = (function () {
    for (var i = 0; i < process.argv.length; i++) {
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
} catch (e) {
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

global.version = "v1.1-XT-B";
global.feePercent = config.blockUnlocker.poolFee / 100;
global.devDonationAddress = '21KVPAnhkAuYVJAeBDsK7q9nsvSAJLL2tFEn4RZMzez49BW915VnJvZfNCezqRpKfLJf5dmANoy6uA2bGtZ3uT5fJN7GbiM';
global.coreDevDonationAddress = '21JrB9dNbK4KpLGg4Qz8fcbUubqJBgBW129g5N36VW16dciVNJhdgQVfNCezqRpKfLJf5dmANoy6uA2bGtZ3uT5fJJchquA';
global.doDonations = config.blockUnlocker.devDonation > 0 || config.blockUnlocker.coreDevDonation > 0;
