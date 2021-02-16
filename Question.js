class Question{
    constructor(){
        this.input=createInput("name");
        this.input2=createInput("option");
        this.button=createButton("optionbutton");
        this.button=createButton("namebutton");
        this.heading=createElement("h1");
        this.question=createElement("h2");
        this.option1=createElement("h3");
        this.option2=createElement("h3");
        this.option3=createElement("h3");
        this.option4=createElement("h3");

    }
    display(){
        this.title.html("My Quiz");
        this.title.position(350,0);

        this.question.html("Who is the current world record holder for 3x3");
        this.question.html(150,80);

        this.option1.html("1: Feliks Zemdegs ")
        this.option1.html(150,100);

        this.option2.html("2: Yusheng Du ")
        this.option2.html(150,120);

        this.option3.html("1: Max Park ")
        this.option3.html(150,140);

        this.option4.html("1: Daxton Westlake ");
        this.option4.html(150,160);

        this.input.position("130,250")
        this.input2.position("130,280")
    }
    

}

