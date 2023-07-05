export class Livre {

    isbnlivre:number;
    titre:string;
    auteur:string;
    datePublication:Date;

    constructor(isbnlivre:number, titre:string, auteur:string, datePublication:Date)
    {
        this.isbnlivre=isbnlivre;
        this.auteur=auteur;
        this.titre=titre;
        this.datePublication=datePublication;
    }
}
