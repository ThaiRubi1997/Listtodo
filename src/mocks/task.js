const { v4: uuidv4 } = require('uuid');


let task = [
    {
        id : uuidv4(),
        name : 'ABCLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisea c',
        level: 0
    },
    {
        id : uuidv4(),
        name : 'DCFLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisea c',
        level: 1
    }
    ,{
        id : uuidv4(),
        name : '123Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisea c',
        level: 2
    }
]

export default task;