var name = 'out wzf'
const x = {
    name: 'wzf',
    say1: function() {
        console.log(this, this.name);
    },
    say2: () => {
        console.log(this, this.name);
    }
}


x.say1()
x.say2()


