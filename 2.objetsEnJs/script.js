let character={
    name: 'Villager',
    age : 35,
    items_to_give:['Axe','Diamond','Cooked Potato','Rifle'],
}
function giveItem() {
    let rand = Math.floor(Math.random() * Math.floor(character.items_to_give.length))
    let gift= character.items_to_give[rand]
    character.items_to_give.splice(rand,1)
    return gift
}
Object.keys(character).forEach(key =>{
    console.log(key+' : '+character[key])
})
console.log(giveItem())
Object.keys(character).forEach(key =>{
    console.log(key+' : '+character[key])
})


let shop =[
    {
        title:'Sword',
        physic:10,
        magic:0,
        minLevel:1,
        available:true
    },
    {
        title:'Axe',
        physic:35,
        magic:0,
        minLevel:10,
        available:true
    },
    {
        title:'Scepter',
        physic:2,
        magic:20,
        minLevel:10,
        available:true
    },
    {
        title:'RPG-7',
        physic:9001,
        magic:0,
        minLevel:200,
        available:false
    }

]
function show_items_shop(){
    for (elem in shop){
        console.log('---------------------')
        Object.keys(shop[elem]).forEach(key =>{
            console.log(key+' : '+shop[elem][key])
        })
    }
}
function show_available(){
    for (elem in shop){
        if(shop[elem].available){
            console.log('---------------------')
            Object.keys(shop[elem]).forEach(key =>{
                console.log(key+' : '+shop[elem][key])
            })
        } 
    }
}
function show_lvl10(){
    for (elem in shop){
        if(shop[elem].minLevel==10){
            console.log('---------------------')
            Object.keys(shop[elem]).forEach(key =>{
                console.log(key+' : '+shop[elem][key])
            })
        } 
    }
}
show_items_shop()
show_available()
show_lvl10()

let mainCharacter={
    name: 'Villager',
    level : 57,
    life: 100,
    weapon:{
        'name':'Hammer',
        'attack':120
    },
    attack:()=>{
        console.log(this.name+' attacks for '+(mainCharacter.weapon.attack*mainCharacter.level))
    }
}
mainCharacter.attack() 

