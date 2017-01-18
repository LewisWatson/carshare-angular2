import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'users'
})
export class User extends JsonApiModel {
    id: string;

    @Attribute()
    username: string;
}