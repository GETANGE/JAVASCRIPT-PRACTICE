function Stopwatch(){
    //constructor variables
    let startTime,endTime,running,duration=0;

    this.start = function(){
        if(running){
            throw new error("Stopwatch has already started");
        }else{
            startTime=new Date();
        }
        running=true;
    }
    this.stop = function(){
        if(!running){
            throw new error("Stopwatch has not started");
        }else{
            endTime=new Date();
            const seconds=(endTime.getTime()-startTime.getTime())/1000;
            duration +=seconds
        }
        running=false;
    }
    this.reset= function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    }
    Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
    })
}
Stopwatch();