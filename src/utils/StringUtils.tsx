const Utils = {

    removeMaskNumber: (strr: string) => {
        return strr.replace(/\D/g, '')
    },

    formatWithMask: (value: string, pattern: string) => {
        var i = 0,
            v = value.toString();
        return pattern.replace(/#/g, _ => v[i++]);
    },

    masks: {
        cpf: "###.###.###-##",
        phone: "(##) #####-####"
    }
}

export default Utils;