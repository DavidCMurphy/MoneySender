import 'react-native'
import { nameForm, emailForm, amountForm } from '../Send/Forms'

describe('Form validation shoudl function correctly', () => {

  it('should validate name successfully', () => {
      const name = nameForm()
      expect( name.validation( 'David' ) ).toEqual( true )
      expect( name.validation( '' ) ).toEqual( false )
  })

  it('should validate email successfully', () => {
    const name = emailForm()
    expect( name.validation( 'David.conor.m@gmail.com' ) ).toEqual( true )
    expect( name.validation( 'David' ) ).toEqual( false )
    expect( name.validation( '' ) ).toEqual( false )
  })

  it('should validate account successfully', () => {
    const name = amountForm()
    expect( name.validation( '1000' ) ).toEqual( true )
    expect( name.validation( 'David' ) ).toEqual( false )
    expect( name.validation( '' ) ).toEqual( false )
  })
})


