export default class ObjectGroup{
    constructor(name){
        this.name = name;
        this.objects = [];
    }
    registerObject(object){
        this.objects.push(object);
    }
    render(){
        this.objects.forEach((object) => {
            object.render();
        });
    }
}

