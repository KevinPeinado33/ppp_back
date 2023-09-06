import cron from 'node-cron'
import { PPPRepositoryImpl } from '../../../ppp/data/repositories'

export const scheduleController = () => {
    const pppRepository = new PPPRepositoryImpl()

    
    cron.schedule("0 13-59 19 * * *", async () => {

        try {
            
            const pppData = await pppRepository.getStartDate()
        
            let idUsuario
            let startDatePPP

            pppData.map(x => {
                console.log(x)
                idUsuario = x['advisorId' as keyof typeof x]
                startDatePPP = x['started_date' as keyof typeof x]
                
            })

            console.log('Este es un usuario: '
                                            +idUsuario 
                                            +' Esta es la fecha:  '
                                            +startDatePPP) 
        } catch( error ) {
            console.log("error: " + error )
        }
    }
    )
}
