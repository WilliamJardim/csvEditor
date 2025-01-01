window.Editor.EditorView = class{
    constructor( fatherContext ){
        this.component = fatherContext;
        this.name = `view-${ fatherContext.getName() }`;
        this.id = `view-${ fatherContext.getId() }`;
        this.dom = document.body;

        this.html = `
            <h1> TESTE </h1>
        `;

        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 'editor-body');
        this.add();
    }

    destroy(){
        this.dom.removeChild(this.htmlElement);
    }

    add(){
        this.dom.appendChild(this.htmlElement);
    }

    render(){
        this.destroy();
        this.add();
        this.htmlElement.innerHTML = this.html;
    }

    getHTML(){
        return this.html;
    }

    setHTML(html){
        this.html = html;
    }

    getComponent(){
        return this.component;
    }

    getController(){
        return this.getComponent().getController();
    }

    doAction( actionName=String(''), parmeters={} ){
        this.getController().doAction( actionName, parmeters );
    }
}