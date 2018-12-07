

export class Book {
    private id: string;
    private title: string;
    private authorId: string;
    private authorName: string;

    constructor(id: string, title: string, authorName: string) {
        this.id = id;
        this.title = title;
        this.authorName = authorName;
    }

    getAuthorName(): string {
        return this.authorName;
    }

    setAuthorName(name: string) {
        this.authorName = name;
    }

    public getBookId(): string {
        return this.id;
    }

    public getBookTitle(): string {
        return this.title;
    }

    

    public setBookId(id: string) {
        this.id = id;
    }

    public setBookTitle(title: string) {
        this.title = title;
    }

    public setAuthorId(authorId: string) {
        this.authorId = authorId;
    }

    public getAuthorId(): string {
        return this.authorId;
    }
}