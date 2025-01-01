window.Editor.Table.TableComponent = class{
    constructor( config={}, fatherContext ){
        //Config
        this.name = config.name || '';
        this.id = new Date().getTime();
        this.fatherContext = fatherContext;

        //Partes
        this.controller = new window.Editor.Table.TableController(this);
        this.view = new window.Editor.Table.TableView(this);
    }

    getDados(){
        return this.dados;
    }

    getHTML(){
        return this.view.getHTML();
    }

    setHTML(html){
        this.view.setHTML(html);
    }

    render(){
        this.view.render();
    }

    updateData(dados){
        this.fatherContext.getComponent().setDados( dados );
        this.render();
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
window.Editor.Table.Table = window.Editor.Table.TableComponent;