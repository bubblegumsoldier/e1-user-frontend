import { UserCapability } from "./capabilities/UserCapability";

export class User
{
    id :string;
    name :string;
    email :string;
    ACL :any;
    rights :UserCapability;
}