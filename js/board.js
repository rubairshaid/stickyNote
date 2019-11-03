class board {
    constructor()
    {
        this.name="Board";
        this.NoteList= new Array();
    }
   
    addNote (Note)
    {
        this.NoteList.push(Note);

    }
    getBoard()
    {
        let i=0;
        for (i=0;i<NoteList.lenght;i++)
        {
            NoteList[i].appearNote(i);
        }
    }

    setName (name) 
    {
        this.name = name;
    }
}