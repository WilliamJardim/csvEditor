window.Editor.EditorComponent = class{
    constructor( config={} ){
        //Config
        this.name = config.name || '';
        this.dados = config.dados || [[]];
        this.id = new Date().getTime();

        //Partes
        this.controller = new window.Editor.EditorController(this);
        this.view = new window.Editor.EditorView(this);

        //Renderiza
        this.render();
    }

    getDados(){
        return this.dados;
    }

    render(){
        this.view.render();
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getController(){
        return this.controller;
    }

    getView(){
        return this.view;
    }

    doAction( actionName=String(''), parmeters={} ){
        this.getController().doAction( actionName, parmeters );
    }
}

//Alias
window.Editor.Editor = window.Editor.EditorComponent;