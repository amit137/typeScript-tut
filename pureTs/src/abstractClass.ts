abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
    abstract getSepia():void
    getReelTime():number{
        return 8
    }
}
//when we write abstract,we cannot create objects,abstract is just a blueprint
//though we can create objects of any subclass

// const amits=new TakePhoto("test","test") //not allowed

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter,burst)
    }

    getSepia(): void {
       console.log("sepia") 
    }
}

const amits=new Instagram("test","test",123)

amits.getReelTime()