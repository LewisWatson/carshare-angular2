import { User }     from './user';
import { CarShare } from './car-share';

export class Trip {
    id: string;
    metres: number;
    timestamp: Date;
    carShare: CarShare;
    driver: User;
    passengers: User[];
    scores: {};
}