const Utils = {

    //Função para remover mascara de string q suportam apenas numeros
    removeMaskNumber: (strr: string) => {
        return strr.replace(/\D/g, '')
    },

    //Função para formatar uma string com uma determinada mascara
    formatWithMask: (value: string, pattern: string) => {
        var i = 0,
            v = value.toString();
        return pattern.replace(/#/g, _ => v[i++]);
    },

    //Objeto de mascaras em comum
    masks: {
        cpf: "###.###.###-##",
        phone: "(##) #####-####"
    }
}

export default Utils;