function CadastroForm(){
 return (
    <form>
        <div>
            <input type="text" placeholder="Insira o Nome da empresa"/>
        </div>

        <div>
            <input type="text" placeholder="Cidade da empresa"/>
        </div>

        <div>
        <select name="categoy_id">
            <option disabled>Selecione a categoria</option>
        </select>
        </div>

        <div>
        <input type="sumbmit" value="Cadastrar empresa"/>
        </div>
    </form>
 ) 
}

export default CadastroForm