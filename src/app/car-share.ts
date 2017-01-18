import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo, HasMany } from 'angular2-jsonapi';

import { User } from './user';
import { Trip } from './trip';

@JsonApiModelConfig({
    type: 'carShares'
})
export class CarShare extends JsonApiModel {
    id: string;
    
    @Attribute()
    name: string;

    @HasMany()
    members: User[];

    @HasMany()
    trips: Trip[];
}