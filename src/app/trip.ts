import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

import { User }     from './user';
import { CarShare } from './car-share';
import { Score }    from './score';

@JsonApiModelConfig({
    type: 'trips'
})
export class Trip  extends JsonApiModel {
    id: string;

    @Attribute()
    metres: number;

    @Attribute() 
    timestamp: Date;
    
    @BelongsTo()
    carShare: CarShare;

    @BelongsTo()
    driver: User;

    @HasMany()
    passengers: User[];
    
    @HasMany()
    scores: Score[];
}