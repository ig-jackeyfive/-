// base64转blob
export function base64ToBlob(code) {
    const parts = code.split(';base64,')
    const contentType = parts[0].split(':')[1]
    const raw = window.atob(parts[1])
    const rawLength = raw.length
    const uInt8Array = new Uint8Array(rawLength)
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uInt8Array], {
        type: contentType
    })

}

//动态加载css/js文件
// export function loadjscssfile(filename, filetype) {
//     if (filetype == "js") {
//         varfileref = document.createElement('script')

//         fileref.setAttribute("type", "text/javascript")

//         fileref.setAttribute("src", filename)

//     } else if (filetype == "css") {
//         varfileref = document.createElement("link")

//         fileref.setAttribute("rel", "stylesheet")

//         fileref.setAttribute("type", "text/css")

//         fileref.setAttribute("href", filename)

//     }

//     if (typeof fileref != "undefined")

//         document.getElementsByTagName("head")[0].appendChild(fileref)

// }