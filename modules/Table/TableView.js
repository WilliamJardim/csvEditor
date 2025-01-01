window.Editor.Table.TableView = class{
    constructor( fatherContext=null ){
        this.component = fatherContext;
        this.name = `view-${ fatherContext.getName() }`;
        this.id = `view-${ fatherContext.getId() }`;
        this.dom = fatherContext.htmlElement || document.body;

        this.html = `
            <div>
                <div class='table-content'>
                    teste
                </div>

            </div>
        `;

        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute('class', 'table-body');
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
