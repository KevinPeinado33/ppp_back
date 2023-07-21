import { UploadApiOptions, ConfigOptions } from 'cloudinary'

interface Params {
    cloudinary   : ConfigOptions
    documentB64  : string
    nameDocument : string
}

export const uploadDocument = async ({ cloudinary, documentB64, nameDocument }: Params) => {

    const options: UploadApiOptions = {
        folder        : 'ppp',
        public_id     : nameDocument,
        resource_type : 'raw'
    }

    const fileTransformed = `data:application/pdf;base64,${ documentB64 }`

    return await cloudinary.uploader.upload( fileTransformed, options )
        
}
