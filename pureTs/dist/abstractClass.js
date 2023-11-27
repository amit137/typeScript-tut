"use strict";
class TakePhoto {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        return 8;
    }
}
//when we write abstract,we cannot create objects,abstract is just a blueprint
//though we can create objects of any subclass
// const amits=new TakePhoto("test","test") //not allowed
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("sepia");
    }
}
const amits = new Instagram("test", "test", 123);
amits.getReelTime();
