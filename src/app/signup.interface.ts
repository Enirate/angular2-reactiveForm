export interface User {
    name:string;
    account:
        {
            email:string;
            confirm:string;
        }
} //the format for our forms. N.B we can nest form groups. account is a form group nested inside the user form group.