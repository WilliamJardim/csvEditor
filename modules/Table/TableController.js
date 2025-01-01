window.Editor.Table = {}

window.Editor.Table.TableController = class{
    constructor( fatherContext ){
        this.name = `controller-${ fatherContext.getName() }`;
        this.id = `controller-${ fatherContext.getId() }`;
        this.component = fatherContext;
    }

    getComponent(){
        return this.component;
    }

    doAction( actionName=String(''), parameters={} ){
        if(!actionName){
            throw Error('Ação é necessario!');
        }

        if( this[actionName] ){
            this[actionName].bind( this.getComponent() )( parameters );
        }else{
            throw `A ação ${ actionName } não existe no controller ${ this.name }`;
        }
    }
}

