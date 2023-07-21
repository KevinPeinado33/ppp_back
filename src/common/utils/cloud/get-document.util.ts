import { ConfigOptions, UploadApiOptions } from 'cloudinary'

interface Params {
    cloudinary   : ConfigOptions,
    nameDocument : string
}

export const getDocument = async ({ cloudinary, nameDocument }: Params) => {

    const options: UploadApiOptions = { resource_type: 'raw' }

    return await cloudinary.url( `ppp/${ nameDocument }`, options )

}
