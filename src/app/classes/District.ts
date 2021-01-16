import { State } from './State';

export class District {
    id:number;
    districtCode:string;
    districtName:string;
    state: State;

    constructor(id:number,districtCode:string,districtName:string,state:State){
        this.id=id;
        this.districtCode=districtCode;
        this.districtName=districtName;
        this.state=state;
    }
}