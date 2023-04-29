import mongoose, { ConnectOptions  } from 'mongoose'

export const dbConnection = async () => {

    try {
        // await mongoose.connect( process.env.MONGODB_CNN ?? '')
        mongoose.connect(
            process.env.MONGODB_CNN || '',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions 
        );

    } catch (error) {

        console.log(error)
        throw new Error(`Error on moounted db: ${error}`)

    }

}
