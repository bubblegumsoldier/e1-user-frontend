import { UserCapability } from "./capabilities/UserCapability";

export class User
{
    objectId :string;
    username :string;
    email :string;
    ACL :any;
    rights :UserCapability;
    password :string;
}