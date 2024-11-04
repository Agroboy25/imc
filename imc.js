function imc(){
    const formulario = document.getElementsByName("formulario")[0]
    const formDados = new FormData(formulario)
    const paciente = {
        nome:formDados.get("nome"),
        email:formDados.get("email"),
        dataNasc:formDados.get("nasc"),
        telefone:formDados.get("tel"),
        sexo:document.querySelector('input[nome=sexo]:checked').value,
        peso:formDados.get("peso"),
        altura:formDados.get("altura"),
        classificacao:"",
        calcularIMC(){
            if (this.altura > 3) this.altura=this.altura/100
            const imc = this.peso/this.altura**2;
            if (imc < 18.5 ) this.classificação = "obesidade marbida";
            if (imc >= 18.5 &&  imc < 25 ) this.classificação = "saudavel"
            if (imc >= 25 &&  imc < 30 ) this.classificação = "sobrepeso"
            if (imc >= 30 &&  imc < 35 ) this.classificação = "obesidade"
            if (imc >= 35 &&  imc < 40 ) this.classificação = "obesidade Severa"
            if (imc >= 40 ) this.classificaçao = "magreza"
            return imc.toFixed(2);
        
            
            
        },
        
    }
    console.log(paciente)
    console.log(paciente.calcularIMC())
    let resposta=document.getElementById('resposta');
    resposta.innerHTML="Seu IMC ÃO "+paciente.calcularIMC()+". " + "Sua classifição de peso ÃO " + paciente.classificação;
}
