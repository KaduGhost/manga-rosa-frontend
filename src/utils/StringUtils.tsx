const Utils = {

    removeMaskNumber: (strr: string) => {
        return strr.replace(/\D/g, '')
    }
}

export default Utils;