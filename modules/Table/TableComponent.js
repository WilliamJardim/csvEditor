window.Editor.Table.TableComponent = class{
    constructor( config={} ){
        //Config
        this.name = config.name || '';
        this.id = new Date().getTime();
        this.dados = null;

        //Partes
        this.controller = new window.Editor.Table.TableController(this);
        this.view = new window.Editor.Table.TableView(this);
    }

    updateData(dados){
        this.dados = dados;
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