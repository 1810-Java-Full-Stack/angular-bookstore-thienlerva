export class Author {
    private userId: string;
    private userName: string;
    private userBio: string;

    constructor(name: string, id: string, bio: string) {
        this.userId = id;
        this.userName = name;
        this.userBio = bio;
    }
}