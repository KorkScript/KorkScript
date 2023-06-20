#export-all
#use-time

function sayHelloWorld() {
    => "hello world"
}

function getTime() {
    => time:getMs()
} 

sayHelloWorld();