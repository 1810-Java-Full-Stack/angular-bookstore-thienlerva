export class Author {
    private authorName: string;
    private authorId: string;
    private authorBio: string;

    constructor(name: string, id: string, bio: string) {
        this.authorName = name;
        this.authorId = id;
        this.authorBio = bio;
    }

    public getAuthorId(): string {
        return this.authorId;
    }

    public getAuthorName(): string {
        return this.authorName;
    }
}