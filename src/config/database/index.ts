import mongoose from 'mongoose'

export const dbConnection = async () => {
    
    try {

        await mongoose.connect( process.env.MONGODB_CNN ?? '')

    } catch( error ) {

        console.log(error)
        throw new Error(`Error on moounted db: ${ error }` )

    }

}
