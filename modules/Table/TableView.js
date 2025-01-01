window.Editor.Table.TableView = class{
    constructor( fatherContext=null ){
        this.component = fatherContext;
        this.name = `view-${ fatherContext.getName() }`;
        this.id = `view-${ fatherContext.getId() }`;
        this.dom = fatherContext.htmlElement || document.body;
        this.fatherContext = fatherContext;

        this.tableHTML = `
        
        `;

        this.html = `
            <div>
                <div class='table-content'>
                    
                    ${ this.tableHTML }

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
        //Exibe os dados
        const dados = this.fatherContext.fatherContext.getComponent().getDados();
        this.tableHTML = ""; // Inicializa a variável apenas se estiver indefinida
        this.tableHTML += `<table>`; // Usa += para acrescentar

        //Cabealho
        const valoresCabecalho = dados[0];
        this.tableHTML += `<tr class='linha-cabecalho linha'>
                                ${ valoresCabecalho.map(( valor )=>{
                                    return `<td class='coluna-cabecalho coluna'> ${ String(valor) } </td>`
                                }).join(' ') }
                           </tr>`

        //Corpo dos dados
        for( let i = 1 ; i < dados.length ; i++ ){
            const valores = dados[i];

            this.tableHTML += `<tr class='linha'>
                                  ${ valores.map(( valor )=>{
                                      return `<td class='coluna'> ${valor} </td>`
                                  }).join(' ') }
                               </tr>`
        }

        this.tableHTML += `</table>`;

        //Atualiza a VIEW
        this.html = `
            <div>
                <div class='table-content'>
                    
                    ${ this.tableHTML }

                </div>

            </div>
        `;

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
