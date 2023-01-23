const os  = require('os')

// info bout current user
const user = os.userInfo()

console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime: ${os.uptime} seconds`);


const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);