interface ISmartphone{
    marker: string;
    name: string;
    battery: number;
    created_at: Date;
    features: string[];
}

let iPhoneX: ISmartphone = {
    marker: 'Apple',
    name: 'iPhone X',
    battery: 65,
    created_at: new Date(2017),
    features : ['스피커','카메라','FaceID']
}

let galaxyS10: ISmartphone = {
    marker: 'Samsung',
    name: 'galaxyS10',
    battery: 40,
    created_at: new Date(2019),
    features: ['카메라', '5G', '지문인식']
}

console.log(iPhoneX);
console.log(galaxyS10);

interface Car {
    brand: string;
    color: string;
    maxPeople: number;
}

interface Bus extends Car{
    price: number;
    isPrivate: boolean;
}

const checkBusTime = (bus: Bus) : Date => {
    //  버스 시간 확인 코드 지정
    return new Date();
}

const testFunction = (isBoolean: boolean, isSentence: string) : {
  result: string } => {
    return {
        result: 'completed'

    }
  }