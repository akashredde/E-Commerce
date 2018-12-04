interface IRemote {
    volumeUp(): void;
    volumeDown(): void;
    powerOff(): void;
    powerOn(): void;
}

class Television implements IRemote {

    volumeUp(): void {
        console.log("Television Volume Up");
    }
    volumeDown(): void {
        console.log("Television Volume Down");
    }
    powerOff() {
        console.log("Television Power Off");
    }
    powerOn() {
        console.log("Television Power On");
    }
}

class SoundBar implements IRemote{

    volumeUp(): void {
        console.log("SoundBar Volume Up");
    }
    volumeDown(): void {
        console.log("SoundBar Volume Down");
    }
    powerOff() {
        console.log("SoundBar Power Off");
    }
    powerOn() {
        console.log("SoundBar Power On");
    }
}

var rem = new Television();
rem.powerOff();
rem.powerOn();
rem.volumeDown();
rem.volumeUp();

var sbar = new SoundBar();
sbar.powerOff();
sbar.powerOn();
sbar.volumeDown();
sbar.volumeUp();