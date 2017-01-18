import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';

import { User }     from './user';

@JsonApiModelConfig({
    type: 'scores'
})
export class Score  extends JsonApiModel {

    @BelongsTo()
    user: User;

    @Attribute()
    metresAsDriver: number;

    @Attribute()
    metresAsPassenger: number;
}