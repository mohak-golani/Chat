export type UserId = string;

export interface Chat{
    id: string;
    userId: UserId;
    name: string;
    message: string;
    upvotes: UserId[]; //who has upvoted what

}

export class Store{
    constructor(){

    }
    initRoom(roomId: string) {

    }

    getChats(room: string, limit: number, offset: number){

    }
    addchat(userId: UserId, name: string, room: string, message: string){

    }
    upvote(userId: UserId, room: string, chatid : string){

    }
}