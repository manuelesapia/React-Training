let attendance = {
    _list:[],
    set addName(name){
        this._list.push(name);
    },
    get list(){
        return this._list.join(",");
    }
}

attendance.addName = "Manuel";
attendance.addName = "David";
attendance.addName = "leo";

//console.log(attendance.list);

class Hike {
    constructor (distance, pace){
        this.distance = distance;
        this.pace = pace;
    }

    get lenthh


}
