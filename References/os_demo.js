const os = require('os')

// os gives info about our OS

// platfrom
console.log(os.platform()) // win32 or darwin (for mac)
console.log(os.arch())
console.log(os.cpus()) //info about all cores of the CPU

//memory
console.log(os.freemem()) //allow to build app that behave dfferent based on freemem
console.log(os.totalmem())
//home dir
console.log(os.homedir())
console.log(os.uptime()) //how many seconds my system is up

