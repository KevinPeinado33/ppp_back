import { IsNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator'

export class StudentCreateEntity {
    
    @IsString()
    @MinLength(4)
    @MaxLength(50)
    @Matches(
        /^\d+$/, {
        message: 'El codigo solo debe ser numeros.'
    })
    code!: string
    
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @Matches(
        /^[a-zA-Z]+$/, {
        message: 'No se puede tener numeros en los nombres.'
    })
    firstName!: string
    
    @Matches(
        /^[a-zA-Z]+$/, {
        message: 'No se puede tener numeros en los apellidos.'
    })
    lastName!: string

    @IsNumber()
    cycle!: number

    @IsString()
    academySchool!: string
    
    @IsString()
    @Matches(
        /^[a-zA-Z]+$/, {
        message: 'No se puede tener numeros en el dni.'
    })
    dni!: string

}
